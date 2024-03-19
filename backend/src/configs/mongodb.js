import { env } from "./environment.js";
const dev = {
  app: {
    port: env.DEV_APP_PORT || 3000,
  },
  db: {
    host: env.DEV_DB_HOST || "127.0.0.1",
    port: env.DEV_DB_PORT || "27017",
    name: env.DEV_DB_NAME || "Ecommerce_dev",
  },
};

const pro = {
  app: {
    port: env.PRO_APP_PORT || 3000,
  },
  db: {
    host: env.PRO_DB_HOST || "127.0.0.1",
    port: env.PRO_DB_PORT || "27017",
    name: env.PRO_DB_NAME || "Ecommerce_pro",
  },
};

const config = { dev, pro };

export default config[env.NODE_ENV];
