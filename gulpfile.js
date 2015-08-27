// Copyright (C) 2015 Minted Inc.
// All Rights Reserved

'use strict';

var gulp = require('gulp');

//frontend-build-system configuration options
var options = {
  // this is the port that your live-reload development server will run on (eg. localhost:5001)
  server_port: 7000,
  // this is the browser that all gulp tasks will automatically open urls in (live-reload server, test report)
  develop_browser: '/Applications/Google\ Chrome\ Canary.app',
  // source files (JS minimatch globs: https://github.com/isaacs/minimatch)
  // cannot have rules that exclude the node_modules folder
  paths: {
    src: {
      html: ['./public/*.html'],
      js: ['./src/**/!(*.tests)*.{js,jsx}'],
      sass: [
        './src/**/!(_*)*.scss',
      ]
    },
    // javascript unit tests
    tests: ['./src/**/*.tests.{js,jsx}'],
    // tests: ['./src/main.tests.jsx'],
    // main file loaded by live-reload server. It must be an 'index.html' file
    server_entry: './public/index.html',
    // entry js file for webpack bundling
    webpack_entry: './app.jsx',
    build: {
      // compiled js file from webpack bundling
      js: './public/bundle.js',
      // compiled css file from sass compilation
      css: './public/style.css'
    }
  }
};

var tasks = require('frontend-build-system')(options);

gulp.task('develop', tasks.develop);
gulp.task('clean', tasks.clean);
gulp.task('lint', tasks.lint);
gulp.task('unittests', tasks.unittests);
gulp.task('coverage', tasks.coverage);
gulp.task('test', ['lint', 'unittests']);
