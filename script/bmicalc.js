const calcbutton = document.querySelector(".bmi__weightScale__content__input__button");
const height = document.querySelector(".bmi__weightScale__content__input__heightInput");
const weight = document.querySelector(".bmi__weightScale__content__input__weightInput");
const bmiresult = document.querySelector(".bmi__weightScale__content__result__bmiresult");
const weightresult = document.querySelector(".bmi__weightScale__content__result__weightresult");
const idealWeigh = document.querySelector(".bmi__weightScale__content__ideal__img__ideal");

calcbutton.addEventListener('click',healthCalc);
function healthCalc(){
  if(height.value == ""){
    alert("記得填入身高哦");
    return;
  }else if(weight.value == ""){
    alert("記得填入體重哦");
    return;
  }else{
    var calcResultBmiresult = weight.value / (Math.pow(height.value/100,2));
    var calcResultWeightresult = Math.pow(height.value/100,2)*21;
    var calcResultIdealWeigh = ((weight.value / (Math.pow(height.value/100,2)))*0.88+6.65)*Math.pow(height.value/100,2);
    bmiresult.innerHTML=calcResultBmiresult.toFixed(1);
    weightresult.innerHTML=calcResultWeightresult.toFixed(1);
    idealWeigh.innerHTML=calcResultIdealWeigh.toFixed(1)+"<span>kg</span>";
  }
}
