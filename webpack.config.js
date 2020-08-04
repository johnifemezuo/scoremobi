const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path")
module.exports = {
    entry: {
        css: ['./sass/style.scss'],
        bundle: ['./src/index.js'],
    }
    ,
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // Extracts the compiled CSS from the SASS files defined in the entry
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        // Interprets CSS
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader' // 将 Sass 编译成 CSS
                    }
                ]
            }
        ],
    },
    plugins: [
        // Where the compiled SASS is saved to
        new MiniCssExtractPlugin({
            filename: 'index.css',
            allChunks: true,
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            })
        ]
    },
    mode: "development"
};







































// const path = require("path");

// module.exports = {
//     entry: `${__dirname}/src/index.js`,
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "bundle.js"
//       },

//       mode : 'developement',
//       module : {
//         rules: [
//             {
//               test: /\.js$/,
//               exclude: /(node_modules)/,
//               use: {
//                 loader: 'babel-loader',
//                 options: {
//                   presets: ['@babel/preset-env']
//                 }
//               }
//             },
//             {
//                 // Apply rule for .sass, .scss or .css files
//                 test: /\.(sa|sc|c)ss$/,

//                 // Set loaders to transform files.
//                 // Loaders are applying from right to left(!)
//                 // The first loader will be applied after others
//                 use: [
//                        {
//                          // This loader resolves url() and @imports inside CSS
//                          loader: "css-loader",
//                        },
//                        {
//                          // Then we apply postCSS fixes like autoprefixer and minifying
//                          loader: "postcss-loader"
//                        },
//                        {
//                          // First we transform SASS to standard CSS
//                          loader: "sass-loader",
//                          options: {
//                            implementation: require("sass")
//                          }
//                        }
//                      ]
//               }
//         ]
//       }
// }































