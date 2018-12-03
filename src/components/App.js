import React, {Component} from 'react'
import ArticlesTitle from './ArticlesTitle'
import ArticleList from './ArticleList'
import './../sass/main.scss'

class App extends Component {
    render() {    
        return (
            <div className = "container">
                <ArticlesTitle />
                <ArticleList/>
            </div>
        )
    }
}

export default App