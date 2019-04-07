import React from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'

export const MoneyEntry = (props) => {
    return (
        <div className='entry'>
            <fieldset>
                <legend>記帳</legend>
                <div>
                    <input type='radio' value='on' 
                        checked={props.payingIn}
                        onChnage={(e) => props.onChnagePayingIn(e)}
                    />入金
                    <input type='radio' value='off' 
                        checked={!props.payingIn}
                        onChnage={(e) => props.onChnagePayingIn(e)}
                    />出勤
                </div>
                <div>
                    日付：
                    <input
                        type='text'
                        value={props.date}
                        onChange={(e) => props.onChangeDate(e)}
                         />
                </div>
                <div>
                    項目：
                    <input
                        type='text'
                        value={props.item}
                        onChange={(e) => props.onChangeItem(e)}
                         />
                </div>
            </fieldset>
        </div>
    )
}

MoneyEntry.propTypes = {
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    payingIn: PropTypes.bool.isRequired,
    onChangeDate: PropTypes.func.isRequired,
    onChnagePayingIn: PropTypes.func.isRequired,
    onChangeItem: PropTypes.func.isRequired
}

export default MoneyEntry