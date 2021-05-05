window.addEventListener('load',start);
// variaveis globais

var globalCalculations = [
  {
    id: 1,
    description: "A+B:",
    calculate: function soma(a, b) {
      return soma(a, b);
    },
    type: "a+b"
  },
  {
    id: 2,
    description: "A-B:",
    calculate: function subtracao(a, b) {
      return subtracao(a, b);
    },
    type: "a-b"
  },
  {
    id: 3,
    description: "B-A:",
    calculate: function subtracao(a, b) {
      return subtracao(a, b);
    },
    type: "b-a"
  },
  {
    id: 4,
    description: "AXB:",
    calculate: function multiplicacao(a, b) {
      return multiplicacao(a, b);
    },
    type: "axb"
  },
  {
    id: 5,
    description: "A/B:",
    calculate: function divisao1(a, b) {
      return divisao1(a, b);
    },
    type: "a/b"
  },
  {
    id: 6,
    description: "B/A:",
    calculate: function divisao2(b,a) {
      return divisao2(b,a);
    },
    type: "b/a"
  },
  {
    id: 7,
    description: "A²:",
    calculate: function quadrado(a) {
      return quadrado(a);
    },
    type: "a²"
  },{
    id: 8,
    description: "B²:",
    calculate: function quadrado(b) {
      return quadrado(b);
    },
    type: "b²"
  }




  
];

var inputA =document.querySelector('#inputA');
var inputB =document.querySelector('#inputB');
function start(){ 
  inputA.addEventListener('keyup',calcula);
  inputB.addEventListener('keyup',calcula);
}

function calcula(){
  var a = inputA.value;
  var b = inputB.value;
  var divCalculations = document.querySelector("#calculations");
  var innerCalculations = document.createElement("div");
  innerCalculations.classList.add("row");
  for (var i = 0; i < globalCalculations.length; i++) {
    var currentCalculation = globalCalculations[i];
    var id = "input_" + currentCalculation.id;
    var value = getCalculationFrom(currentCalculation.type,currentCalculation.calculate,a,b);

    /**
     * Montando os elementos conforme
     * regras do Materialize
     */
    var div = getMaterializeDiv();
    var input = getMaterializeInput(id, value);
    var label = getMaterializeLabel(id, currentCalculation.description);

    div.appendChild(input);
    div.appendChild(label);
    innerCalculations.appendChild(div);
    divCalculations.innerHTML = "";
    divCalculations.appendChild(innerCalculations);
  }

}
function getCalculationFrom(type, calculationFunction, a, b) {
  var value = "";

  switch (type) {
    case "a+b":
      value = soma(a, b);
    break;
    case "a-b":
      value = subtracao(a,b);
    break;
    case "b-a":
      value = subtracao(b,a);
    break;
    case "axb":
      value = multiplicacao(a,b);
    break;
    case "a/b":
      value = divisao1(a,b);
    break;
    case "b/a":
      value = divisao2(b,a);
    break;
    case "a²":
      value = quadrado(a);
    break;
    case "b²":
      value = quadrado(b);
    break;
    default:
      value = "Cálculo não identificado.";
  }

  return value;
}

function getMaterializeDiv() {
  var div = document.createElement("div");
  div.classList.add("input-field", "col", "s12", "m6", "l4");

  return div;
}

function getMaterializeInput(id, value) {
  var input = document.createElement("input");
  input.readOnly = true;
  input.type = "text";
  input.id = id;
  input.value = value;

  return input;
}
function getMaterializeLabel(id, description) {
  var label = document.createElement("label");
  label.for = id;
  label.textContent = description;
  label.classList.add("active");

  return label;
}
function soma(a,b){
  return parseInt(a)+parseInt(b);
}
function subtracao(a,b){
  return parseInt(a)-parseInt(b);
}
function multiplicacao(a,b){
  return parseInt(a)*parseInt(b);
}
function divisao1(a,b){
 
  if(parseInt(b)===0){
    return 'Divisão por zero';
  }
  else{

    return parseInt(a)/parseInt(b);
  }
  
 
}
function divisao2(b,a){
 
  if(parseInt(a)===0){
    return 'Divisão por zero';
  }
  else{

    return parseInt(b)/parseInt(a);
  }
  
}
function quadrado(x){
  return parseInt(x)*parseInt(x);
}
start();
