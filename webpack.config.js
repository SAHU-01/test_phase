const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: '/src/index.tsx',
        'pdf.worker': path.join(__dirname, '/node_modules/pdfjs-dist/build/pdf.worker.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /^pdfjs-dist$/,
            resource => {
                resource.request = path.join(__dirname, '/node_modules/pdfjs-dist/webpack.js');
            },
        ),
        
    ],
};