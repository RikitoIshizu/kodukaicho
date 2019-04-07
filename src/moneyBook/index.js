import React from 'react'
import PropTypes from 'prop-types'
import './css/index.css'

import { connect } from 'react-redux'

import * as moneyBookAction from '../actions/moneyBook'

import { MoneyBookList } from './component/moneyBookList.js'
import { MoneyEntry } from './component/moneyEntry.js'

export class MoneyBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            date: '',
            item: '',
            amount: '',
            payingIn: true
        }
    }

    // 初期値
    componentDidMount() {
        this.setState({
            books: [
                {date: '1/1', item: 'お年玉', amount: 10000},
                {date: '1/3', item: 'ケーキ', amount: -500},
                {date: '2/1', item: '小遣い', amount: 3000},
                {date: '2/5', item: '漫画', amount: -600}
            ]
        })
    }

    // 収支を入力する
    addBook(date, item, amount){
        const book = {
            date: date,
            item: item,
            amount: amount
        }
        this.setState({
            books: this.state.books.concat(book)
        })
    }

    // 日程を入力する
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    // 項目を入力する
    onChangeItem(e) {
        this.setState({
            item: e.target.value
        })
    }

    // 金額を入力する
    onChangePrice(e) {
        this.setState({
            amount: e.target.value
        })
    }

    // 収支を切り替える
    onChnagePayingIn(e) {
        console.log(e.target.value)
        this.setState({
            payingIn: e.target.value === 'on'
        })
    }

    onClickAdd() {
        return null
    }

    // 描画
    render() {
        return(
            <div>
                <Title />
                <MoneyBookList
                    books={this.state.books}
                />
                <MoneyEntry
                    payingIn={this.state.payingIn}
                    date={this.state.date}
                    item={this.state.item}
                    onChnagePayingIn={this.onChnagePayingIn}
                    onChangeDate={this.onChangeDate}
                    onChangeItem={this.onChangeItem}
                    onClickAdd={this.onClickAdd}
                />
            </div>
        )
    }
}

const Title = () => {
    return (
        <h1 className='title'>小遣い帳</h1>
    )
}

MoneyBook.propTypes = {
    onChnagePayingIn : PropTypes.func.isRequired,
    onChangeDate     : PropTypes.func.isRequired,
    onChangeItem     : PropTypes.func.isRequired,
    onChangePrice    : PropTypes.func.isRequired,
    onClickAdd       : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        moneyBook: state.moneyBookReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChnagePayingIn : (payingIn) => dispatch(moneyBookAction.chnageIncomeAndExpenditure(payingIn)),
        onChangeDate     : (date) => dispatch(moneyBookAction.inputDate(date)),
        onChangeItem     : (item) => dispatch(moneyBookAction.inputItem(item)),
        onChangePrice    : (price) => dispatch(moneyBookAction.inputPrice(price)),
        onClickAdd       : () => dispatch(moneyBookAction.setDataInMoneyBook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyBook);