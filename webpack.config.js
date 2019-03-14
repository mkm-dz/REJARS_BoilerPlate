const TerserJSPlugin = require('terser-webpack-plugin')

const config = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
                use: [
                    'file-loader'
                ]
            },
            // Copies index.html to dist folder witht the same name. It is needed that entry point requires
            // index.html so this rule can be triggered:
            // e.g require('../index.html');
            { test: /index\.html/, loader: 'file-loader', query: { name: '[name].[ext]' } }
        ]
    },
    plugins: [
        new TerserJSPlugin({
            parallel: true,
            sourceMap: false
        })
    ],
};


// Check if build is running in production mode,
// this works with a vs code task that calls this like this:
//  "-d source-map"
if (process.argv[2] === "-d source-map") {
    console.log("**** Development mode activated ****");
    // Enable sourcemaps for debugging webpack's output.
    config.devtool = "source-map";
    config.mode = "development";

    // We dont want development code to be uglified, so we overwrite that array.
    config.plugins = []
}
else {
    console.log("**** Production mode activated ****");
}

module.exports = config;