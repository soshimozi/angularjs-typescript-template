/**
 * Created by Monkey on 10/7/2017.
 */
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import webpackConfig from '../webpack.config.babel'
import open from 'open'


const port = 3000;
const app = express();
const config = webpackConfig({development: true});
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:3000');
    }
});
