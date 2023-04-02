//Input number
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber (event.target.value)
		updateScreen(currentNumber)
	})
})

let prevNumber = '';
let calculationOperator ='';
let	currentNumber = '0';

const inputNumber = (number) => {
	if(currentNumber === '0') {
		currentNumber = number
	}else{
		currentNumber += number
	}
}

//Input operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	prevNumber = currentNumber
	calculationOperator = operator
	currentNumber = ''
}

//Kalkulation
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

const calculate = () => {
	let result =''
	switch(calculationOperator) {
	case "+":
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break
	case "-":
		result = parseFloat(prevNumber) - parseFloat(currentNumber)
		break
	case "*":
		result = parseFloat(prevNumber) * parseFloat(currentNumber)
		break
	case "/":
		result = parseFloat(prevNumber) / parseFloat(currentNumber)
		break
	case "%": 
		result = parseFloat(prevNumber) /100  //persentase diubah menjadi operator
		break
	default:
		break
	}
	currentNumber = result
	calculationOperator = ''
}

//button AC

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}


//Decimal

inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}


const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

/*
//Percentage
const percentageBtn = document.querySelector('.percentage')
percentageBtn.addEventListener('click', () => {
	inputPercentage(event.target)
	updateScreen(currentNumber)
	alert(parseFloat(prevNumber)/100)
})

const inputPercentage = (percentage) => {
	
	currentNumber = parseFloat(prevNumber)/100;
	calculationOperator = '';
}

*/