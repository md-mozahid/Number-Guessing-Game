//guessing project development flow
/*
1. get input value from input
2. input validation
3. input value show to UI
4. input value match with random value
5. set remaining life
6. show message
*/

//selection
const UI = {
    DOMSelector() {
        let randomNumber = parseInt(Math.random() * 20 + 1)
        const formElm = document.querySelector('form')
        const inputNum = document.querySelector('.inputNum')
        const guessElm = document.querySelector('.guess')
        const prevGuess = document.querySelector('.guesses')
        const remainLife = document.querySelector('.lastResult')
        const msgElm = document.querySelector('.lowOrHigh')
        // const pElm = document.querySelector('p')
        const submit = document.querySelector('.submit')
        const resultElm = document.querySelector('.resultField')

        let prevGuessVal = [];
        let numGuesses = 1;
        let playGame = true;

        return {
            formElm, inputNum, guessElm, prevGuess, remainLife, msgElm, submit, randomNumber, resultElm, prevGuessVal, 
        }
    },

    //check guess
    checkGuessNumber(inputVal) {
        const {randomNumber} = this.DOMSelector()
        //Display clue if guess is too high or too low
        if(inputVal === randomNumber) {
            this.showMessage(`You guessed correctly!`)
        }if(inputVal > randomNumber) {
            this.showMessage(`You guessed too high!`)
        }if(inputVal < randomNumber) {
            this.showMessage(`You guessed too low!`)
        }
        console.log(inputVal, randomNumber)
    },

    //set guess value
    // setGuessValue(inputVal) {
    //     const {prevGuessVal} = this.DOMSelector()
    //     prevGuessVal.push(inputVal)
    // },

    //reset input value
    resetInputVal() {
        const {inputNum} = this.DOMSelector()
        inputNum.value = ''
    },
    //hide warning message
    hideMessage() {
       const msgElm = document.querySelector('.message')
       setTimeout(() => {
        msgElm.remove()
       }, 2000)
    },

    //show warning message
    showMessage(msg) {
        const {msgElm} = this.DOMSelector()
        const elm = `<div class='alert alert-danger message'>${msg}</div>`
        msgElm.insertAdjacentHTML('afterbegin', elm)
        this.hideMessage()
    },

    //show input value to UI
    setGuessingInputVal(inputVal) {
        const {prevGuess} = this.DOMSelector()
        prevGuess.textContent = inputVal
    },

    //input validation check
    inputValidation(inputVal) {
        let isValid = true
        if(inputVal === '') {
            // isValid = false
            this.showMessage('Pleas fill the inputs')
        }if(Number(inputVal) !== Number(inputVal)) {
            // isValid = false
            this.showMessage('Pleas fill the the valid numbers')
        }if(inputVal > 20) {
            this.showMessage('Please fill the value below or equal 20')
        }if(inputVal < 1) {
            this.showMessage('Please fill the value above or equal 1')
        }
        return isValid
    },

    //get input value
    receivedInput() {
        const {inputNum} = this.DOMSelector()
        const receivedVal = inputNum.value
        // console.log(receivedVal)
        return receivedVal
    },

    //guess remaining
    guessRemain() {},

    //initialize 
    init() {
        const {formElm} = this.DOMSelector()
        formElm.addEventListener('submit', (evt) => {
            evt.preventDefault()

            //get the input value
            const inputVal = this.receivedInput()
            
            //input validation check
            const isInValid = this.inputValidation(inputVal)
            if(!isInValid) return
            
            //check guess number
            // let guess = parseInt(Math.random() * 20 + 1)
            this.checkGuessNumber(inputVal)

            //show input value to UI
            this.setGuessingInputVal(inputVal)
            // this.setGuessingInputVal(inputVal)

            //guess remaining
            this.guessRemain()
            //reset input value
            this.resetInputVal()
        })
    },
}
UI.init()

