'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-simple-react:app', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'test-project',
        description: 'What an app!',
        author: 'Some One',
        appTitle: 'Test'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.npmrc',
      'package.json',
      'README.md',
      'webpack.config.js',
      'www/index.html',
      'src/index.jsx',
      'src/app.jsx',
      'src/home/HomePage.jsx',
      'src/home/HomePage.spec.js'
    ]);
  });
});
