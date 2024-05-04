var cardname_ = localStorage.getItem("cardname");
var card_holder_ = localStorage.getItem("cardholder"); 
var _exp_month_ = localStorage.getItem("month");
var _exp_year_ = localStorage.getItem("year");
var _cvv_number = localStorage.getItem("cvv");


cardnumber.textContent = cardname_;
cardname.textContent = card_holder_;
expmonth.textContent = _exp_month_ + "/";
expyear.textContent = _exp_year_;
cvv.textContent = _cvv_number;