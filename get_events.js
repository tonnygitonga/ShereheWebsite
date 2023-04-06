// Fetch events data from get_events.php
fetch("get_events.php")
    .then(response => response.json())
    .then(data => {
        // Loop through the data and create HTML for each event
        let html = "";
        data.forEach(event => {
            html += `
                <div class="card">
                    <img src="${event.image}" alt="${event.venue}">
                    <h2>${event.venue}</h2>
                    <p>Rating: ${event.rating}</p>
                    <p>Capacity: ${event.capacity} guests</p>
                    <p>Price: KSHS ${event.price}</p>
                    <p>Amenities: ${event.amenities}</p>
                    <button onclick="bookVenue(${event.id})">Book</button>
                </div>
            `;
        });

        // Set the HTML for the card container
        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML = html;
    })
    .catch(error => console.error(error));