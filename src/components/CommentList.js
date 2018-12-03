import React, {Component} from 'react'
import classNames from 'classnames'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false,
    }

    render() {
        const {comments} = this.props
        const btnClass = classNames('btn', { 'btn--blue': !this.state.isOpen}, { 'btn--red': this.state.isOpen})
        const commentElements = this.state.isOpen ? 
                                                comments.map( (comment, index) => 
                                                    <li key = { index } className="comment-list__content">
                                                        <Comment comment = { comment } />
                                                    </li> ) :
                                                ''

    return (
        <div className="comment-list">
            <div>
                <span className="comment-list__title">
                    Comments ({ comments.length })
                </span>
                <button className={ btnClass }
                                onClick={ this.handleClick }>
                                { this.state.isOpen ? 'hide' : 'show'} comments
                        </button>
            </div> 
            <ul className="article-list">
                { commentElements }
            </ul>  
        </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}