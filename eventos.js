document.addEventListener("DOMContentLoaded", function () {
    const saludarButton = document.getElementById("saludarButton");
    const saludarDiv = document.getElementById("saludarDiv");
  
    saludarButton.addEventListener("click", function () {
      alert("Hola!");
    });
  
    saludarDiv.addEventListener("dblclick", function () {
      alert("Hola! Soy el div");
    });
  });