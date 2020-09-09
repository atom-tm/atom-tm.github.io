const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    css: {
        requireModuleExtension: true
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                // new CompressionPlugin(),
                new PrerenderSpaPlugin({
                    staticDir: path.resolve(__dirname, 'dist'),
                    routes: [ '/' ],
                    renderer: new Renderer({
                        headless: true,
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ]
        }
    }
}
