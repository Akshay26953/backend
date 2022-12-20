module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.PLUGIN_HOOK,
      apiToken: process.env.PLUGIN_API_TOKEN,
      appFilter: process.env.PLUGIN_APP_FILTER,
      teamFilter: process.env.PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});