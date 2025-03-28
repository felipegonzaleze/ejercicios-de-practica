document.addEventListener("DOMContentLoaded", function() {
    removeCookies();
})

function removeCookies() {
    let acceptButton = document.querySelector(".accept-btn");
    let cookies = document.querySelector(".cookies");
    acceptButton.addEventListener("click", function (){
        cookies.remove();
    })
}