import React, {Component} from 'react'
import { connect } from 'react-redux'
import Article from './Article'

class ArticleList extends Component {
    state = {
        openedArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map( (article, index) => 
                            <li key = { article.id } className="article-list__item">
                                <Article article = { article } 
                                        isOpen = {this.state.openedArticleId === article.id} 
                                        onBtnClick = {this.handleClick.bind(this, article.id)}
                                        />
                            </li> )

    return (
        <ul className="article-list">
            { articleElements }
        </ul>  
        )
    }

    handleClick = openedArticleId => this.setState({
        openedArticleId: this.state.openedArticleId === openedArticleId ? null : openedArticleId
    })
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList)