import React, {PureComponent} from 'react'
import ReactHtmlParser from 'react-html-parser'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { remove } from './../actions/index.js'
import { connect } from 'react-redux'
import CommentList from './CommentList'

class Article extends PureComponent {
    render() {
        const {article, isOpen, onBtnClick} = this.props
        const btnClass = classNames('btn', { 'btn--blue': !isOpen}, { 'btn--red': isOpen})
        const body = isOpen && <section>
                            <div className="article__content">
                                { ReactHtmlParser(article.text) }
                            </div>

                            <CommentList comments={ article.comments } />
                        </section>

        return (
            <div className="article">
                <div className="article__container">
                    <h2 className="article__title">
                        {article.title}
                    </h2>
                    <button className={btnClass}
                            onClick={onBtnClick}>
                            {isOpen ? 'hide' : 'show'} article
                    </button>

                    <button className='btn btn--red'
                            onClick={ () => this.props.remove(article) }>
                           remove article
                    </button>
               </div>
                {body}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({remove: remove}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Article)