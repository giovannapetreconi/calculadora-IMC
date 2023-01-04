function calculate(){
  var heigh = document.getElementByld("height").value/100;
  var weight = documente.getElementByld("weight").value;
  
  var imc = weight/height**2;
  var text""
  if (imc<18.5){
    text="Você está magro"
  } else if (imc=<24.9){
    text="Você esta normal"
  } else if (imc<29.9) {
    text="Você está com sobrepeso"
  } else if (imc<39.9){
    text="Você está com obsidade"
  } else if (imc>39.9){
    text="Você está com obesidade mórbida"
  }
  document.getElementByld("text_area").innerText=text
}