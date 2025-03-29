const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');

const operators = ['+', '-', '*', '/', '%'];

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent === 'C') {
            display.textContent = '0';

        } else if (btn.textContent === '←') {
            display.textContent = display.textContent.slice(0, -1);

            if (display.textContent === '') {
                display.textContent = '0';
            }

        } else if (btn.textContent === '=') {
            try {
                display.textContent = eval(display.textContent);
              } catch (error) {
                display.textContent = 'Error';
              }              

        } else {
            if (operators.includes(btn.textContent)) {
                if (operators.includes(display.textContent.slice(-1))) {
                    return; 
                }
            };
           
        }             
    });
});

