/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://storedb_owner:wlXYyvu9F7ZE@ep-dawn-bird-a5bfulr0.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
