document.addEventListener('DOMContentLoaded', function () {
    const filterDate = document.getElementById('filterDate');
    const movieTableBody = document.getElementById('movieTable').getElementsByTagName('tbody')[0];

    filterDate.addEventListener('change', displayMovies);
    displayMovies();

    function displayMovies() {
        const selectedDate = filterDate.value;
        movieTableBody.innerHTML = '';

        const moviesData = JSON.parse(localStorage.getItem('moviesData')) || [];

        moviesData.forEach((movie, index) => {
            if (!selectedDate || movie.movieDate === selectedDate) {
                const row = movieTableBody.insertRow();
                row.insertCell(0).innerText = movie.movieName;
                row.insertCell(1).innerText = movie.numOfSeats;
                row.insertCell(2).innerText = movie.movieDate;
                row.insertCell(3).innerText = movie.startTime;
                row.insertCell(4).innerText = movie.endTime;

                const availableSeats = movie.availableSeats !== undefined ? movie.availableSeats : movie.numOfSeats;
                row.insertCell(5).innerText = availableSeats;

                const totalBookingRecieved = row.insertCell(6);
                if (availableSeats > 0) {
                    const bookButton = document.createElement('button');
                    bookButton.innerText = 'Book';
                    bookButton.classList.add('Button', 'Button-primary');
                    bookButton.addEventListener('click', function () {
                        bookSeats(index, availableSeats);
                    });
                    totalBookingRecieved.appendChild(bookButton);
                } else {
                    totalBookingRecieved.innerText = 'Fully Booked';
                }
            }
        });
    }

    function bookSeats(index, availableSeats) {
        const numberOfBookings = prompt("How many seats you want to book?");
        if (numberOfBookings && numberOfBookings > 0 && numberOfBookings <= availableSeats) {
            const moviesData = JSON.parse(localStorage.getItem('moviesData')) || [];
            moviesData[index].availableSeats = availableSeats - numberOfBookings;
            localStorage.setItem('moviesData', JSON.stringify(moviesData));
            displayMovies();
        } else {
            alert('Invalid number of seats or not enough available seats.');
        }
    }
});
