import React from 'react'
import Proptypes from 'prop-types'
import '../css/index.css'
import { MoneyBookItem }from './moneyBookItem.js';

export const MoneyBookList = (props) => {
    return (
        <div>
            <table className='book'>
                <thead data-type='ok'>
                    <tr>
                        <th>日付</th>
                        <th>項目</th>
                        <th>入金</th>
                        <th>出勤</th>
                    </tr>
                </thead>
                <tbody>
                    {props.books.map((book) =>
                        <MoneyBookItem book={book} key={book.date + book.item} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

MoneyBookList.propTypes = {
    books: Proptypes.array.isRequired
}