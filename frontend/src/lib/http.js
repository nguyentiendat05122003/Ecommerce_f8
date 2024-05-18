import envConfig from "@/config";
import { normalizePath } from "@/lib/utils";

class HttpError extends Error {
  constructor({ status, payload }) {
    super("Http Error");
    this.status = status;
    this.payload = payload;
  }
}
class SessionToken {
  token = {
    accessToken: "",
    refreshToken: "",
  };
  set(token) {
    if (typeof window === undefined) {
      throw new Error("Can not set token on server side");
    }
    this.token = token;
    return this;
  }
}

export const clientSessionToken = new SessionToken();

const request = async (method = "GET", url, options = {}) => {
  const isFormData = options?.body instanceof FormData;
  const body = isFormData
    ? options.body
    : options?.body
    ? JSON.stringify(options.body)
    : undefined;
  const baseHeaders = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }), // Only set Content-Type if not FormData
  };
  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_ENDPOINT
      : options.baseUrl;
  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    body,
    method,
    credentials: "include",
  });
  const payload = await res.json();
  const data = {
    status: res.status,
    payload,
  };
  if (!res.ok) {
    throw new HttpError(data);
  }
  if (typeof window !== undefined) {
    if (
      ["users/login", "users/register"].some(
        (item) => item === normalizePath(url)
      )
    ) {
      clientSessionToken.set(payload.metadata.tokens);
      localStorage.setItem("sessionTokenExpiresAt", payload.metadata.expiresAt);
      localStorage.setItem("user", JSON.stringify(payload.metadata?.user));
    } else if ("users/logout" === normalizePath(url)) {
      clientSessionToken.set({});
      localStorage.removeItem("sessionTokenExpiresAt");
      localStorage.removeItem("user");
    }
  }
  return data.payload.metadata;
};

const http = {
  get(url, options) {
    return request("GET", url, { ...options });
  },
  post(url, body, options) {
    return request("POST", url, { ...options, body });
  },
  put(url, body, options) {
    return request("PUT", url, { ...options, body });
  },
  patch(url, body, options) {
    return request("PATCH", url, { ...options, body });
  },
  delete(url, body, options) {
    return request("DELETE", url, { ...options, body });
  },
};

export default http;
