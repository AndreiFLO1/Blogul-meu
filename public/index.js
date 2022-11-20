const popup = document.querySelector(".popup");

function showPupUp(name, description) {
    popup.style.display = "block";
    popup.getElementsByTagName("h2")[0].textContent = name;
    popup.getElementsByClassName("content")[0].textContent = description;
    document.getElementsByClassName("container")[0].style.opacity = '0'
}

function hidePopUp() {
    popup.style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = '1'
}