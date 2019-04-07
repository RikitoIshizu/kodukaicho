import React from 'react'
import './index.css'

import { JyankenBox } from './jyankenBox'
import { ScoreBox } from './scoreBox'

export class Jyanken extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            human: null,
            computer: null
        }
    }

    render() {
        return(
            <section>
                <h1>じゃんけん</h1>
                <JyankenBox actionPon={(te) => this.pon(te)} />
                <ScoreBox
                    human={this.state.human}
                    computer={this.state.computer}
                    judgement={this.judge()}
                />
            </section>
        )
    }

    // 自分が出す手
    pon(human_hand) {
        const computer_hand = Math.floor(Math.random() * 3)
        this.setState({
            human: human_hand,
            computer: computer_hand
        })
    }

    // 判定する
    judge() {
        if(this.state.human === null) {
            return null
        } else {
            return (this.state.computer - this.state.human + 3) % 3
        }
    }
}

export default Jyanken