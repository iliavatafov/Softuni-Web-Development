const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();

  return result.users;
};

export const getOne = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`);
  const result = await response.json();

  return result.user;
};

export const create = async (userData) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();
  return result.createdUser;
};

export const edit = async (userId, userData) => {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  return result.user;
};

export const del = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};
