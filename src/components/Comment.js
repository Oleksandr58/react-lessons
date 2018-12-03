import React, {PureComponent} from 'react'
import ReactHtmlParser from 'react-html-parser'

class Comment extends PureComponent {
    render() {
        const {comment} = this.props

        return (
            <div className="comment-list__comment">
                {ReactHtmlParser(comment.text)}
            </div>
        )
    }
}

export default Comment