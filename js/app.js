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


 nameOftheCard = fullName=>{
  let inputName = fullName.value;
  const nameArray = inputName.split(' ');
  if(nameArray.length <= 2){
      fullName.classList.add('success');
      return true;
  }else{
      fullName.classList.add('error');
      return false;
  }
 }
const validationCvv = verificationCode => {
    const justNumbers = /[^1-9]/g;
    const verifCVV = /^\d{3}$/;
    if (verificationCode.toString().length === 0) {
        console.log('No haz ingresado un numero numero');
        return false;
    // } else if (!verificationCode.match(verifCVV)) {
    //     console.log('Numerono valido');
    //     return false;
    } else {
        console.log('Adelante');
        return true;
    }
};

 const checkLuhn =inputCardNum => {
 let cardNumbersReverse = inputCardNum.toString().split("")
 .reverse().map(number=>parseInt(number));
     //console.log(cardNumbersReverse);


let multiplyNumbersOdd = cardNumbersReverse.map((number, index) =>{
    if(index % 2 != 0){
 return number*2;
 }else{
     return number;
 }
 });
 //console.log(multiplyNumbersOdd);

let arrayOneDigicts = multiplyNumbersOdd.filter(items => {
    if(items <=9){
        return items
    }
});
//console.log(arrayOneDigicts);


 let arrayMoreTwoDigicts= multiplyNumbersOdd
 .filter((numberTwo,index) =>{
     if(numberTwo >=10){
         return numberTwo;
     }   
 });
 
 let arrayReduce = arrayMoreTwoDigicts.map(elements=>{
     return elements-9;
 })
     console.log(arrayReduce);
     let concatArray = arrayReduce.concat(arrayOneDigicts).reduce((previous, current) => {
        // return previous + current;
         if (previous + current % 10 === 0) {
             return true;
         } else {
             return false;
         }

     },0);
     
  console.log(concatArray);
  
}
  

  
     




const validateCardDetails = element => {
    const formArray = Array.from(element);
     //console.log(formArray);
    const inputCardNum = formArray[0].value; 
    const birthDate = formArray[1];
    const verificationCode = formArray[2];
    const fullName = formArray[3];

     validationCvv(verificationCode);
    nameOftheCard(fullName);
    checkLuhn(inputCardNum);


}

validateCardDetails(form);




