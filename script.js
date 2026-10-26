
const roomButtons = document.querySelectorAll(".room-book-button");


const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const room = document.getElementById("selectedRoom").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guests = Number(document.getElementById("guests").value);
    const message = document.getElementById("bookingMessage");

    if (!room || !checkIn || !checkOut) {
        message.textContent = "Please complete all booking fields.";
        return;
    }

    if (checkIn < new Date().toLocaleDateString("en-CA")) {
        message.textContent = "Check-in cannot be in the past.";
        return;
    }

    if (checkOut <= checkIn) {
        message.textContent = "Check-out must be after check-in.";
        return;
    }

    if (guests < 1 || guests > 4) {
        message.textContent = "Please choose between 1 and 4 guests.";
        return;
    }

    
const guestName = document.getElementById("guestName").value.trim();
const guestEmail = document.getElementById("guestEmail").value.trim();

const prices = {
    "Standard Room": 120,
    "Deluxe Room": 180
};

const start = new Date(checkIn + "T00:00:00");
const end = new Date(checkOut + "T00:00:00");

const nights = Math.round(
    (end - start) / (1000 * 60 * 60 * 24)
);

const total = nights * prices[room];

message.textContent =
    "Thank you, " + guestName + "! " +
    "Your booking details: " + room + ", " +
    nights + " night(s), " +
    "total estimated cost $" + total + ". " +
    "A confirmation would be sent to " + guestEmail + ".";

});

const selectedRoom = document.getElementById("selectedRoom");
const checkInDate = document.getElementById("checkIn");
const checkOutDate = document.getElementById("checkOut");
const totalPrice = document.getElementById("totalPrice");

function calculateTotal() {
    const room = selectedRoom.value;
    const checkIn = checkInDate.value;
    const checkOut = checkOutDate.value;

    const prices = {
        "Standard Room": 120,
        "Deluxe Room": 180
    };

    if (!room || !checkIn || !checkOut || checkOut <= checkIn) {
        totalPrice.textContent = "Estimated total: $0";
        return;
    }

    const start = new Date(checkIn + "T00:00:00");
    const end = new Date(checkOut + "T00:00:00");

    const nights = Math.round(
        (end - start) / (1000 * 60 * 60 * 24)
    );

    const total = nights * prices[room];

    totalPrice.textContent =
        "Estimated total: $" + total +
        " (" + nights + " night" + (nights === 1 ? "" : "s") + ")";
}

selectedRoom.addEventListener("change", calculateTotal);
checkInDate.addEventListener("change", calculateTotal);
checkOutDate.addEventListener("change", calculateTotal);
