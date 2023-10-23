const image = document.getElementById("stretch-image");

function stretchImage() {
    const containerWidth = document.querySelector(".image-container").clientWidth;
    const imageWidth = image.naturalWidth;
    const scale = containerWidth / imageWidth;
    image.style.transform = `scaleX(${scale})`;
}

// Chame a função quando a página carregar e redimensionar a janela.
window.addEventListener("load", stretchImage);
window.addEventListener("resize", stretchImage);
