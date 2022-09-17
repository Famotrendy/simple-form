let username = document.getElementById("username"),
  password = document.getElementById("password"),
  day_of_the_week = document.getElementById("day_of_the_week"),
  system_type = document.getElementsByName("system_type"),
  gender = document.getElementsByName("gender"),
  submit_button = document.getElementById("submit"),
  username_info = document.querySelector(".username_info"),
  password_info = document.querySelector(".password_info"),
  system_type_info = document.querySelector(".system_type_info"),
  system_type_wrapper = document.querySelector("#system_type_wrapper"),
  gender_info = document.querySelector(".gender_info"),
  gender_wrapper = document.querySelector("#gender_wrapper"),
  day_of_the_week_info = document.querySelector(".day_of_the_week_info");

day_of_the_week.addEventListener("click", (e) => {
  day_of_the_week_info.textContent = `Your day is ${
    e.target.options[e.target.selectedIndex].value
  }`;
});

system_type_wrapper.addEventListener("click", (e) => {
  if (e.target.getAttribute("name") === "system_type") {
    let there_is_checked;
    system_type.forEach((type) => {
      if (type.checked) there_is_checked = true;
    });
    if (!there_is_checked) {
      system_type_info.textContent = "You need to choose a system type";
    } else system_type_info.textContent = "";
  }
});

gender_wrapper.addEventListener("click", (e) => {
  if (e.target.getAttribute("name") === "gender") {
    if (e.target.id === "male") gender_info.textContent = "You masculine";
    else if (e.target.id === "female") gender_info.textContent = "You feminine";
  }
});

username.addEventListener("focus", (e) => {
  console.log("user is typing");
});

username.addEventListener("blur", (e) => {
  console.log("user is done typing");
});

password.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value.length < 6) {
    password_info.textContent = "Minimum password length is 6 characters";
  } else password_info.textContent = "";
});

username.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value.includes(" ")) {
    username_info.textContent = "Spaces is not allowed in username";
  } else if (!value) {
    username_info.textContent = "Provide your username";
  } else username_info.textContent = "";
});

submit_button.addEventListener("click", (e) => {
  let username_value = username.value;
  let password_value = password.value;
  let system_types_checked = [];
  let gender_on = "";

  system_type.forEach((checkbox) => {
    if (checkbox.checked) system_types_checked.push(checkbox.id);
  });
  gender.forEach((radio) => {
    if (radio.checked) gender_on = radio.id;
  });

  let day_of_the_week_selected =
    day_of_the_week.options[day_of_the_week.selectedIndex].value;

  let form_values = {
    username: username_value,
    password: password_value,
    gender: gender_on,
    system_types: system_types_checked,
    day_of_the_week: day_of_the_week_selected,
  };

  console.log(form_values);

  e.preventDefault();
});
