document.getElementById('shortenBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        // Generate a random short code
        const shortCode = Math.random().toString(36).substring(2, 7);
        // Display the shortened URL
        document.getElementById('result').innerHTML = `Shortened URL: <a href="${url}" target="_blank">${window.location.href}${shortCode}</a>`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter a valid URL.';
    }
});
