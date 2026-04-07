document.getElementById('shortenBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        const shortCode = Math.random().toString(36).substring(2, 7);
        document.getElementById('result').innerHTML = `Shortened URL: <a href="${url}" target="_blank">${window.location.href}${shortCode}</a>`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter a valid URL.';
    }
});
