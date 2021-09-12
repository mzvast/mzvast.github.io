/**
 * @file: undefined
 * @author: hucijiao(hucijiao@baidu.com)
 * @date: 2019-08-20 19:50:47
 * @Last Modified by: hucijiao(hucijiao@baidu.com)
 */

const path = require('path');
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addBabelPresets,
    useEslintRc,
    addPostcssPlugins,
    addWebpackPlugin,
    overrideDevServer,
    watchAll
} = require('customize-cra');


module.exports = {
    webpack: override(
        addLessLoader({
            options: {
                javascriptEnabled: true,
                // sourceMap: true, // should skip in production
                // importLoaders: true,
                localIdentName: '[local]--[hash:base64:5]',
                modifyVars: {}
            }
        })
        //  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
        //  watchAll()
        // addWebpackPlugin((config)=>{
        //     // config.watchOptions = {}
        //     console.log(Object.keys(config));
        //     throw new Error('');
        // })
        // dropConsole(),
        // useEslintRc(path.resolve(__dirname, './.eslintrc.js'))
        // consoleConfig()
    )
    //      devServer: overrideDevServer(
    // 	 // dev server plugin
    // 	 watchAll()
    //      )
};
