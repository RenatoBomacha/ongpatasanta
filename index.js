document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("volunteerModal");
    const closeBtn = document.querySelector(".close");

    function openModal() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    const volunteerBtn = document.querySelector(".botao");
    volunteerBtn.addEventListener("click", openModal);
});
