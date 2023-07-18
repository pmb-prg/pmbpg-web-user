function isElementVisible(element) {
    const { top, left, bottom, right } =
    element.getBoundingClientRect();

    return (
        top >= 0 &&
        left >= 0 &&
        bottom <= window.innerHeight &&
        right <= window.innerWidth
    );
}

window.addEventListener("scroll", () => {
    const percent = document.querySelector("#percent");
    const water = document.querySelector(".water");


    water.style.animation = "none";
    percent.innerText = "0";
    let per = percent.innerText;
    const interval = setInterval(function() {
        water.style.animation = "darsad 4s forwards";
        per++;
        percent.innerText = per;
        if (per === 60) {
            clearInterval(interval);
        }
    }, 60);
});