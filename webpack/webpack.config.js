const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'] // resolve 사용 시 확장자 생략 가능, 상위 폴더만 가져와도 됨
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'] // browserslist
            }
        }]
    },
    plugins: [

    ],
    output: {
        path: path.join(__dirname, 'dist'), // __dirname 은 현재 폴더 경로의 dist 폴더를 지칭
        filename: 'app.js'
    } // 출력
}