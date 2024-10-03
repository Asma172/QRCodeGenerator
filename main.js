let inText = document.querySelector("#url");
let btn = document.querySelector("#btn");
let qrImg = document.querySelector("img");

btn.addEventListener("click", function() {
    let inputBox = inText.value;
    let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox}`;
    qrImg.src = qrCode;

    if (inputBox !== '') {
        qrImg.style = "display: block";
    } else {
        qrImg.style = "display: none";
        snAnimation();
    }
});

function snAnimation() {
    inText.classList.add('error');
    setTimeout(() => {
        inText.classList.remove('error');
    }, 500);
};