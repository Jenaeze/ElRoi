// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch Bible verses from your dataset (e.g., in JSON format)
    const verses = [...];  // Add your verses here

    // Select a random verse
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    // Display the verse on the web page
    document.getElementById('verse').innerText = `${randomVerse.verse} - ${randomVerse.reference}`;
});
