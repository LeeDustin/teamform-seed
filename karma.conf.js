'use strict';

module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            'src/test.webpack.js',
        ],
        exclude: [],
        preprocessors: {
            'src/test.webpack.js': ['webpack', 'eslint', 'sourcemap']
        },
        webpack: require('./webpack.config.js'),
        reporters: ['progress', 'coverage', 'coveralls'],
        coverageReporter: {
            dir: 'coverage/',
            reporters: [{
                type: 'html',
                subdir: '.'
            }, {
                type: 'lcov',
                subdir: '.'
            }]
        },
        port: 9876,
        colors: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-eslint',
            'karma-coveralls'
        ],
        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    });
};
