const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DATABASE_URL: "postgres://postgres:password@127.0.0.1:5432/alephin_dev",
        GOOGLE_ID:
          "260739877421-ulvsavv09o1mo9kh3k039ml2kbnvpfph.apps.googleusercontent.com",
        GOOGLE_SECRET: "lAUs3g7xY5WIPJ66vUacdS7d",
      },
    };
  }

  return {
    env: {
      DATABASE_URL: "postgres://postgres:password@127.0.0.1:5432/aleph_prod",
      GOOGLE_ID:
        "260739877421-ulvsavv09o1mo9kh3k039ml2kbnvpfph.apps.googleusercontent.com",
      GOOGLE_SECRET: "lAUs3g7xY5WIPJ66vUacdS7d",
      NEXTAUTH_URL: "",
    },
  };
};
