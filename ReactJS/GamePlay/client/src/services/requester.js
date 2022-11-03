export const request = async (method, url, data) => {
  try {
    const authData = localStorage.getItem("auth");
    const auth = JSON.parse(authData || `{}`);

    const headers = {};

    if (auth.accessToken) {
      headers["X-Authorization"] = auth.accessToken;
    }

    let buildRequest;

    if (method === "GET") {
      buildRequest = fetch(url, { headers });
    } else {
      buildRequest = fetch(url, {
        method,
        headers: {
          ...headers,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    const response = await buildRequest;

    const result = await response.json();

    return result;
  } catch (error) {
    window.alert(error);
  }
};

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const put = request.bind({}, "PUT");
export const patch = request.bind({}, "PATCH");
export const del = request.bind({}, "DELETE");
