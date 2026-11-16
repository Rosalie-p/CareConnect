
const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.detail || 'Login failed. Check your username and password.'
    );
  }

  return data;
};
