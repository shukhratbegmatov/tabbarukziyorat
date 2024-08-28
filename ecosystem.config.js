module.exports = {
  apps: [
    {
      name: 'web-tabarruk-ziyorat',
      port: 3044,
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs'
    },
  ],
}
