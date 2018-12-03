import { combineReducers } from 'redux'
import ArticlesReducer from './fixtures'

const allReducers = combineReducers({
    articles: ArticlesReducer,
})

export default allReducers