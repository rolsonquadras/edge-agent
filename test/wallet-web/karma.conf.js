/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],
        files: [
            {pattern: "public/agent-js-worker/assets/*", included: false},
            {pattern: "test/common.js", included: false},
            {pattern: "test/**/*.spec.js", type: "module"}
        ],
        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['spec'],
        browsers: ['ChromeHeadless_cors'],
        customLaunchers: {
            ChromeHeadless_cors: {
                base: "ChromeHeadless",
                flags: ["--disable-web-security", "--allow-running-insecure-content", "--ignore-certificate-errors",
                    "--ignore-certificate-errors-spki-list", "--ignore-urlfetcher-cert-requests"]
            },
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security', '--disable-site-isolation-trials', '--auto-open-devtools-for-tabs']
            }
        },
        client: {
            captureConsole: true,
            mocha: {
                timeout: 60000
            }
        }
    })
}
