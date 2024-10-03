window.onload = function() {
    const modelImages = document.querySelectorAll('.model-image');
    modelImages.forEach((img) => {
        const preloader = new Image();
        preloader.src = img.src;
    });
};
