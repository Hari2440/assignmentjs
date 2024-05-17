document.addEventListener('DOMContentLoaded', function () {
    const movieTableBody = document.getElementById('movieTable').getElementsByTagName('tbody')[0];
    const moviesData = JSON.parse(localStorage.getItem('moviesData')) || [];

    moviesData.forEach(movie => {
        const row = movieTableBody.insertRow();
        row.insertCell(0).innerText = movie.movieName;
        row.insertCell(1).innerText = movie.numOfSeats;
        row.insertCell(2).innerText = movie.movieDate;
        row.insertCell(3).innerText = movie.startTime;
        row.insertCell(4).innerText = movie.endTime;
        const totalBookings = movie.numOfSeats - (movie.availableSeats !== undefined ? movie.availableSeats : movie.numOfSeats);
        row.insertCell(5).innerText = totalBookings;
    });
});
