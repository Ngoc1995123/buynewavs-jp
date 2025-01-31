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
});
