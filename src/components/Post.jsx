import React from "react";
import Comments from "./Comments";

class Post extends React.Component {
  render() {
    return (
      <article className="post">
        <h3 className="post__header">Example post</h3>
        <section className="post__body">
          So here is a simple demo of{" "}
          <a href="https://github.com/chaldrak/vmsg">vmsg library</a>. Imagine
          this is a blog post or forum thread. Below you can leave text
          comments, as usual. But there is one more button: “Record”. If you
          press it vmsg library will open you a microphone recording form.
          Resulting record will automatically be encoded to MP3 so file won't
          weight too much. So you can easily share your voice messages even on
          mobile network and server needs to neither waste CPU time by encoding
          to MP3 by itself nor using a lot of disk space to store records.
        </section>
        <Comments />
      </article>
    );
  }
}

export default Post;
