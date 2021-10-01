const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

const display = document.querySelector('.calculator__display');

const calculate = (n1, operator, n2) => {
    // Perform calculation and return calculated value
    let result = '';

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2); 
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2); 
    } else if (operator === 'nultiply') {
        result = parseFloat(n1) * parseFloat(n2); 
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2); 
    }
    return result; 
}

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action; 

        const keyContent = key.textContent; 
        const displayedNum = display.textContent; 

        const previousKeyType = calculator.dataset.previousKeyType; 

        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        if(!action){
            console.log('number key!');

            if(displayedNum === '0' || previousKeyType==='operator'){
                display.textContent = keyContent; 
            }else{
                display.textContent = displayedNum + keyContent; 
            }
            calculator.dataset.previousKeyType = 'number'; 
        }

        if(
            action === 'add' || action === 'subtract' ||
            action === 'multiply' || action === 'divide'
        ){
            console.log('operator key!');

            const firstValue = calculator.dataset.firstValue; 
            const operator = calculator.dataset.operator; 
            const secondValue = displayedNum; 

            if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue); 
            }

            key.classList.add('is-depressed'); 
            //Add custom attribute
            calculator.dataset.previousKeyType = 'operator'; 
            calculator.dataset.firstValue = displayedNum; 
            calculator.dataset.operator = action; 
        }

        if(action === 'decimal'){
            console.log('decimal key!');

            display.textContent = displayedNum + '.'; 
            // Do nothing if string has a dot
            if (!displayedNum.includes('.')){
                display.textContent = displayedNum + '.'; 
            }else if(previousKeyType === 'operator'){
                display.textContent = '0.'; 
            }
            calculator.dataset.previousKeyType = 'decimal'; 
        }

        if(action === 'clear'){
            console.log('clear key!');
            calculator.dataset.previousKeyType = 'clear'; 
        }

        if(action === 'calculate'){
            console.log('equal key!');
            const firstValue = calculator.dataset.firstValue; 
            const operator = calculator.dataset.operator; 
            const secondValue = displayedNum; 

            display.textContent = calculate(firstValue, operator, secondValue); 

            calculator.dataset.previousKeyType = 'calculate'; 
        }
    }
})