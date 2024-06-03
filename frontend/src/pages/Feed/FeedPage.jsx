import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPosts } from "../../services/posts";
import Post from "../../components/Post/Post";
import MakePost from "../../components/Post/MakePost";


export const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        
        const postData = await getPosts(token);
        setPosts(postData.posts);
        localStorage.setItem("token", postData.token);
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchPosts();
  }, [navigate, flag]);

  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
  console.log("userId:", userId);

  return (
    <>
      <MakePost value={flag} update={setFlag} />
      <h2>Posts</h2>
      <div className="feed" role="feed">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
  <Link to={`/profile/${userId}`}>View Profile</Link>
    </>
  );
};
