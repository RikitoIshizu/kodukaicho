import React from 'react'

// import { Jyanken } from './jyanken/index'
import { MoneyBook } from './moneyBook/index'
// import { Calculator } from './calculator/index'

export class Main extends React.Component {
    render() {
        return(
            <div>
                {/* <Jyanken /> */}
                {/* <Calculator /> */}
                <MoneyBook />
            </div>
        )
    }
}

export default Main