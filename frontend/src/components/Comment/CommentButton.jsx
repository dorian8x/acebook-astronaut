import MakePost from "../Post/MakePost";
import { useState } from "react";

import commentImage from "../../assets/comment.png"

const CommentButton = (props) => {
    const [addComment, setAddComment] = useState(false);

    const showCommentBox = () => {
        setAddComment(!addComment);
    };

    return (
        <div id="comment-button" className="commentContainer">
            {!addComment && <img className = "icon" src={commentImage} onClick={showCommentBox}/>}
            {addComment && <img className = "icon" src={commentImage} onClick={showCommentBox}/>}
            {addComment && <MakePost parent={props.parent} value={props.comments} update={props.setComments} />}
        </div>
    );
};

export default CommentButton;
