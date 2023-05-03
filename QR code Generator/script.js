const wrapper = document.querySelector(".wrapper");
generateBtn = wrapper.querySelector(".form button");
qrimage = wrapper.querySelector(".Qr img");
qrInput = wrapper.querySelector(".form input"); 

prompt("Enter your name:");
// let a = prompt("Enter Password:");
let b = document.querySelector("body")
if(true){
    generateBtn.addEventListener('click',() => {
    
        let qrvalue = qrInput.value;
        console.log(qrvalue);
        
        if(!qrvalue)
        return;  //if input is empty then return from here
        generateBtn.innerText = "Generate QR code...";
    
        qrimage.src=`API`;
        qrimage.addEventListener("load",() =>{
            wrapper.classList.add("active");
    
            generateBtn.innerText = "Generate QR code";
        })
       
    });
}
else{
    b.innerHTML = "Sorry You Cannot visit my Website"
}


//link for QR code
//https://goqr.me/api/
