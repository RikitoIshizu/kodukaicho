import React from 'react'
import './index.css'

export class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: '0',
            first: '0',
            secondInput: false,
            last: '',
            calc: '',
            result: 0,
            calCode: null,
            colNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            colSymbol: ['.', '+', '-', '×', '÷', 'C', '=']
        }
    }

    render() {
        return(
            <section>
                <h1 className='title'>Reactで作る電卓</h1>
                <div className='calFrame'>
                    <div className='displayFrame'>{this.state.display}</div>
                    <div className='btn'>
                        {this.state.colNum.map((num) => {
                            return <button key={num} onClick={() => this.onClickInputNum(num)}>{num}</button>
                        })}
                        {this.state.colSymbol.map((symbol) => {
                            return <button key={symbol} onClick={() => this.onClickSymbol(symbol)}>{symbol}</button>
                        })}
                    </div>
                </div>
            </section>
        )
    }

    onClickInputNum(num) {
        const displayNum = this.state.display + num
        console.log(displayNum)

        if(this.state.secondInput) {
            console.log('もっともっとタイプワイルド')
        } else {
            if(displayNum.substr(0,1) === '0') {
                if(displayNum.indexOf('.') !== -1) {
                    this.setState({
                        display: displayNum
                    })
                } else {
                    this.setState({
                        display: displayNum.slice(1)
                    })
                }
            } else {
                this.setState({
                    display: displayNum
                })
            }
        }
    }

    onClickSymbol(symbol) {
        if(symbol ==='C') {
            this.setState({
                display: 0
            })
        } else if(symbol === '.') {
            if(this.state.display.indexOf('.') === -1) {
                this.setState({
                    display: this.state.display + symbol
                })
            }
        } else if(symbol === '+' || symbol === '-' || symbol ===  '×' || symbol ===  '÷') {
            this.setState({
                first: this.state.display,
                calc: symbol,
                secondInput: true
            })
        }
    }
}

export default Calculator