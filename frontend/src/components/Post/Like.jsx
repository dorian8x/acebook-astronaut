import { changeLike } from "../../services/posts";

const Like = (props) => {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  // let liked = props.post.like_array.includes(user_id);

  const likePost = () => {
    changeLike(token, props.post._id, user_id, !props.isLiked)
    .catch((err) => {console.error(err)});
    if (props.isLiked) {
      props.setLikesCount(props.likesCount - 1)
      // props.setLiked(!props.isLiked);
    } else {
      props.setLikesCount(props.likesCount + 1)
      // props.setLiked(!props.isLiked);
    }
    props.setLiked(!props.isLiked);
  };

  return (
    <div>
      {!props.isLiked && <button onClick={likePost}>Like</button>}
      {props.isLiked && <button onClick={likePost}>Unlike</button>}
    </div>
  );
};

export default Like;
