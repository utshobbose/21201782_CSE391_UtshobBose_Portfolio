function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
}

document.getElementById("lastModified").innerText =
  "Last Modified: " + document.lastModified;

navigator.geolocation.getCurrentPosition(function (position) {
  document.getElementById("location").innerText =
    "Your Location: " +
    position.coords.latitude +
    ", " +
    position.coords.longitude;
});

// // Last modified date
// document.querySelector(
//   "#last-modified"
// ).textContent = `Last Updated: ${document.lastModified}`;

// // Geolocation
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     document.querySelector(
//       "#location"
//     ).textContent = `Location: ${position.coords.latitude}, ${position.coords.longitude}`;
//   });
// }
