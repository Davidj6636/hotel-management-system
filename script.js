
function bookRoom(roomName) {
    const message = document.getElementById("booking-message");

    message.textContent =
        `You've selected the ${roomName}. Booking form coming soon!`;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}
