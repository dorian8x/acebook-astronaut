
import { useParams } from 'react-router-dom'; 
import Profile from "../../components/Profile/Profile"; 

export const ProfilePage = () => {
  const { userId } = useParams(); 

  return (
    <div>
      <h1>Profile Page</h1>
      <Profile userId={userId} />
    </div>
  );
};

export default ProfilePage;
