document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".para");
    const button = document.querySelector(".read-more");
  
    if (!text) {
      console.error("L'élément avec la classe '.text' est introuvable !");
    }
  
    if (!button) {
      console.error("L'élément avec la classe '.read-more' est introuvable !");
    }
  
    if (text && button) {
      button.addEventListener("click", function () {
        if (text.classList.contains("expanded")) {
          text.classList.remove("expanded");
          button.textContent = "Lire plus";
        } else {
          text.classList.add("expanded");
          button.textContent = "Lire moins";
        }
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".para1");
    const button = document.querySelector(".read-more1");
  
    // if (!text) {
    //   console.error("L'élément avec la classe '.text' est introuvable !");
    // }
  
    // if (!button) {
    //   console.error("L'élément avec la classe '.read-more' est introuvable !");
    // }
  
    if (text && button) {
      button.addEventListener("click", function () {
        if (text.classList.contains("expanded")) {
          text.classList.remove("expanded");
          button.textContent = "Lire plus";
        } else {
          text.classList.add("expanded");
          button.textContent = "Lire moins";
        }
      });
    }
  });