// import { moneyBookStore } from '../store/moneyBook'

const moneyBookStore = {
    books: [],
    date: '',
    item: '',
    price: '',
    payingIn: true
}

export const moneyBookReducer = (state = moneyBookStore, action) => {
    switch(action.type) {
        case 'SET_DEFAULT_DATA':
            return {
                ...state,
                books: action.value
            }

        case 'INPUT_INCOME_AND_EXPENDITURE': 
            return console.log(action.value)

        case 'INPUT_DATE': 
            return {
                ...state,
                date: action.value
            }

        case 'INPUT_ITEM':
            return {
                ...state,
                item: action.value
            }

        case 'INPUT_PRICE':
            return {
                ...state,
                price: action.value
            }
        
        case 'CHANGE_INCOME_AND_EXPENDITURE':
            return {
                ...state,
                price: !action.value
            }
        
        default: return state
    }
}

export default moneyBookReducer