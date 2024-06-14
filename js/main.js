const navLinks = document.querySelectorAll(".nav-links");
const navLinksLength = navLinks.length;

const sections = document.querySelectorAll("section");

for (let i = 0; i < navLinksLength; i++) {
  navLinks[i].addEventListener("click", function () {
    let currentBtn = document.getElementsByClassName("active");
    currentBtn[0].className = currentBtn[0].className.replace("active", "");
    this.className += " active";
  });
}

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// const heroImgTilt = document.getElementById("hero-img-tilt");

// const heroWidth = heroImgTilt.clientWidth;
// const heroHeight = heroImgTilt.clientHeight;

// heroImgTilt.addEventListener("mousemove", handleTilt);

// function handleTilt(e) {
//   const xVal = e.layerX;
//   const yVal = e.layerY;

//   const yRotation = 5 * ((xVal - heroWidth / 2) / heroWidth);
//   const xRotation = -1 * ((yVal - heroHeight / 2) / heroHeight);

//   const string =
//     "perspective(200px) scale(1) rotateX(" +
//     xRotation +
//     "deg) rotateY(" +
//     yRotation +
//     "deg)";

//   heroImgTilt.style.transform = string;
// }

// /* Add listener for mouseout event, remove the rotation */
// heroImgTilt.addEventListener("mouseout", function () {
//   heroImgTilt.style.transform =
//     "perspective(500px) scale(1) rotateX(0) rotateY(0)";
// });

// /* Add listener for mousedown event, to simulate click */
// heroImgTilt.addEventListener("mousedown", function () {
//   heroImgTilt.style.transform =
//     "perspective(500px) scale(1) rotateX(0) rotateY(0)";
// });

// /* Add listener for mouseup, simulate release of mouse click */
// heroImgTilt.addEventListener("mouseup", function () {
//   heroImgTilt.style.transform =
//     "perspective(500px) scale(1) rotateX(0) rotateY(0)";
// });

// console.log(window.location.href);
