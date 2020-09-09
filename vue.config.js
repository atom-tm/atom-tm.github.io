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
                    postProcess(route) {
                        route.html = route.html
                            .replace(/<script (.*?)>/g, '<script $1 defer>')
                            .replace('id="app"', 'id="app" data-server-rendered="true"');
                        return route;
                    },
                    renderer: new Renderer({
                        inject: { },
                        headless: true,
                        renderAfterDocumentEvent: 'render-event',
                        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
                    })
                }),
            ]
        }
    }
}
