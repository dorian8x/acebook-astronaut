// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const getUserProfile = async (userId, token) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`}
    };
  
    const response = await fetch(`${BACKEND_URL}/users/profile/${userId}`, requestOptions);
  
    if (!response.ok) {
      throw new Error('Unable to fetch user profile');
    }
  
    const data = await response.json();
    return data.user;
  };
  
  
  export const updateUserProfile = async (email, password, firstName, lastName, bio, userId) => {
    const payload = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      bio: bio
    };

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
  
    const response = await fetch(`${BACKEND_URL}/users/profile/${userId}`, requestOptions);
  
    if (!response.ok) {
      throw new Error('Unable to update user profile');
    }
  };
  
