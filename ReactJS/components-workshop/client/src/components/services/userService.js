const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const request = await fetch(baseUrl);
  const response = await request.json();

  return response.users;
};

export const getOne = async (id) => {
  const request = await fetch(`${baseUrl}/${id}`);
  const response = await request.json();

  return response;
};
