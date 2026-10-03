```javascript
// ==============================
// EFEK MENGETIK
// ==============================

const title = document.querySelector("h1");

const text = "Hi, I'm Edwin.";

let index = 0;


function ketik() {

    if (index < text.length) {

        title.innerHTML =
            text.substring(0, index + 1);

        index++;

        setTimeout(ketik, 100);
    }

}


ketik();


// ==============================
// PROJECT CARD
// ==============================

const projects =
    document.querySelectorAll(".project-card");


projects.forEach(function(project) {

    project.addEventListener("click", function() {

        project.classList.toggle("selected");

    });

});


// ==============================
// TAHUN FOOTER
// ==============================

const footer =
    document.querySelector("footer p");


const tahun =
    new Date().getFullYear();


footer.textContent =
    "© " + tahun +
    " Edwin. Built while learning.";
```
