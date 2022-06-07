let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '+/-') {
            screenValue = -screenValue;
            screen.value = screenValue;
        }
        else if (buttonText == 'Sqrt') {
            screenValue = (screenValue)**(0.5);
            screen.value = screenValue;
        }
        else if (buttonText == '^') {
            buttonText = ('**');
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = screenValue.slice(0, - 1);
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}