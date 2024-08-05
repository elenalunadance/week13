
const dateInput = document.getElementById('dateInput');
const resultElement = document.getElementById('result');
const addButton = document.getElementById('addButton');
const errorMessage = document.getElementById('error');

function calculateDays() {
    const birthDate = dateInput.value;
    errorMessage.textContent = "";

    if (birthDate === "") {
        errorMessage.textContent = 'Введите дату'; 
        return;
    }

    const birthDateTimestamp = Date.parse(birthDate);
    const currentDate = Date.now();

    const diffInMilliseconds = birthDateTimestamp - currentDate;

    const daysResult = Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24);
    
    resultElement.textContent = `До вашего дня рождения: ${daysResult} ${daysNaming(daysResult)}.`;

    function daysNaming(days) {
        if (days % 10 === 1 && days % 100 !== 11) {
            return 'день';
        } 
        else if ((days % 10 >= 2 && days % 10 <= 4) && (days % 100 < 10 || days % 100 >= 20)) {
            return 'дня';
        } 
        else {
            return 'дней';
        }
    }
}

addButton.addEventListener('click', calculateDays);