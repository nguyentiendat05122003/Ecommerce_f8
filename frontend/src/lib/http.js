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
    // Nếu gọi method này ở server
    if (typeof window === undefined) {
      throw new Error("Can not set token on server side");
    }
    this.token = token;
    return this;
  }
}

export const clientSessionToken = new SessionToken();
const request = async (method = "GET", url, options = {}) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined;
  const baseHeaders = {
    "Content-Type": "application/json",
    access_token: clientSessionToken.token.accessToken
      ? `Bearer ${clientSessionToken.token.accessToken}`
      : "",
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
  // equal interceptor
  //Đảm bảo logic dưới chỉ chạy ở browser
  if (typeof window !== undefined) {
    if (
      ["users/login", "users/register"].some(
        (item) => item === normalizePath(url)
      )
    ) {
      clientSessionToken.set(payload.metadata.tokens);
    } else if ("users/logout" === normalizePath(url)) {
      clientSessionToken.set("");
    }
  }
  return data;
};

const http = {
  get(url, options) {
    return request("GET", url, options);
  },
  post(url, body, options) {
    return request("POST", url, { ...options, body });
  },
  put(url, body, options) {
    return request("PUT", url, { ...options, body });
  },
  delete(url, body, options) {
    return request("DELETE", url, { ...options, body });
  },
};

export default http;
