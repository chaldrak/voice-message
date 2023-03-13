import React from "react";
import { record } from "vmsg";

class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      record: null,
    };
  }
  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };
  handleRecord = () => {
    record({
      wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
    }).then((record) => {
      this.setState({ record });
    });
  };
  handleSend = () => {
    const { body, record } = this.state;
    this.setState({ body: "", record: null });
    this.props.onSend({ body, record });
  };
  renderRecord() {
    const { record } = this.state;
    if (!record) return null;
    const size = (record.size / 1024).toFixed(1) + "KB";
    return <span className="reply-record">record.mp3 ({size})</span>;
  }
  render() {
    const { body, record } = this.state;
    return (
      <article className="reply">
        <textarea
          className="reply__body"
          placeholder="Enter your comment here…"
          autoFocus
          value={body}
          onChange={this.handleBodyChange}
        />
        <footer className="reply__controls">
          <button
            className="reply-control"
            disabled={!body}
            onClick={this.handleSend}
          >
            Send
          </button>
          <button className="reply-control" onClick={this.handleRecord}>
            Record
          </button>
          {this.renderRecord()}
        </footer>
      </article>
    );
  }
}

export default Reply;
