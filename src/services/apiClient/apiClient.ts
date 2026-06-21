/* 
 Api client
*/
const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T | undefined> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP status ${response.status}`);
  }

  // for POST and other responses
  if (
    response.headers.get("content-length") === "0" ||
    response.status === 204
  ) {
    return undefined as T;
  }

  const responseJson = await response.json();
  return responseJson;
};

export const apiClient = {
  get: <T>(url: string, signal?: AbortSignal) => request<T>(url, { signal }),
  multipartPost: <T>(url: string, body: FormData, signal?: AbortSignal) =>
    request<T>(url, {
      method: "POST",
      body,
      signal,
    }),
  post: <T>(url: string, body: unknown, signal?: AbortSignal) =>
    request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
      signal,
      headers: { "Content-Type": "application/json" },
    }),

  patch: <T>(url: string, body: unknown, signal?: AbortSignal) =>
    request<T>(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      signal,
      headers: { "Content-Type": "application/json" },
    }),
  delete: (url: string, signal?: AbortSignal) =>
    request(url, {
      method: "DELETE",
      signal,
    }),
};
