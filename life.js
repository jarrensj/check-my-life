var today_date = document.querySelector("#today_date");
var birthday_date = document.querySelector("#birthday");
var judgement_date = document.querySelector("#judgement");
var submitButton = document.querySelector("#submit");
var timeUsed = document.querySelector("#timeUsed");
var timeLeft = document.querySelector("#timeRemaining");
var weeks = document.querySelector("#weeks");
var days = document.querySelector("#days");

var const_day = 1000 * 60 * 60 * 24; // ms in a day
var const_week = 1000 * 60 * 60 * 24 * 7; // ms in a week

var today = new Date();
var today_month = ((today.getMonth() + 1) < 10) ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
var today_day = today.getDate();
var today_year = today.getFullYear();
today_date.textContent = today_month + '/' + today_day + '/' + today_year;

submitButton.addEventListener("click", function () {
  birthday = birthday_date.value;
  judgement = judgement_date.value;

  birthday = new Date(birthday);
  judgement = new Date(judgement);

  var birthdayUtc = Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate());
  var judgementUtc = Date.UTC(judgement.getFullYear(), judgement.getMonth(), judgement.getDate());

  let divideBy = weeks.checked ? const_week : const_day;

  var todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  var completed = Math.floor((todayUtc - birthdayUtc) / divideBy);
  var left = Math.floor((judgementUtc - todayUtc) / divideBy);

  var completed_output = "";
  var left_output = "";
  for(let i = 0; i < completed; ++i) {
    completed_output += "<img src = 'img/ink-888888.png'>";
  }
  for(let i = 0; i < left; ++i) {
    left_output += "<img src = 'img/ink-blue.png'>";
  }

  timeUsed.innerHTML = completed_output;
  timeLeft.innerHTML = left_output;
});
