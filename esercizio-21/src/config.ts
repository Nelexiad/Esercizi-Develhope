const missingSetting = "missing value";

const config = {
  PORT: process.env.PORT || missingSetting,
  SESSION_SECRET: process.env.SESSION_SECRET || missingSetting,
};

export default config;
