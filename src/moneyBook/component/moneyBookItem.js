import React from 'react'
import PropTypes from 'prop-types'

export const MoneyBookItem = (props) => {
    const {date, item, amount} = props.book
    if(amount > 0) {
        return (
            <tr>
                <td>{date}</td>
                <td>{item}</td>
                <td>{amount}</td>
                <td></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{date}</td>
                <td>{item}</td>
                <td></td>
                <td>{-amount}</td>
            </tr>
        )
    }
}

MoneyBookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default MoneyBookItem