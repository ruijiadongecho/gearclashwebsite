// top navigation bar
var currentPageUrl = window.location.href;

var navLinks = document.querySelectorAll(".desktop-nav ul li a");
navLinks.forEach(function (navLink) {
  if (navLink.href === currentPageUrl) {
    navLink.classList.add("active");
  }
});

//burger menu
const burgerIcon = document.querySelector(".fa-bars");
const dropdown = document.querySelector(".dropdown");

burgerIcon.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

//Countdown Timer
// Set the date we're counting down to
var countDownDate = new Date("June 30, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function formatValueToTwoDigits(value) {
    return value < 10 ? "0" + value : value;
  }

  minutes = formatValueToTwoDigits(minutes);
  seconds = formatValueToTwoDigits(seconds);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}
