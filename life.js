var today = new Date();
var today_month = ((today.getMonth() + 1) < 10) ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
var today_day = today.getDate();
var today_year = today.getFullYear();

var life;

var today_date = document.querySelector("#today_date");
today_date.textContent = today_month + '/' + today_day + '/' + today_year;

var birthday_date = document.querySelector("#birthday");
var judgement_date = document.querySelector("#judgement");

var submitButton = document.querySelector("#submit");

// square boxes by day, weeks, or months
var const_day = 1000 * 60 * 60 * 24; // ms in a day
var const_week = 1000 * 60 * 60 * 24 * 7; // ms in a week

var timeUsed = document.querySelector("#timeUsed");
var timeLeft = document.querySelector("#timeRemaining");

console.log("hi");

submitButton.addEventListener("click", function () {
  birthday = birthday_date.value;
  judgement = judgement_date.value;
  console.log("birthday:");
  console.log(birthday); // 1994-10-06
  console.log("judgement:");
  console.log(judgement);
  console.log("total:");

  birthday = new Date(birthday);
  judgement = new Date(judgement);

  console.log(birthday);
  console.log(birthday.getFullYear());
  console.log(birthday.getMonth());
  console.log(birthday.getDate());
  var birthdayUtc = Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate());
  console.log(birthdayUtc);
  var judgementUtc = Date.UTC(judgement.getFullYear(), judgement.getMonth(), judgement.getDate());
  console.log(judgementUtc);
  life = Math.floor((judgementUtc - birthdayUtc) / const_day); // day
  var life_weeks = Math.floor((judgementUtc - birthdayUtc)) / const_week;
  console.log("real:");
  console.log(life); // days
  console.log(life_weeks); // weeks
  // months

  var todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  var life_completed = Math.floor((todayUtc - birthdayUtc) / (1000 * 60 * 60 * 24)); // day
  var life_left = Math.floor((judgementUtc - todayUtc) / (1000 * 60 * 60 * 24)); // day

  console.log("life completed:");
  console.log(life_completed);
  console.log("life left:");
  console.log(life_left);

  var life_completed_output = "";
  for(let i = 0; i < life_completed; ++i) {
    //life_completed_output += "tofu" + "<br>";
    life_completed_output += "<div class = \"completed\"></div>";
  }
  var life_left_output = "";
  for(let i = 0; i < life_left; ++i) {
    //life_left_output += "pizza" + "<br>";
    life_left_output += "<div class = \"remaining\"></div>";
  }

  timeUsed.innerHTML = life_completed_output;
  timeLeft.innerHTML = life_left_output;
});
