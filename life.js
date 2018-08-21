var today_date = document.querySelector("#today_date");
var birthday_date = document.querySelector("#birthday");
var judgement_date = document.querySelector("#judgement");
var submitButton = document.querySelector("#submit");
var resetButton = document.querySelector("#reset");
var output = document.querySelector("#output");
var weeks = document.querySelector("#weeks");
var days = document.querySelector("#days");

var const_day = 1000 * 60 * 60 * 24; // ms in a day
var const_week = 1000 * 60 * 60 * 24 * 7; // ms in a week

var today = new Date();
var today_month = ((today.getMonth() + 1) < 10) ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
var today_day = today.getDate();
var today_year = today.getFullYear();

submitButton.addEventListener("click", function () {

  birthday = birthday_date.value;
  judgement = judgement_date.value;

  birthday = new Date(birthday);
  judgement = new Date(judgement);

  if(today < birthday) {
    alert("error: select a start date prior to today's date");
  }

  else if(today > judgement) {
    alert("error: please select an end date after today's date")
  }

  else {
    document.getElementById("form").classList.remove('centered');

    var birthdayUtc = Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate());
    var judgementUtc = Date.UTC(judgement.getFullYear(), judgement.getMonth(), judgement.getDate());

    let divideBy = weeks.checked ? const_week : const_day;

    var todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    var completed = Math.floor((todayUtc - birthdayUtc) / divideBy);
    var left = Math.floor((judgementUtc - todayUtc) / divideBy);

    var out = "";
    for(let i = 0; i < completed; ++i) {
      out += "<img src = 'img/ink-888888.png'>";
    }
    for(let i = 0; i < left; ++i) {
      out += "<img src = 'img/ink-blue.png'>";

    }
    output.innerHTML = out;
  }

});
