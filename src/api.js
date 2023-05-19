import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// Function to handle the register API call
export const registerUser = async (userData) => {
  try {
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

// Function to handle GET request to /pizza
export const getPizzas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pizza`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    throw error;
  }
};

// Function to handle the logout API call
export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/logout`);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

//Function to add an item to the cart
export const addToCart = async (productId, quantity, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/cart`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
};

//Function to get cart items
export const getCartItems = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cart`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

//Function to remove an item from the cart
export const removeFromCart = async (productId, token) => {
  try {
    console.log(`${API_BASE_URL}/cart/${productId}`);
    const response = await axios.delete(`${API_BASE_URL}/cart/${productId}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    throw error;
  }
};

//Function to clear the entire cart
export const clearCart = async (token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};
