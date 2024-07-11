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
