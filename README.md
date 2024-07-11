<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Encrypted IP Address</title>
    <!-- Include CryptoJS library for SHA-256 hashing -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <!-- CSS for loading spinner -->
    <style>
        .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #7983ff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
            display: none; /* Initially hidden */
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <h2>Your Encrypted IP Address</h2>
    <div id="loader" class="loader"></div>
    <p id="ipAddress">Fetching IP...</p>

    <!-- Include your custom JavaScript file -->
    <script src="script.js"></script>
</body>
</html>













//script 






async function fetchIP() {
    try {
        // Show loading indicator
        document.getElementById('loader').style.display = 'block';
        document.getElementById('ipAddress').style.display = 'none';

        const response = await fetch('https://api64.ipify.org?format=json');
        if (!response.ok) {
            throw new Error('Failed to fetch IP address');
        }
        const data = await response.json();
        const ipAddress = data.ip;
        
        // Encrypt the IP address using a hashing function (SHA-256)
        const encryptedText = hashIpAddress(ipAddress);
        
        // Display the encrypted text
        document.getElementById('ipAddress').textContent = `Your Encrypted IP Text: ${encryptedText}`;
        document.getElementById('ipAddress').style.display = 'block';
    } catch (error) {
        console.error('Error fetching IP address:', error.message);
        document.getElementById('ipAddress').textContent = 'Failed to fetch IP address';
        document.getElementById('ipAddress').style.display = 'block';
    } finally {
        // Hide loading indicator after the fetch operation completes or fails
        document.getElementById('loader').style.display = 'none';
    }
}

// Function to hash IP address using SHA-256
function hashIpAddress(ipAddress) {
    // Use CryptoJS library for SHA-256 hashing
    const hashed = CryptoJS.SHA256(ipAddress).toString(CryptoJS.enc.Hex);
    return hashed;
}

// Call fetchIP function when the page loads
document.addEventListener('DOMContentLoaded', fetchIP);







