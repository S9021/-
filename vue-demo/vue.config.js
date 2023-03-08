const { defineConfig } = require('@vue/cli-service')
module.exports = {
    lintOnSave: false,
    devServer: {
        open: false,
        proxy: {
            '/api': {
                target: 'http://1.116.64.64:5004/api2/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}