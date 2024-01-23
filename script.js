// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the dataset of Bible verses from GitHub
    fetch('verses.json')
        .then(response => response.json())
        .then(verses => {
            // Get today's date
            const today = new Date();
            const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));

            // Use the day of the year to determine the index of the verse to display
            const index = dayOfYear % verses.length;

            // Display the verse on the web page
            document.getElementById('verse').innerText = `${verses[index].verse} - ${verses[index].reference}`;
        })
        .catch(error => console.error('Error fetching verses:', error));
});
