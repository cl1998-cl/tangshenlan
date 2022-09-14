const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ],
        },
    },
   
    lintOnSave: false
}
