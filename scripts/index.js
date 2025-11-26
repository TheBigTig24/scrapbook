// declare and initialize month arrays
var month1 = ['N', 'Oc', 'M', 'Dece', 'Ap', 'Sep', 'Fe', 'J', 'Jan', 'Au'];
var month2 = ['to', 'u', 'm', 'gu', 'r', 'tem', 'ovem', 'bru', 'ar'];
var month3 = ['ly', 'ch', 'ber', 'st', 'il', 'y', 'ne', 'ay', 'ary'];

document.addEventListener('DOMContentLoaded', function() {

    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', verifyUser);

    populateBirthdayPuzzleSelects();

    // slider values
    const slider = document.querySelector('#date-slider');
    const valueDisplay = document.querySelector('#date-here');

    const updateSliderValue = (event) => {
        valueDisplay.textContent = slider.value;
    };

    slider.addEventListener('input', updateSliderValue);
    updateSliderValue();

    // year inputs
    const yearInput1 = document.querySelector('#year-input1');
    const yearInput2 = document.querySelector('#year-input2');
    const yearInput3 = document.querySelector('#year-input3');

    const calculateYear = (event) => {
        const val1 = +(yearInput1.value || 0);
        const val2 = +(yearInput2.value || 0);
        const val3 = +(yearInput3.value || 0);
        const outputEl = document.querySelector('#year-output');

        let output = val1 * val2 + val3;

        outputEl.innerHTML = output;
    };

    yearInput1.addEventListener('input', calculateYear);
    yearInput2.addEventListener('input', calculateYear);
    yearInput3.addEventListener('input', calculateYear);

});

function verifyUser() {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const usernameVal = username.value;
    const passwordVal = password.value;
    const errMsg = document.querySelector('#err-msg');
    const button = document.querySelector('.login-button');
    if (usernameVal == '123' && passwordVal == '123') {
        errMsg.innerHTML = '';
        username.readOnly = true;
        password.readOnly = true;
        button.removeEventListener('click', verifyUser);
        button.addEventListener('click', validateBirthday);
        stretchLoginBox();
    } else {
        errMsg.innerHTML = 'Username or password is incorrect, doofus.';
    }
}

function stretchLoginBox() {
    const loginbox = document.querySelector('.login-box');
    const currentHeight = window.getComputedStyle(loginbox).height;
    const currentHeightPx = loginbox.offsetHeight;
    let heightInt = (currentHeightPx / window.innerHeight) * 100;
    if (heightInt < 80) {
        heightInt += 26;
    }
    loginbox.style.height = `${heightInt}vh`;
    displayNextPuzzle();
}

function displayNextPuzzle() {
    const birthdayPuzzle = document.querySelector('.birthday-puzzle');
    // const colorPuzzle = document.querySelector('.color-puzzle');

    if (window.getComputedStyle(birthdayPuzzle).display == 'none') {
        birthdayPuzzle.style.display = 'flex';
    } 
    // else if (window.getComputedStyle(colorPuzzle).display == 'none') {
    //     colorPuzzle.style.display = 'block';
    // }
}

function populateBirthdayPuzzleSelects() {
    const select1 = document.querySelector('#months1');
    month1.forEach(element => {
        let optionEl = document.createElement('option');
        optionEl.value = element;
        optionEl.innerHTML = element;
        select1.appendChild(optionEl);
    });
    const select2 = document.querySelector('#months2');
    month2.forEach(element => {
        let optionEl = document.createElement('option');
        optionEl.value = element;
        optionEl.innerHTML = element;
        select2.appendChild(optionEl);
    });
    const select3 = document.querySelector('#months3');
    month3.forEach(element => {
        let optionEl = document.createElement('option');
        optionEl.value = element;
        optionEl.innerHTML = element;
        select3.appendChild(optionEl);
    });
}

function validateBirthday() {
    const errMsg = document.querySelector('#err-msg');

    const allInputs = document.querySelector('.birthday-puzzle').querySelectorAll('input');

    const monthVal1 = document.querySelector('#months1').value;
    const monthVal2 = document.querySelector('#months2').value;
    const monthVal3 = document.querySelector('#months3').value;

    const dateVal = document.querySelector('#date-slider').value;

    const yearVal = document.querySelector('#year-output').innerHTML;

    let bdayStr = `${monthVal1}${monthVal2}${monthVal3} ${dateVal}, ${yearVal}`;

    if (bdayStr == 'July 10, 2005') {
        errMsg.innerHTML = '';
        allInputs.forEach((element) => {
            element.readOnly = true;
        });
        // stretchLoginBox();
        megaVerifyUser();
    } else {
        errMsg.innerHTML = "That's not quite roight.";
    }
}

function megaVerifyUser() {
    //TODO: verify user auth in backend
}