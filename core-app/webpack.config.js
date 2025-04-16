const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/main.tsx",
    mode: "development",
    devServer: {
        port: 3001,
        static: path.join(__dirname, "dist"),
        hot: true,
        historyApiFallback: true
    },
    output: {
        publicPath: "auto",
        clean: true
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "core_app",
            remotes: {
                MusicLibrary:
                    "music_library@http://localhost:3002/remoteEntry.js"
            },
            shared: {
                "react": {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^18.2.0"
                },
                "react-dom": {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^18.2.0"
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
