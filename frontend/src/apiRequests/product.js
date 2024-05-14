const { default: http } = require("@/lib/http");
const { headers } = require("next/headers");

// cookie chỉ lấy được ở router handler hoặc page component
const ProductApiRequest = {
  getAllProducts: (sessionToken) =>
    http.get(
      "/products",
      (headers = {
        Authorization: `Bearer ${sessionToken}`,
      })
    ),
};
