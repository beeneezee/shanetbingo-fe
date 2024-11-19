<?php
// Database connection details
$host = 'localhost';
$user = 'root';          // Replace with your MySQL username
$password = '';          // Replace with your MySQL password
$database = 'shanet_bingo';

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get balance and demo for a specific telegram_id
$telegram_id = $_GET['chat_id'] ?? 832830524;  // Defaulting to a test chat_id if not provided
$sql = "SELECT balance, demo FROM users WHERE telegram_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $telegram_id);
$stmt->execute();
$stmt->bind_result($balance, $demo);

// Fetch the result
if ($stmt->fetch()) {
    // Echo the demo value into a hidden div
    // echo "<div id='demo-value' hidden>" . $demo . "</div>";
} else {
    // If no user found, echo a default value
    // echo "<div id='demo-value' hidden>0</div>";
}

// Close statement and connection
$stmt->close();
$conn->close();
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bingo Game</title>
  <link rel="stylesheet" href="css/styles.css">
</head>

<body>


  <div class="toast"></div>
  <div id="app">
    <!-- Card Selection Screen -->
    <div id="card-selection-screen" class="screen card-selection">
      <!-- Info Row -->
       <!-- hidden info -->
      <div id="demo-value" hidden><?php echo $demo; ?></div>
      <div class="info-row">
        <div class="info-cell">
          <strong>Wallet</strong>
          <div id="wallet-value"><?php echo $balance; ?></div>
        </div>
        <div class="info-cell">
          <strong>Active Games</strong>
          <div id="active-game-value">0</div>
        </div>
        <div class="info-cell">
          <strong>Stake</strong>
          <div id="stake-value">0</div> <!-- Placeholder value -->
        </div>
      </div>


      <!-- 10x10 Selection Grid -->
      <!-- <div class="selection-grid" id="selection-grid"></div> -->


      <div class="selection-grid">
        <?php
        // Generate the Bingo cells from 1 to 100
        for ($i = 1; $i <= 100; $i++) {
          echo '<div class="selection-cell" data-number="' . $i . '" id="cell-' . $i . '">' . $i . '</div>';
        }
        ?>
      </div>


      <!-- 5x5 Selected Card Preview Grid -->
      <div class="selected-card-grid" id="selectedCardCells">
        <?php
        // Generate a 5x5 grid with all cells marked as 0
        for ($i = 0; $i < 5; $i++) {
          for ($j = 0; $j < 5; $j++) {
            // Assign unique ID for each cell
            echo '<div class="selected-card-grid-cell" id="selected-card-grid-cell-' . $i . '-' . $j . '">0</div>';
          }
        }
        ?>
      </div>


      <!-- Footer with Action Buttons -->
      <div class="footer">
        <button class="action-button refresh-button " id="refresh-button" onclick="playAgain(true)">Refresh</button>
        <div class="selected-card-number" id="myCard">0</div> <!-- This number is just an example -->
        <button class="action-button start-game-button" id="start-button">Start Game</button>
      </div>
    </div>

    <!-- Game Play Screen -->
    <div id="game-play-screen" class="screen game-play">
      <!-- Game Play Info Row -->
      <div class="game-play-info">
        <div class="game-play-info-cell">
          <span class="info-title">Game</span>
          <div id="game-value">0</div>
        </div>
        <div class="game-play-info-cell">
          <span class="info-title">Derash</span>
          <div id="derash-value">0</div>
        </div>
        <div class="game-play-info-cell">
          <span class="info-title">Bonus</span>
          <div id="bonus-value">-</div>
        </div>
        <div class="game-play-info-cell">
          <span class="info-title">Players</span>
          <div id="players-value">0</div>
        </div>
        <div class="game-play-info-cell">
          <span class="info-title">Bet</span>
          <div id="bet-value">0</div>
        </div>
        <div class="game-play-info-cell">
          <span class="info-title">Call</span>
          <div id="call-value">0</div>
        </div>

      </div>


      <!-- Game Content Row -->
      <div class="game-content">
        <!-- Game Content Left (40%) -->
        <div class="game-content-left">
          <!-- BINGO Header (1x5 grid) -->
          <div class="bingo-header">
            <div class="bingo-cell" style="background-color: orange;">B</div>
            <div class="bingo-cell" style="background-color: lightgreen;">I</div>
            <div class="bingo-cell" style="background-color: lightblue;">N</div>
            <div class="bingo-cell" style="background-color: red;">G</div>
            <div class="bingo-cell" style="background-color: purple;">O</div>
          </div>

          <!-- 15x5 Grid (Cells numbered 1-75) -->
          <div class="number-grid">
            <?php
            // Loop over columns
            for ($col = 0; $col < 5; $col++) {
              echo '<div class="number-column">'; // Optional column wrapper for styling
              // Loop to display each number in the column
              for ($row = 0; $row < 15; $row++) {
                $number = $col * 15 + $row + 1; // Calculate the number for this position
                echo '<div class="number-grid-cell" id="cell-75-' . $number . '">' . $number . '</div>';
              }
              echo '</div>'; // Close the column wrapper
            }
            ?>
          </div>


        </div>




        <div class="game-content-right">
          <!-- Countdown Section (10%) -->
          <div class="countdown">
            <span class="countdown-label">Countdown</span>
            <span class="countdown-value" id="countdownValue">Wait</span>
          </div>

          <!-- Current Call Section (15%) -->
          <div class="current-call">
            <span class="small-text">Current Call</span>
            <div class="circle-number" id="currentNumber">-</div>
          </div>

          <!-- Recent Calls Section (10%) -->
          <div class="recent-calls">
            <div class="recent-call-cell" id="recentOne"></div>
            <div class="recent-call-cell" id="recentTwo"></div>
            <div class="recent-call-cell" id="recentThree"></div>
            <div class="recent-call-cell" id="recentFour"></div>
          </div>

          <!-- Game Card Section (65%) -->
          <div class="game-card">
            <!-- BINGO Header -->
            <div class="game-card-header">
              <div class="bingo-cell" style="background-color: orange;">B</div>
              <div class="bingo-cell" style="background-color: lightgreen;">I</div>
              <div class="bingo-cell" style="background-color: lightblue;">N</div>
              <div class="bingo-cell" style="background-color: red;">G</div>
              <div class="bingo-cell" style="background-color: purple;">O</div>
            </div>

            <!-- 5x5 Grid -->
            <div id="gameCardGrid" class="game-card-grid"></div> <!-- Dynamic Grid will be appended here -->

            <!-- Footer with Card Number -->
            <div class="game-card-footer">
              <span id="gameCardFooterCardNumber"></span>
            </div>
          </div>

        </div>




      </div>


      <!-- Bingo Button Section -->
      <div class="bingo-button-section">
        <button class="bingo-button" id="show-disqualification" style="display: none;">Dq me</button>

        <button class="bingo-button" id="" onclick='sendBingoClaim()'>BINGO!</button>

      </div>

      <!-- Game Play Footer Section -->
      <div class="game-play-footer">
        <button class="game-play-refresh-button" id="">Refresh</button>
        <button class="game-play-leave-button" onclick='sendLeaveRoom()'>Leave</button>
      </div>

    </div>







    <!-- Game Over Modal -->
    <div id="game-over-modal" class="modal">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="game-over-big-bingo">BINGO!</h1>
          <p class="game-over-small-text" id="whoWon">-</p>
        </div>

        <div class="game-over-mid-container">
          <div class="game-over-bingo-header" id="gameOverBingoHeader"></div>
          <div class="game-over-grid" id="gameOverBingoGrid"></div>
        </div>

        <div class="game-over-modal-footer-card-number" id="cardNumberModalFooter">0</div>
        <button class="play-again-btn" onclick="playAgain()">Play Again</button>
      </div>
    </div>




    <!-- Disqualification Modal -->
    <div id="disqualification-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h1>DISQUALIFIED!</h1>
          <p class="game-play-small-text" id="whoWon">You have been disqualified for attempting a false bingo claim.
          </p>
        </div>

        <!-- "X" Symbol -->
        <div class="game-play-big-x">X</div>

        <button class="play-again-btn" onclick="playAgain()">Play Again</button>
      </div>
    </div>

    
    <!-- Game end Modal -->
    <div id="game-end-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h1>Game Ended!</h1>
          <p class="game-play-small-text" id="whoWon">Game ended without a winner.
          </p>
        </div>

        <!-- "X" Symbol -->
        <div class="game-play-big-x">X</div>

        <button class="play-again-btn" onclick="playAgain()">Play Again</button>
      </div>
    </div>



  </div>

  <script src="js/script.js"></script>
</body>

</html>