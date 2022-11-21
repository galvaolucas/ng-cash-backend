export default {
    jwt: {
      secret_token: process.env.APP_SECRET as string,
      expires_in_token: '24h',
      secret_refresh_token: process.env.REFRESH_SECRET as string,
      expires_in_refresh_token: '30d',
      expires_refresh_token_days: 30,
    },
  };
  