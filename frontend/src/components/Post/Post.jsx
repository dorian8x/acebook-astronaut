import CommentButton from "../Comment/CommentButton";
import Like from "./Like";
import { useState, useEffect } from "react";
import { getUserById } from "../../services/users";

const Post = (props) => {
  const user_id = localStorage.getItem("user_id");
  const [author, setAuthor] = useState("");
  const [isLiked, setLiked] = useState(props.post.like_array.includes(user_id));
  const [likesCount, setLikesCount] = useState(props.post.like_array.length);
  const [comments, setComments] = useState(props.comments)

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserById(token, props.post.author_id)
      .then((data) => {
        setAuthor(data.user.fullName);
        setComments(comments.reverse());
      } );
  }, []);

  const divStyle = {
    textAlign: 'left',
    backgroundColor: 'white',
    padding: '10px'
  }

  return (
    <article style = {divStyle}>
      <span className = "post">
          <span className  = "author">{author} </span>
          {props.post.message}
        </span>
        
        <span className = "likesContainer">
          <Like post={props.post}
          isLiked={isLiked}
          setLiked={setLiked}
          likesCount={likesCount}
          setLikesCount={setLikesCount}/>
          {likesCount}</span>
          {!props.post.parent && <CommentButton parent={props.post._id} comments={comments} setComments={setComments} />}
        
        <div className="feed" role="feed">
        {comments.map((post) => (
          <Post
            post={post}
            key={post._id}
            comments={comments.filter((item) => item.parent == post._id)}
          />
        ))}
      </div>

    </article>
  );
};

export default Post;
