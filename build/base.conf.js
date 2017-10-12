module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ttf/,
                loader: 'file-loader',
                exclude: /node_modules/
            }
        ]
    }
};
