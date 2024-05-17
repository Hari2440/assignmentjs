document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("movieForm");
    const movieName = document.getElementById('movieName');
    const numOfSeats = document.getElementById('numOfSeats');
    const movieDate = document.getElementById('movieDate');
    const startTime = document.getElementById('startTime');
    const endTime = document.getElementById('endTime');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        register();
        window.location.href = '../MovieDashboard.html'; // Redirect to dashboard page
    });

    function validationOfInputFields() {
        const movieNameValue = movieName.value.trim();
        const numOfSeatsValue = numOfSeats.value.trim();
        const movieDateValue = movieDate.value.trim();
        const startTimeValue = startTime.value.trim();
        const endTimeValue = endTime.value.trim();

        return movieNameValue && numOfSeatsValue && movieDateValue && startTimeValue && endTimeValue;
    }

    function register() {
        if (!validationOfInputFields()) {
            alert("All fields are required.");
            return;
        }

        const movieNameValue = movieName.value;
        const numOfSeatsValue = numOfSeats.value;
        const movieDateValue = movieDate.value;
        const startTimeValue = startTime.value;
        const endTimeValue = endTime.value;

        const userMovieDetail = {
            movieName: movieNameValue,
            numOfSeats: numOfSeatsValue,
            movieDate: movieDateValue,
            startTime: startTimeValue,
            endTime: endTimeValue,
            availableSeats: numOfSeatsValue, // Initialize available seats
            booked: false // Initialize booked status
        };
        
        let movieDetail = JSON.parse(localStorage.getItem('moviesData')) || [];
        movieDetail.push(userMovieDetail);
        localStorage.setItem('moviesData', JSON.stringify(movieDetail));
    }
});
