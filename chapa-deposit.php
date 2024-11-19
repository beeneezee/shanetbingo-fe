<?php
// Get parameters from the URL
$chatId = isset($_GET['chatId']) ? $_GET['chatId'] : '1208108108';
$username = isset($_GET['username']) ? $_GET['username'] : 'Biniam';
$phoneNumber = isset($_GET['phoneNumber']) ? $_GET['phone_number'] : '0933071563';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapa Payment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
            text-align: center;
            font-size: 24px;
        }

        .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 80%;
        }

        .logo {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 10px;
            background: linear-gradient(to right, #ffeb3b, #ff9800, #f44336);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 5px solid white;
            overflow: hidden;
        }

        .logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        input[type="hidden"] {
            display: none;
        }

        button {
            background: linear-gradient(to right, #ffeb3b, #ff9800, #f44336);
            color: white;
            border: none;
            border-radius: 25px;
            padding: 15px;
            font-size: 18px;
            width: 100%;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
        }

        button:hover {
            filter: brightness(0.9);
        }

        .hint {
            font-size: 14px;
            color: #888;
            margin-top: 5px;
        }
    </style>
</head>

<body>

    <div class="form-container">

        <div class="logo">
            <img src="assets/uploads/logo.png" alt="Logo">
        </div>

        <h1>Deposit into Your Account</h1>

        <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
            <input type="hidden" name="public_key" value="CHAPUBK_TEST-aCjCIMaEWXSPzfl3IURhZ3zlFcArYaKb" />
            <input type="hidden" name="amount" id="amount" value="100">
            <input type="hidden" name="currency" value="ETB">
            <input type="hidden" name="email" value="beeni2019@gmail.com">
            <input type="hidden" name="phone" value="0900123456">
            <input type="hidden" name="callback_url" value="https://beeforcommerce.com/dkuan/chapa-success.php">
            <input type="hidden" name="return_url" value="http://172.20.10.11/bingo/payment-success.php" />
            <input type="hidden" name="name" value="Biniam">
            <input type="hidden" name="description" value="Payment for services">
            <input type="hidden" name="tx_ref" value="<?php echo time(); ?>" />
            <input type="hidden" name="title" value="Pay with Chapa" />

            <input type="text" name="phone_number" value="<?php echo htmlspecialchars($phoneNumber); ?>"
                placeholder="Phone number" disabled>
            <input type="text" name="username" value="<?php echo htmlspecialchars($username); ?>" placeholder="Name"
                disabled>
            <input type="number" name="amount_input" placeholder="Amount (min 10)" min="10" required
                oninput="updateAmount(this.value);" id="amount_input">

            <div class="hint">Amount includes a 3% payment fee.</div>

            <button type="submit">Pay with Chapa</button>
        </form>
    </div>

    <script>
        function updateAmount(value) {
            let amountInput = document.getElementById('amount');
            let fee = 0;
            // let fee = parseFloat(value) * 0.03;
            amountInput.value = (parseFloat(value) + fee).toFixed(2);
        }

        // Set focus on the amount_input field when the page loads
        window.onload = function () {
            document.getElementById('amount_input').focus();
        };
    </script>

</body>

</html>