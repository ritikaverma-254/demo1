const form = document
  .querySelector("form")
  ?.addEventListener("submit", (e) => e.preventDefault());

let isChecked = false;
const d = document.getElementById("box");

d.addEventListener("click", (e) => {
  toggleCheck(isChecked);
});

let validEmail =
  /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

function clearerror() {
  console.log("clear function is called");
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  let isValidForm = true;
  clearerror();
  let nameValidation = document.forms["myForm"]["firstname"].value;
  let name = nameValidation.trim();
  if (name.length < 2 || name.length > 30) {
    setError("name", "*First name must be between 2 and 30 characters");
    isValidForm = false;
  }
  let lastValidation = document.forms["myForm"]["lastname"].value;
  let lastName = lastValidation.trim();
  if (lastName.length < 2 || lastName.length > 30) {
    setError("lname", "*last name must be between 2 and 30 characters");
    isValidForm = false;
  }
  let email = document.forms["myForm"]["email"]?.value;
  let isEmailValid = validEmail.test(email);
  if (!isEmailValid) {
    setError("email", "*Invalid email");
    isValidForm = false;
  }
  let isDobValid = true;
  if (!isDobValid) {
    setError("date", "*Invalid Date of Birth");
    isValidForm = false;
  }
  let phoneNo = document.forms["myForm"]["phoneNo"]?.value;
  if (phoneNo.length !== 10) {
    setError("phoneNo", "*Invalid contect Number");
    isValidForm = false;
  }
  let studentId = document.forms["myForm"]["user"]?.value;
  if (studentId.length !== 6) {
    setError("user", "*Student Id is required");
    isValidForm = false;
  }

  let radioButton = document.forms["myForm"]["gender"]?.value;
  if (!radioButton) {
    setError("gender", "*Gender is require");
    isValidForm = false;
  }
  let addressMenu = document.forms["myForm"]["locate"]?.value;
  if (!addressMenu) {
    setError("locate", "*Country is require");
    isValidForm = false;
  }
  return isValidForm;
}

const data = {
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bengaluru", "Mysore", "Mangalore"],
    Delhi: ["New Delhi"],
    Goa: ["Goa"],
  },
  "United States": {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Rochester"],
  },
  Canada: {
    Ontario: ["Toronto", "Ottawa", "Kingston"],
    "British Columbia": ["Vancouver", "Victoria"],
    Quebec: ["Montreal", "Quebec City"],
  },
};

const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");

function resetSelect(selectEl, placeholderText = "Select...") {
  selectEl.innerHTML = "";
  const opt = document.createElement("option");
  opt.value = "";
  opt.textContent = placeholderText;
  opt.disabled = true;
  opt.selected = true;
  selectEl.appendChild(opt);
}

function populateCountries() {
  resetSelect(countrySelect, "Select country");
  const countries = Object.keys(data).sort();
  countries.forEach((country) => {
    const o = document.createElement("option");
    o.value = country;
    o.textContent = country;
    countrySelect.appendChild(o);
  });
  countrySelect.disabled = false;
}

function populateStates(country) {
  resetSelect(stateSelect, "Select state");
  resetSelect(citySelect, "Select city");
  citySelect.disabled = true;

  if (!country || !data[country]) {
    stateSelect.disabled = true;
    return;
  }

  const states = Object.keys(data[country]).sort();
  if (states.length === 0) {
    stateSelect.disabled = true;
    return;
  }

  states.forEach((st) => {
    const o = document.createElement("option");
    o.value = st;
    o.textContent = st;
    stateSelect.appendChild(o);
  });
  stateSelect.disabled = false;
}

function populateCities(country, state) {
  resetSelect(citySelect, "Select city");

  if (!country || !state || !data[country] || !data[country][state]) {
    citySelect.disabled = true;
    return;
  }

  const cities = data[country][state].slice().sort();
  if (cities.length === 0) {
    citySelect.disabled = true;
    return;
  }

  cities.forEach((city) => {
    const o = document.createElement("option");
    o.value = city;
    o.textContent = city;
    citySelect.appendChild(o);
  });
  citySelect.disabled = false;
}

countrySelect.addEventListener("change", (e) => {
  const country = e.target.value;
  populateStates(country);
});

stateSelect.addEventListener("change", (e) => {
  const state = e.target.value;
  const country = countrySelect.value;
  populateCities(country, state);
});

(function init() {
  resetSelect(countrySelect, "Loading countries...");
  resetSelect(stateSelect, "Select state");
  resetSelect(citySelect, "Select city");
  countrySelect.disabled = true;
  stateSelect.disabled = true;
  citySelect.disabled = true;

  populateCountries();
})();

function toggleCheck(isChecked) {
  isChecked = !isChecked;
  let submite = document.getElementById("button2");
  if (isChecked === true) {
    submite.disabled = false;
  } else {
    submite.disabled = true;
  }
}
const firstName = document.getElementById('firstname');
function handleFormSubmit() {
  validateForm();
  if (isChecked) {
  }
  setTimeout(() => {
    console.log("settimeout");
    clearerror();
  }, 5000);
  const myButton = document.getElementById("button2");
  myButton.addEventListener("click",function(){
    localStorage.setItem("firstname",firstName);
    window.location.href = "formNext.html"; 
  })
}
