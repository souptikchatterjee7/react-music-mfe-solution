const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/main.tsx",
    mode: "development",
    devServer: {
        port: 3002,
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
            name: "music_library",
            filename: "remoteEntry.js",
            exposes: {
                "./MusicLibraryApp": "./src/App"
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
  "react-dom": { singleton: true, eager: true, requiredVersion: "^18.2.0" },
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
