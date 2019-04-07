import React from 'react'
import Proptypes from 'prop-types'


export const JyankenBox = (props) => {
    return (
        <div>
            <button onClick={() => props.actionPon(0)}>グー</button>
            <button onClick={() => props.actionPon(1)}>チョキ</button>
            <button onClick={() => props.actionPon(2)}>パー</button>
        </div>
    )
}

JyankenBox.propTypes = {
    actionPon: Proptypes.func
}

export default JyankenBox