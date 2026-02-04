const images = [
    {source: "./assets/cute-cat-a.png", alt: "a grey tabby kitten"},
    {source: "./assets/cute-cat-b.jpg", alt: "a brown tabby kitten"},
    {source: "./assets/cute-cat-c.jpg", alt: "an orange kitten"},
    {source: "./assets/cute-cat-d.png", alt: "a shoulder cat"}
];


const container = document.getElementById("carousel")
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const autoPreviousButton = document.getElementById("auto-previous-btn");
const autoNextButton = document.getElementById("auto-next-btn");
const stopButton = document.getElementById("stop-btn");

const createImages = (images) => {
    const img = document.createElement("img");
    img.src = images.source;
    img.alt = images.alt;
    img.style.maxWidth = "500px";
    img.style.maxHeight = "400px";
    img.style.objectFit = "contain";
    return img;
}

const imageCards = images.map(createImages);

let current = 0;

container.append(imageCards[current]);
updateButtons();

function updateButtons() {
    previousButton.disabled = current === 0;
    autoPreviousButton.disabled = current === 0;

    nextButton.disabled = current === imageCards.length - 1;
    autoNextButton.disabled = current === imageCards.length - 1;
}

function showCurrent() {
    container.innerHTML = "";
    container.append(imageCards[current]);
    updateButtons();
}

nextButton.addEventListener("click", () => {
    if (current < (imageCards.length - 1)) {
        current++;
        showCurrent();
    }
})

previousButton.addEventListener("click", () => {
    if (current > 0) {
        current--;
        showCurrent();
    }
})

let interval;

autoNextButton.addEventListener("click", () => {
    if (interval) return;

    autoNextButton.disabled = true;
    autoNextButton.classList.add("running");

    interval = setInterval (() => {
        if (current < (imageCards.length - 1)) {
            current++;
            showCurrent();
        } else {
            clearInterval(interval);
            interval = null;
            autoNextButton.classList.remove("running");
            showCurrent();
        }
    }, 1000);
})

autoPreviousButton.addEventListener("click", () => {
    if (interval) return;

    autoPreviousButton.disabled = true;
    autoPreviousButton.classList.add("running");

    interval = setInterval (() => {
        if (current > 0) {
            current--;
            showCurrent();
        } else {
            clearInterval(interval);
            interval = null;
            autoPreviousButton.classList.remove("running");
            showCurrent();
        }
    }, 1000);
})

stopButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    autoNextButton.classList.remove("running");
    autoPreviousButton.classList.remove("running");

    updateButtons();
})