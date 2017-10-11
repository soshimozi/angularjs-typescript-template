/**
 * Created by Monkey on 8/20/2017.
 */
const path = require('path');
const webpack = require('webpack');


export default function(env, argv) {

    return {
        context: path.join(__dirname, 'src'),
        entry: './app.ts',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.less', '.html']
        },
        module: {
            loaders: [
                {test: /\.ts$/, loader: 'ts-loader'},
                {test: /\.html$/, loaders: ['html-loader']},
                {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
                {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
            ]
        }
    };
};
