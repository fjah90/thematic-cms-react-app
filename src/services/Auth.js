import axios from 'axios';

import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { setAuthToken } from '../redux/actions/authActions'; // Import setAuthToken action from Redux

const API_URL = __API_URL__;

export async function login(username, password) {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { username, password });

        // Check for successful login response (modify based on your API)
        if (!response.data.success) {
            throw new Error('Login failed: ' + response.data.message); // Or handle specific error messages
        }

        // Extract and store the token from login response (modify based on your API)
        const token = response.data.token; // Assuming token is stored in 'token' property
        storeToken(token);

        return response.data; // Return login response (optional)
    } catch (error) {
        console.error('Error logging in:', error);
        throw error; // Or handle the error appropriately (e.g., display error message to user)
    }
}

export async function logout() {
    try {
        // Remove token from local storage
        localStorage.removeItem('auth_token');

        // Remove token from Redux (assuming you have Redux setup)
        const dispatch = useDispatch();
        dispatch(setAuthToken(null)); // Set token to null in Redux store

        // Optionally, perform any additional logout tasks (e.g., redirect to login page)
        redirect('/login');

        return { success: true }; // Return a success response (you may adjust this based on your needs)
    } catch (error) {
        console.error('Error logging out:', error);
        return { success: false, error: error.message }; // Return an error response
    }
}


export async function register(userData) {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);

        // Check for successful registration response (modify based on your API)
        if (!response.data.success) {
            throw new Error('Registration failed: ' + response.data.message); // Or handle specific error messages
        }

        // Extract and store the token from login response (modify based on your API)
        const token = loginResponse.data.token; // Assuming token is stored in 'token' property
        storeToken(token); // Call a function to store the token (implementation details below)

        return response.data; // Return registration response (optional)
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Or handle the error appropriately (e.g., display error message to user)
    }
}

function storeToken(token) {
    // Store token in local storage
    localStorage.setItem('auth_token', token);

    // Store token in Redux
    const dispatch = useDispatch();
    dispatch(setAuthToken(token)); // Dispatch the setAuthToken action with the token
}
