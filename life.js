var life;
var today_date = document.querySelector("#today_date");
var birthday_date = document.querySelector("#birthday");
var judgement_date = document.querySelector("#judgement");
var submitButton = document.querySelector("#submit");
var timeUsed = document.querySelector("#timeUsed");
var timeLeft = document.querySelector("#timeRemaining");

// square boxes by day, weeks, or months
var const_day = 1000 * 60 * 60 * 24; // ms in a day
var const_week = 1000 * 60 * 60 * 24 * 7; // ms in a week
// toggle to see by day or weeks

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

  life = Math.floor((judgementUtc - birthdayUtc) / const_day);
  var life_weeks = Math.floor((judgementUtc - birthdayUtc)) / const_week;

  var todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  var life_completed = Math.floor((todayUtc - birthdayUtc) / const_day);
  var life_left = Math.floor((judgementUtc - todayUtc) / const_day);

  var life_completed_output = "";
  var life_left_output = "";
  for(let i = 0; i < life_completed; ++i) {
    life_completed_output += "<div class = \"completed\"></div>";
  }
  for(let i = 0; i < life_left; ++i) {
    life_left_output += "<div class = \"remaining\"></div>";
  }

  timeUsed.innerHTML = life_completed_output;
  timeLeft.innerHTML = life_left_output;
});
