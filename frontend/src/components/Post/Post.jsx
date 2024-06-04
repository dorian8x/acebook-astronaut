import Like from "./Like";

const Post = (props) => {
  return (
    <article key={props.post._id}>
      {props.post.message}    Likes: {props.post.like_array.length}
      <Like post={props.post} value={props.value} update={props.update}/>
      <p>Posted by: {props.post.email}</p> 
    </article>
  );
};

export default Post;
