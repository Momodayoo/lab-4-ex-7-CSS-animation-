document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const screenHeight = window.innerHeight;
    let isMovingDown = true;

    function moveSlider() {
        if (isMovingDown) {
            slider.style.top = `${screenHeight - 100}px`;
            slider.style.backgroundColor = "#3498db";
        } else {
            slider.style.top = "0";
            slider.style.backgroundColor = "#e74c3c";
        }

        isMovingDown = !isMovingDown;
    }

    setInterval(moveSlider, 2000);
});
