// next.config.js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const language = ['en', 'tc']
const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS(withSass({
    distDir: 'build',
    assetPrefix: isProd ? '/warmpaper' : null,
    exportTrailingSlash: isProd ? true : false,
    experimental: {
        basePath: isProd ? '/warmpaper' : null
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
    }
}))