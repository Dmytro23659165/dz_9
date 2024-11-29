function logItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax']);


function calculateEngravingPrice(message, pricePerWord){
    // let price = bob * pricePerWord;
    for(let i = 0; i < message.length; i++){
        let bob = message.split(" ");
        let price = bob.length * pricePerWord;
        console.log(price);
    }
}
calculateEngravingPrice(`в рядку будуть тільки слова і прогалини`, 12);


function findLongestWord(string) {
    let words = string.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord('в рядку будуть тільки слова і прогалини'));


function formatString(string) {
    if (string.length > 40) {
        return string.slice(0, 40) + '...';
    }
    return string;
}
console.log(formatString("Це короткий рядок")); 
console.log(formatString("Цей рядок точно буде довший за сорок символів і треба його обрізати")); 


function checkForSpam(message) {
    if (message.includes('spam') || message.includes('sale')) {
        return true;
    }
    return false;
}
console.log(checkForSpam('Функція перевіряє її на вміст слів spam і sale.'));


function getNumberAndSum(numbers = []) {
    let input = prompt("Введіть число:");
    if (input === null) {
        return numbers;
    }
    if (!isNaN(input) && input !== '') {
        numbers.push(Number(input));
    } else {
        alert("Було введено не число! Спробуйте ше раз");
    }
    return getNumberAndSum(numbers);
}
function calculateSum() {
    const numbers = getNumberAndSum(); 
    const total = numbers.reduce((sum, num) => sum + num, 0);
    if (numbers.length > 0) {
        console.log(total);
    }
}
calculateSum();


const logins = ["Dima228", "Diputat", "Kakashot52"];
function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}
function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}
function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже є!';
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}
console.log(addLogin(logins, "Dima"));
console.log(addLogin(logins, "Bablgum"));
console.log(addLogin(logins, "Ok")); 
