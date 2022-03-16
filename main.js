let arr = [10];
let i, j, k;
let range = document.querySelector('#range');
let display = document.querySelector('.display')
let rangeValue = document.querySelector('#range-value');

const pascal = (size) => {
    for (i = 1; i <= size; i++) {
        arr[i] = 0;
    }
 
    arr[0] = 1;

    for (j = 1; j <= size; j++) {

            let str = document.createElement('div')
            str.className = 'str'
            str.style.gridTemplateColumns = `repeat(${j}, 100px)`

        for (i = j; i >= 1 ; i--) {

            let num = document.createElement('div')
            num.className = 'num'

            num.textContent = `${arr[i-1]}`;
            arr[i] = arr[i-1] + arr[i];
            str.appendChild(num)
        } 

        display.appendChild(str) 
    }
}

rangeValue.textContent = range.value;

pascal(range.value)

range.addEventListener('change', () => {
    display.textContent = '';
    rangeValue.textContent = range.value;
    pascal(range.value);
})


 