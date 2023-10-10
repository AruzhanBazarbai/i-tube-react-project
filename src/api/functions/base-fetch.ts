export const baseFetchAsync = async (
  url: string,
  method: "POST" | "PUT" | "DELETE" | "GET",
  body?: string,
  token?: string,
): Promise<any> => {
  try {
    console.log(process.env.REACT_APP_API_URL);
    const response = await fetch(process.env.REACT_APP_API_URL + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        "Accept-Language": "en",
      },
      method,
      body,
    });
    return response.json();
  } catch (e) {
    return console.error(e);
  }
};
