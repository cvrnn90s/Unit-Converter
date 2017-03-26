//Conversion Application
//changes by Louise 15 Aug 2016 - changed the way values were being picked up from
//the selection list (original code commented out).  Added some alerts to track values
//now commented out).  Corrected centrigrade to fahrenheit calculation.
//Event Listener
document.getElementById("btn1").addEventListener('click', conversion, false);
document.getElementById("btn2").addEventListener('click', clearResult, false);
document.getElementById("btn2").addEventListener('click', clearInput, false);



//Units

var poundToKg = 0.453592;
var kgToPound = 2.20462;
var feetToInch = 12;
var inchToFeet = 0.0833333;
//var celsiusToFahrenheit = 33.8; this isn't right - the calculation is (c * 9)/5 + 32
var currentUnit = poundToKg;
var unitFrom = ["kg", "lb", "ft", "inches", "&#8451;", "&#8457;"];
var unitTo = ["kg", "lb", "ft", "inches", "&#8451;", "&#8457;"];

//User's input
var input;

function conversion() {

  //input = parseInt(document.getElementById("unit").value);
  //choice = document.getElementById("conversionType");
  //alert("event listener is working");
  //If statement to change unit conversion through dropdown
  var selectedValue = document.getElementById("conversionType").value;
  var input = document.getElementById("unit").value;
  //alert("selected Value is: " + selectedValue);   
  //if text returned reply with error message
  if (isNaN(input)) {
  	//alert("You entered not a number");
    document.getElementById("result").innerHTML = "Please enter a     	number";
    return;
  }else if (selectedValue === "Pounds to Kilograms") {
    // if (document.getElementById("kP").value) {
    //alert("in pounds to kilos");
    input = parseInt(document.getElementById("unit").value);
    convert = input * poundToKg.toFixed(2) + (" " + "kg");
    document.getElementById("result").innerHTML = convert;
    return;
  } else if (selectedValue === "Feet to Inches") {
    //else if (document.getElementById("fI").value) {
    //alert("in feet to inches");
    input = parseInt(document.getElementById("unit").value);
    convert = input * feetToInch.toFixed(2) + (" " + "&rdquo;");
    document.getElementById("result").innerHTML = convert;
    return;
  } else if (selectedValue === "Celsius to Fahrenheit") {
    //else if (document.getElementById("cF").value) {
    //alert("in celsius to fahrenheit");
    input = parseInt(document.getElementById("unit").value);
    convert = (((input * 9) / 5) + 32).toFixed(2) + (" " + "&#8457;"); //corrected calculation
    document.getElementById("result").innerHTML = convert;
    return;
  } else if (selectedValue === "Kilograms to Pounds") {
    //alert("Please choose a conversion");
    input = parseInt(document.getElementById("unit").value);
    convert = (input * kgToPound).toFixed(2) + (" " + "lbs");
    document.getElementById("result").innerHTML = convert;
    return;
  } else if (selectedValue === "Inches to Feet") {
  	input = parseInt(document.getElementById("unit").value);
	convert = input * inchToFeet.toFixed(2) + (" " + "Ft");
	document.getElementById("result").innerHTML = convert;
	return;
  }else if (selectedValue === "Fahrenheit to Celsius") {
	input = parseInt(document.getElementById("unit").value);
	convert = ((input - 32) * 5/9).toFixed(2) + (" " + "&#8451;");
	document.getElementById("result").innerHTML = convert;
	return;  
  }else {
    msg = "Select a conversion type"
    input = parseInt(document.getElementById("unit").value);
    convert = msg;
    document.getElementById("result").innerHTML = convert;
    return;
  }
}

//Function to clear to result box 
function clearResult() {
  //var resultBox = document.getElementById("result").value;
  reset = " ";
  document.getElementById("result").innerHTML = reset;
}
//Function to clear input box, works when setting value of element to empty string 
function clearInput() {
  document.getElementById("unit").value = " ";
}
