const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const counter = document.getElementById('counter');

let count = 0
increaseBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });
  
decreaseBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});