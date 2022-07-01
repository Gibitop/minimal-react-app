const reactRefreshPlugin = require('react-refresh/babel')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        isDev && reactRefreshPlugin,
    ].filter(p => p),
}