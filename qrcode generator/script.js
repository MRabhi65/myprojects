let qrContainer = document.querySelector(".qr-main");
let generateBtn = document.getElementById("genratbtn");
let downloadBtn = document.getElementById("downloadbtn");

let qrCode;

generateBtn.addEventListener("click", function () {

    let url = document.getElementById("urlid").value;
    let size = document.getElementById("sizes").value;

    qrContainer.innerHTML = "";   // old QR remove

    if(url === ""){
        alert("Please Enter Text OR URL");
        return;
    }

    qrCode = new QRCode(qrContainer, {
        text: url,
        width: size,
        height: size
    });
});


downloadBtn.addEventListener("click", function(){

    let img = qrContainer.querySelector("img");

    if(!img){
        alert("First Generate QR Code");
        return;
    }

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "QRCode.png";
    link.click();

});
