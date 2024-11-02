function reverseString(str) 
{
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) 
    {
        reversed += str[i];
    }
    return reversed;
}

document.getElementById('reverseButton').addEventListener('click', function() {
    const inputString = document.getElementById('InputString').value;
    const reversedString = reverseString(inputString);
    document.getElementById('output').textContent = 'Reversed String: ' + reversedString;
});
