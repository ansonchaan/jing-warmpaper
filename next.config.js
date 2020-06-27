// next.config.js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const language = ['en']
const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS(withSass({
    distDir: 'build',
    assetPrefix: isProd ? '/jing-warmpaper/' : '',
    exportTrailingSlash: isProd ? true : false,
    experimental: {
        basePath: isProd ? '/jing-warmpaper' : null
    },
    exportPathMap: async function (defaultPathMap,{ dev, dir, outDir, distDir, buildId }) {
        const pathMap = {};

        Object.entries(language).forEach(([key, lang]) => {
            Object.entries(defaultPathMap).forEach(([key, value]) => {
                pathMap[key.replace('[lang]',lang)] = { ...value }
            })
        })
        console.log(pathMap)
        return pathMap;
    },
    // webpack: (config, { dev }) => {
    //     // Perform customizations to webpack config
    //     // console.log('webpack');
    //     // console.log(config.module.rules, dev);
    //     config.module.rules = config.module.rules.map(rule => {
    //     if(rule.loader === 'babel-loader') {
    //         rule.options.cacheDirectory = false
    //     }
    //     return rule
    //     })
    //     // Important: return the modified config
    //     return config
    // }
}))