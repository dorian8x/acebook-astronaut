import CommentButton from "../Comment/Comment";
import Like from "./Like";

const Post = (props) => {
  return (
    <article key={props.post._id}>
      {props.post.message}    Likes: {props.post.like_array.length}
      <Like post={props.post} value={props.value} update={props.update}/>
      <CommentButton parent={props.post._id} value={props.value} update={props.update} />
    </article>
  );
};

export default Post;
