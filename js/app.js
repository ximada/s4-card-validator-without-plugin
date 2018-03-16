const form = document.querySelector("form");
//console.log(form);

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form)) {
        console.log("datos válido... enviar...");
    } else {
        console.log("datos inválidos");
    }
});
//5063690023303010
// validate just numbers function
justEnterNumbers=(e) => {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}
 const justNumbers = document.getElementById('cn')
 const ccvNumber = document.getElementById('cvv')
 
 justNumbers.addEventListener("keypress", justEnterNumbers, false);
 ccvNumber.addEventListener("keypress", justEnterNumbers, false);


 nameOftheCard =()=>{

 }
const validationCvv = verificationCode => {
    // const justNumbers = /[^1-9]/g;
    // const verifCVV = /^\d{3}$/;
    // if (verificationCode.toString().length === 0) {
    //     console.log('No haz ingresado un numero numero');
    //     return false;
    // } else if (!verificationCode.match(verifCVV)) {
    //     console.log('Numerono valido');
    //     return false;
    // } else {
    //     console.log('Adelante');
    //     return true;
    // }
};

 const checkLuhn =inputCardNum => {
    // var sum = 0;
    // var numdigits = inputCardNum.length;
    // var parity = numdigits % 2;
    // for (var i = 0; i < numdigits; i++) {
    //     var digit = parseInt(inputCardNum.charAt(i))
    //     if (i % 2 == parity) digit *= 2;
    //     if (digit > 9) digit -= 9;
    //     sum += digit;
    // }
    // return (sum % 10) == 0;

}



const validateCardDetails = element => {
    const formArray = Array.from(element);
     //console.log(formArray);
    const inputCardNum = formArray[0]; 
    console.log(inputCardNum);
    const birthDate = formArray[1];
    const verificationCode = formArray[2];
    const fullName = formArray[3];

     validationCvv(verificationCode);
    nameOftheCard(fullName);


}

validateCardDetails(form);




