module.exports = {
  env: {
    APISecret: process.env.APISECRET || 'API secret fallback',
    GIPSecret: process.env.GIPSECRET || 'GIP secret fallback'
  }
}
