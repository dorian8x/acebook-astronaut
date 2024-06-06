import ShowComments from "../Comment/ShowComments";
import CommentButton from "../Comment/CommentButton";
import Like from "./Like";
import { useState, useEffect } from "react";
import { getUserById } from "../../services/users";

const Post = (props) => {
  const user_id = localStorage.getItem("user_id");
  const [author, setAuthor] = useState("");
  const [isLiked, setLiked] = useState(props.post.like_array.includes(user_id));
  const [likesCount, setLikesCount] = useState(props.post.like_array.length);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserById(token, props.post.author_id)
      .then((data) => {setAuthor(data.user.fullName)} );
  }, []);

  return (
    <article>
      {props.post.message}    Likes: {likesCount} Posted by: {author}
      <Like post={props.post}
        isLiked={isLiked}
        setLiked={setLiked}
        likesCount={likesCount}
        setLikesCount={setLikesCount}
      />
      <CommentButton parent={props.post._id} />
      <ShowComments parent={props.post._id} />
    </article>
  );
};

export default Post;
