var home = document.getElementById("home");
var about = document.getElementById("about");
var school = document.getElementById("school");
var blog = document.getElementById("blog");
var content = document.getElementById("content");
var navbtn = document.getElementById("navbtn");

home.addEventListener("click", function () {
    content.innerHTML = "<b>This is home section</b>";
});

navbtn.addEventListener("click", function () {
    if (document.getElementById("nav").style.display === "block") {
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("nav").style.display = "block";
    }
});

about.addEventListener("click", function () {
    content.innerHTML = "This is about section";
});

school.addEventListener("click", function () {
    content.innerHTML = "This is school section";
});

blog.addEventListener("click", function () {
    content.innerHTML = "This is blog section";
    alert("I am toast in android")
});