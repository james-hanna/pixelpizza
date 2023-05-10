import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// Function to handle the register API call
export const registerUser = async (userData) => {
  try {
    console.log("api route being called", `${API_BASE_URL}/users/register`);
    const response = await axios.post(
      `${API_BASE_URL}/users/register`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Function to handle the login API call
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Testing Connection to the backend
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/test`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const data = await response;
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
