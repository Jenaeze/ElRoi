// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the dataset of Bible verses from GitHub
    fetch('https://jenaeze.github.io/ElRoi/verses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(verses => {
            // Get today's date
            const today = new Date();
            const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));

            // Use the day of the year to determine the index of the verse to display
            const index = dayOfYear % verses.length;

            // Display the verse on the web page
            document.getElementById('verse').innerText = `${verses[index].verse} - ${verses[index].reference}`;

            // Display the current date on the web page
            displayCurrentDate();
        })
        .catch(error => console.error('Error fetching verses:', error));

    // Helper function to display the current date
    function displayCurrentDate() {
        const currentDateElement = document.createElement('p');
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateElement.innerText = today.toLocaleDateString('en-US', options);
        document.body.appendChild(currentDateElement);
    }
});
