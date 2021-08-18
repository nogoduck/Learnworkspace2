import path from "path";
// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const isDevelopment = process.env.NODE_ENV !== "production";




const config: webpack.Configuration = {
    name: "front",
    mode: isDevelopment ? "development" : "production",
    devtool: !isDevelopment ? "hidden-source-map" : "eval",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            // '../../' 대신 절대경로를 가질 수 있다.
            //자바스크립트로 바꿔주는 웹펙은 아래 경로를 보고 바꾼다
            "@null": path.resolve(__dirname, "null"),
            "@null2": path.resolve(__dirname, "null2"),
        },
    },
    entry: {
        app: "./client",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: { browsers: ["last 2 chrome versions"] },
                                debug: isDevelopment,
                            },
                        ],
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ],
                    env: {
                        development: {
                            // plugins: [["@emotion", { sourceMap: true }], require.resolve("react-refresh/babel")],
                        },
                        production: {
                            plugins: ["@emotion"],
                        },
                    },
                },
                exclude: path.join(__dirname, "node_modules"),
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        // new ForkTsCheckerWebpackPlugin({
        //   async: false,
        //   // eslint: {
        //   //   files: "./src/**/*",
        //   // },
        // }),
        new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? "development" : "production" }),
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/dist/",
    },
    // devServer: {
    //   historyApiFallback: true, // react router
    //   port: 3090,
    //   publicPath: "/dist/",
    //   proxy: {
    //     "/api/": {
    //       target: "http://localhost:3095",
    //       changeOrigin: true,
    //     },
    //   },
    // },
};

if (isDevelopment && config.plugins) {
    // config.plugins.push(new webpack.HotModuleReplacementPlugin());
    // config.plugins.push(new ReactRefreshWebpackPlugin());
    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "server", openAnalyzer: true }));
}
if (!isDevelopment && config.plugins) {
    // config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
}

export default config;