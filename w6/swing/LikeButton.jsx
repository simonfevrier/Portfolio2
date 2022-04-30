import React from 'react'
export default class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        if (props.likeLabel == undefined) {
            props.likeLabel = "You like this."
        }
        this.state = { liked: false }
    }

    render() {
        // console.log()
        let className ="likeButton"
        if (this.state.liked) {
            return <div class={className}>{this.props.likeLabel}</div>
        }

        return (
            <div>
                <button onClick={() => this.setState({ liked: true })}>Like</button>
            </div>
        )
    }
}