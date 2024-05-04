var cardnumber = document.getElementById("cardnumber");

var cardname = document.getElementById("cardname");

var expmonth = document.getElementById("expmonth");

var expyear = document.getElementById("expyear");

var cvv = document.getElementById("cvv");

var _name = document.getElementById("name");

var card_name = document.getElementById("card_name");

var exp_month = document.getElementById("exp_month");

var exp_year = document.getElementById("exp_year");

var cvv_number = document.getElementById("cvv_number");

var button = document.getElementById("button");



document.getElementById("button").addEventListener('click', function(){

    document.querySelector(".card_name_error").innerHTML = "";
    document.querySelector(".card_name_error2").innerHTML = "";
    document.querySelector(".exp_error").innerHTML = "";
    document.querySelector(".exp_error2").innerHTML = "";
    document.querySelector(".exp_cvv").innerHTML = "";
    document.querySelector(".exp_cvv2").innerHTML = "";
    
    if (isNaN(card_name.value.replace(/\s/g, ''))) {
        document.querySelector(".card_name_error").innerHTML = "Wrong format, number only";
    } else if (card_name.value.trim() === "") {
        document.querySelector(".card_name_error2").innerHTML = "Can't be blank";
    } 
    

    if (isNaN(exp_month.value)){
        document.querySelector(".exp_error").innerHTML = "Wrong format, number only";
    } 
    else if (exp_month.value === ""){
        document.querySelector(".exp_error2").innerHTML = "Can't be blank";
    } 

    if (isNaN(exp_year.value)){
        document.querySelector(".exp_error").innerHTML = "Wrong format, number only";
    }
    else if (exp_year.value === ""){
        document.querySelector(".exp_error2").innerHTML = "Can't be blank";
    } 

    if (isNaN(cvv_number.value)){
        document.querySelector(".exp_cvv").innerHTML = "Wrong format, number only";
    } 
    else if (cvv_number.value === ""){
        document.querySelector(".exp_cvv2").innerHTML = "Can't be blank";
    } 
    
    // Redirect if all fields are filled correctly
    if (card_name.value && _name.value && exp_month.value && exp_year.value && cvv_number.value){
        window.location.href = "index2.html"
    }    

    var card_name_ = card_name.value;
    var card_holder = _name.value;
    var exp_month_ = exp_month.value;
    var exp_year_ = exp_year.value;
    var cvv_number_ = cvv_number.value
    localStorage.setItem("cardname", card_name_);
    localStorage.setItem("cardholder", card_holder);
    localStorage.setItem("month", exp_month_);
    localStorage.setItem("year", exp_year_);
    localStorage.setItem("cvv", cvv_number_);
});


card_name.onkeydown = function(event) {
    if (event.key !== 'Backspace') {
        if (card_name.value.replace(/\s/g, '').length % 4 === 0) {
            card_name.value += ' ';
        }
    }
    cardnumber.innerHTML = card_name.value;

};


_name.onkeydown = function(){
    cardname.innerHTML = _name.value;
}


exp_month.onkeydown = function(){
    expmonth.innerHTML = exp_month.value + "/";
}

exp_year.onkeydown = function(){
    expyear.innerHTML = exp_year.value;
}

cvv_number.onkeydown = function(){
    cvv.innerHTML = cvv_number.value;
}

