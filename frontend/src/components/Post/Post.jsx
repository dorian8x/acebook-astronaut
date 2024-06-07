import ShowComments from "../Comment/ShowComments";
import CommentButton from "../Comment/CommentButton";
import Like from "./Like";
import { useState, useEffect } from "react";
import { getUserById } from "../../services/users";

const Post = (props) => {
  const user_id = localStorage.getItem("user_id");
  const [author, setAuthor] = useState("");
  const [isLiked, setLiked] = useState(props.post.like_array.includes(user_id));
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserById(token, props.post.author_id)
      .then((data) => {setAuthor(data.user.fullName)} );
  }, []);

  const divStyle = {
    textAlign: 'left',
    backgroundColor: 'white',
    padding: '10px'
  }

  return (
    <div style={divStyle}>
      <article>
        {console.log("props is:", props)}
        <span className = "post">
          <span className  = "author">{author}  </span>
          {props.post.message}
        </span>
        <p>Likes: {props.post.like_array.length}</p>
        <Like post={props.post} value={isLiked} update={setLiked}/>
        <CommentButton parent={props.post._id} /*value={props.value} update={props.update}*/ />
        <ShowComments parent={props.post._id} /*value={props.value} update={props.update}*/ />
      </article>
    </div>
  );
};

export default Post;
