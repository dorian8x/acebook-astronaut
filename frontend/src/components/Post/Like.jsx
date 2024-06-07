import { changeLike } from "../../services/posts";
import likedImage from "../../assets/filledheart.png";
import unlikedImage from "../../assets/heart.png"

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
      {!props.isLiked && <img className = "icon" src = {unlikedImage} onClick={likePost}/>}
      {props.isLiked && <img className = "icon" src = {likedImage} onClick={likePost}/>}
    </div>
  );
};

export default Like;
