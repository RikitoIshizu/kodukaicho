import React from 'react'
import Proptypes from 'prop-types'

export const ScoreBox = (props) => {
    const teString = ['グー', 'チョキ', 'パー']
    const judgementString = ['引き分け', '勝ち', '負け']

    return (
        <table>
            <tbody>
                <tr><th>あなた</th><td>{teString[props.human]}</td></tr>
                <tr><th>Computer</th><td>{teString[props.computer]}</td></tr>
                <tr><th>勝敗</th><td>{judgementString[props.judgement]}</td></tr>
            </tbody>
        </table>
    )
}

ScoreBox.propTypes = {
    human: Proptypes.number,
    computer: Proptypes.number,
    judgement: Proptypes.number
}

export default ScoreBox