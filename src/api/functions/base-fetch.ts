export const baseFetchAsync = async (
  url: string,
  method: "POST" | "PUT" | "DELETE" | "GET",
  body?: string,
  token?: string,
): Promise<any> => {
  try {
    const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      "Accept-Language": "en",
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(url, {
      headers,
      method,
      body,
      mode: "no-cors",
    });
    // console.log(response);
    return response.json();
  } catch (e) {
    return console.error(e);
  }
};
