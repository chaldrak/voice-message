import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    if (props.record) {
      this.audio = new Audio();
      this.audio.src = URL.createObjectURL(props.record);
    }
  }
  handleRecordOver = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
  handleRecordOut = () => {
    this.audio.pause();
  };
  handleRecordClick = () => {
    const a = document.createElement("a");
    if (!("download" in a)) {
      window.open(this.audio.src);
      return;
    }
    a.href = this.audio.src;
    a.download = "record.mp3";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  renderRecord() {
    const { record } = this.props;
    if (!record) return null;
    return (
      <span
        className="comment__record"
        title="Hover to play / click to download"
        onMouseOver={this.handleRecordOver}
        onMouseOut={this.handleRecordOut}
        onClick={this.handleRecordClick}
      >
        ♫
      </span>
    );
  }
  render() {
    const { id, body } = this.props;
    return (
      <article className="comment">
        <header className="comment__header">
          <h5 className="comment__id">Comment #{id + 1}</h5>
          {this.renderRecord()}
        </header>
        <blockquote className="comment__body">{body}</blockquote>
      </article>
    );
  }
}

export default Comment;
