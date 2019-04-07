import React from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'
import Input from 'react-toolbox/lib/input'
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio'

export const MoneyEntry = (props) => {
    // let { onChnagePayingIn, onChangeDate, onChangeItem } = this.props
    return (
        <div className='entry'>
            <fieldset>
                <legend>記帳</legend>
                <div>
                    <RadioGroup
                        name='payingIn' value={props.payingIn} 
                        onChange={props.onChnagePayingIn}
                    >
                        <RadioButton label='入金' value='on' />
                        <RadioButton label='出金' value='off' />
                    </RadioGroup>
                </div>
                <div>
                    <Input label='日付' type='text' value={props.date}
                        onChange={(e) => props.onChangeDate.bind(this,e)}
                         />
                </div>
                <div>
                    <Input
                        label='項目'
                        type='text'
                        value={props.item}
                        onChange={(e) => props.onChangeItem(e)}
                         />
                </div>
                <div>
                    <Input
                        label='金額'
                        type='text'
                        value={props.price}
                        onChange={(e) => props.onChangePrice(e)}
                         />
                </div>
                <div>
                    <button onClick={() => props.onClickAdd()}>追加</button>
                </div>
            </fieldset>
        </div>
    )
}

MoneyEntry.propTypes = {
    date             : PropTypes.string.isRequired,
    item             : PropTypes.string.isRequired,
    price            : PropTypes.number.isRequired,
    payingIn         : PropTypes.bool.isRequired,
    onChangeDate     : PropTypes.func.isRequired,
    onChnagePayingIn : PropTypes.func.isRequired,
    onChangeItem     : PropTypes.func.isRequired,
    onChangePrice    : PropTypes.func.isRequired,
    onClickAdd       : PropTypes.func.isRequired
}

export default MoneyEntry