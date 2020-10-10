import React, { Component } from 'react'
import './Calculator.css'

import Button from './Button'
import Display from './Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    //Seu objetivo é implementar estas funções

    calculate(){
		/*
			this method will calculate the result and show it on the display
		*/
		let result = 0
        switch(this.state.operation){
			case '+':
				result = this.state.values[0] + this.state.values[1]
				break;
			case '-':
				result = this.state.values[0] - this.state.values[1]
				break;
			case '*':
				result = this.state.values[0] * this.state.values[1]
				break;
			case '/':
				result = this.state.values[0] / this.state.values[1]
				break;
			default: break;
		}
		const resultString = result.toString()

		/*
			it verifies if the number have more than 9 digits. If true, it verifies if the number has 10 digits and is
			a negative number. If true, the method simply displays the number with the minus sign before it
		*/
		if(resultString.length > 9){
			if(resultString.length === 10 && result < 0){
				this.setState({
					...this.state,
					displayValue: resultString,
				})
			}
			else{
				this.setState({
					...this.state,
					displayValue: 'Erro',
				})
			}
		}
		else{
			this.setState({
				...this.state,
				displayValue: resultString,
			})
		}
	}


    clearMemory() {
		/*
			this method will reset the state to the initial state, clearing the memory
		*/
        this.setState({
            ...initialState,
        })
    }

    async setOperation(operation) {
        if(operation === '='){
            /*
                if the operation is '=', the method will await the setState and then call the calculate method
            */
		    await this.setState({
				...this.state,
				values: [this.state.values[0], parseFloat(this.state.displayValue)]
			})
            this.calculate()
        }
        else{
            /*
				if the operation is not '=', the method will set the operation in state to the operation called
            */
            this.setState({
                ...this.state,
                operation: operation,
                clearDisplay: true,
            })
        }
    }

    addDigit(n) {
		/*
			it will verify if the display value has less than 9 digits. If the number has more than 9 digits,
			it does nothing for aesthetic purposes, cause more than 9 digits on the display causes the exceeding 
			digits to disappear from the display, making difficult to see the real number that is on the state
		*/
		if(this.state.displayValue.length === 9 && !this.state.clearDisplay);

        // it will verify if it is the first number of the operation or not
        else if(!this.state.clearDisplay){
            /* 
                if it is the first number of the operation, the method will verify if there is only a 0 in the display;
                if true, it will replace the zero with the digit clicked;
                if false, it will put the number in front of the last added digit;
            */
            this.setState({
                ...this.state,
                displayValue: this.state.displayValue === '0' ? n.toString() : this.state.displayValue + n.toString(),
            })
        }
        else{
            /*
                if there was a number already added to the operation, the method will replace the entire number in the display
                for the digit clicked
            */
            this.setState({
                ...this.state,
                clearDisplay: false,
                values: [parseFloat(this.state.displayValue), 0],
                displayValue: n,
            })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
                
            </div>
        )
    }
}