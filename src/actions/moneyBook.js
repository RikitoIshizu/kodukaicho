// 初期データをセットする
export const setDefaultData = () => {
    // 初期データ
    const books = [
        {date: '1/1', item: 'お年玉', amount: 10000},
        {date: '1/3', item: 'ケーキ', amount: -500},
        {date: '2/1', item: '小遣い', amount: 3000},
        {date: '2/5', item: '漫画', amount: -600}
    ]

    return {
        type: 'SET_DEFAULT_DATA',
        books
    }
}

// 収支を入力する
export const inputIncomeAndExpenditure = (incomeandexpenditure) => {
    return {
        type: 'INPUT_INCOME_AND_EXPENDITURE',
        incomeandexpenditure
    }
}

// 日程を入力する
export const inputDate = (date) => {
    return {
        type: 'INPUT_DATE',
        date
    }
}

// 項目を入力する
export const inputItem = (item) => {
    return {
        type: 'INPUT_ITEM',
        item
    }
}

// 金額を入力する
export const inputPrice = (price) => {
    return {
        type: 'INPUT_PRICE',
        price
    }
}

// 収支を切り替える
export const chnageIncomeAndExpenditure = (change) => {
    return {
        type: 'CHANGE_INCOME_AND_EXPENDITURE',
        change
    }
}

// 小遣い帳にデータをセットする
export const setDataInMoneyBook = () => {
    return {
        type: 'SET_DATA_IN_MONEY_BOOK'
    }
}