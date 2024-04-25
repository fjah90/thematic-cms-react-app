import axios from 'axios';

const API_URL = __API_URL__; // Default fallback if not set

export async function fetchUsers() {
    const response = await axios.get(`${API_URL}/auth/users`);
    console.log(response.data);
    const users = response.data.data.map((userData) => {
        // Process and format user data here
        console.log(userData)
        return {
            id: userData.id,
            name: userData.name,
            username: userData.username,
            email: userData.email,
            userType: userData.userType,
            // ... other processed data
        };
    });
    return users;
}

export async function getUserById(userId) {
    try {
        const response = await axios.get(`${API_URL}/auth/users/${userId}`);
        return response.data; // Assuming the API returns the user data
    } catch (error) {
        console.error('Error fetching user:', error);
        if (error.response && error.response.status === 404) {
            // Handle the case where the user is not found (404 Not Found)
            return null; // Or return an appropriate error object or message
        } else {
            throw error; // Or handle the error appropriately
        }
    }
}


export async function updateUser(userId, updateData) {
    try {
        const response = await axios.put(`${API_URL}/auth/users/${userId}`, updateData);
        return response.data; // Assuming the API returns the updated user data
    } catch (error) {
        console.error('Error updating user:', error);
        throw error; // Or handle the error appropriately
    }
}

export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`${API_URL}/auth/users/${userId}`);
    return response.data; // Assuming the API returns a success message or status code
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error; // Or handle the error appropriately
  }
}
