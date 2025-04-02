// JavaScript to dynamically load header.html into the div with id="header"
document.addEventListener("DOMContentLoaded", function () {
  const headerDiv = document.getElementById("header");
  fetch("./component/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load header.html");
      }
      return response.text();
    })
    .then((data) => {
      headerDiv.innerHTML = data; 
      setActiveNavLink();
    })
    .catch((error) => {
      console.error("Error loading header.html:", error);
    });

  const footerDiv = document.getElementById("footer");

  fetch("./component/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load footer.html");
      }
      return response.text();
    })
    .then((data) => {
      footerDiv.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer.html:", error);
    });


  // Adding class 'active' to nav-link refer to URL
  function setActiveNavLink() {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }
});

