// Only HTML CSS JS  Project

let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function genQR() {
    if (qrText.value.length > 0) {  // Check if input is not empty
        qrImage.src = "https://quickchart.io/qr?text=" + qrText.value + "&size=200";
        imgBox.classList.add("show-img");  // Add class to show image
    }
    else {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}
