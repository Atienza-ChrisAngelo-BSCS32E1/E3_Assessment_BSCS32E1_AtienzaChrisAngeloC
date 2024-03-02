function checkEvenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

document.getElementById('checkButton').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    const result = checkEvenOrOdd(inputNumber);
    document.getElementById('result').innerText = result;
});