import React from "react";
import Reply from "./Reply";
import Comment from "./Comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.idCounter = 0;
  }
  handleReplySend = (comment) => {
    const { comments } = this.state;
    comment = { ...comment, id: this.idCounter++ };
    this.setState({ comments: comments.concat(comment) });
  };
  render() {
    const { comments } = this.state;
    return (
      <aside className="comments">
        {comments.map((props) => (
          <Comment key={props.id} {...props} />
        ))}
        <Reply onSend={this.handleReplySend} />
      </aside>
    );
  }
}

export default Comments;
