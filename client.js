// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// When the connection is established
socket.addEventListener('open', () => {
    console.log("Connected to WebSocket server");
    // Sending a welcome message and requesting to select a room
    socket.send(JSON.stringify({ type: 'joinRoom', playType: 'play10', roomNumber: 0 }));
    console.log("Sent joinRoom request for play10, room 0");
});

// When a message is received from the server
socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    console.log("Received message: ", message);

    if (message.message) {
        console.log("Server message: " + message.message);
    }

    if (message.countdown !== undefined) {
        console.log("Countdown: " + message.countdown + " seconds remaining");
        // Handle countdown display here
    }

    if (message.type === 'gameStarted') {
        console.log("Game started in the room!");
        // Game has started, handle UI updates here
    }

    if (message.type === 'cardSelected') {
        console.log("Card selected: " + message.cardId);
        // Update the UI with the selected card
    }

    if (message.type === 'roomFull') {
        console.log("Room is full, try again later.");
        // Inform the user that the room is full
    }

    if (message.type === 'gamePhaseStarted') {
        console.log("Game phase started. Players in the room: " + message.numberOfPlayers);
        console.log("Win amount: " + message.winAmount);
        // Handle UI updates when the game starts
    }

    if (message.type === 'leftRoom') {
        console.log("Player has left the room.");
        // Handle UI updates for leaving the room
        updateUIAfterLeavingRoom();
    }
});

// Function to join a room
function joinRoom(playType, roomNumber) {
    console.log(`Attempting to join room ${roomNumber + 1} for game type ${playType}`);
    socket.send(JSON.stringify({ type: 'joinRoom', playType: playType, roomNumber: roomNumber }));
    console.log(`Join room request sent for room ${roomNumber + 1}`);
}

// Function to start the game
function startGame(playType, roomNumber) {
    console.log(`Starting the game in room ${roomNumber + 1} for game type ${playType}`);
    socket.send(JSON.stringify({ type: 'startGame', playType: playType, roomNumber: roomNumber }));
    console.log(`Start game request sent for room ${roomNumber + 1}`);
}

// Function to select a card
function selectCard(cardId) {
    console.log("Selecting card: " + cardId);
    socket.send(JSON.stringify({ type: 'selectCard', cardId: cardId }));
    console.log("Sent card selection message for card ID: " + cardId);
}

// Function to handle card selection on the front-end
function handleCardClick(cardId) {
    console.log("Card clicked: " + cardId);
    selectCard(cardId);
}

// Function to handle countdown
function handleCountdown(countdown) {
    console.log(`Countdown update: ${countdown} seconds remaining`);
    // Update the countdown UI element here
}

// Function to leave the room
function leaveRoom() {
    console.log("Attempting to leave the current room.");
    socket.send(JSON.stringify({ type: 'leaveRoom' }));
    console.log("Sent leaveRoom request to server.");
}

// Sample call to join a room
joinRoom('play10', 0);

// Sample call to start the game
startGame('play10', 0);

// Sample function to trigger card selection (you can hook this up to a UI element like a button click)
document.getElementById('card1').addEventListener('click', () => handleCardClick(1));
document.getElementById('card2').addEventListener('click', () => handleCardClick(2));

// Example: Function to display room details in the UI
function updateRoomInfo(roomDetails) {
    console.log("Updating room info: ", roomDetails);
    // Update the UI with the room info here (e.g., player count, room status)
}

// Example: Handle game start UI update
function startGameUIUpdate(playersCount, winAmount) {
    console.log("Updating UI with game start details...");
    console.log(`Number of players: ${playersCount}`);
    console.log(`Win amount: ${winAmount}`);
    // Update UI for game phase
}

// Event listener for the Leave Room button
document.getElementById('leaveRoomButton').addEventListener('click', () => {
    leaveRoom(); // Trigger the leaveRoom function when the button is clicked
    console.log("Leave Room button clicked.");
});

// Function to update UI when the player leaves the room
function updateUIAfterLeavingRoom() {
    console.log("Player has left the room, updating UI.");
    // Update UI elements such as showing a message, enabling/disabling buttons, etc.
    alert("You have left the room.");
    // Reset UI for the player to join a room again
    document.getElementById('leaveRoomButton').disabled = true; // Disable the leave button after leaving
    document.getElementById('joinRoomButton').disabled = false; // Enable the join room button
}
