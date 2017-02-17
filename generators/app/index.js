'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
    this.log(yosay(
      'Welcome to the ' + chalk.green('simple-react') + ' generator!'
    ));

    let prompts = [{
      type: String,
      name: 'projectName',
      message: 'What will your project be called?',
      default: 'simple-react'
    }, {
      type: String,
      name: 'appTitle',
      message: 'What is the title of your application?',
      default: 'Not Sure Yet'
    }, {
      type: String,
      name: 'description',
      message: 'Brief description of the project.',
      default: 'This will be great!'
    }, {
      type: String,
      name: 'author',
      message: 'Name of the author.',
      default: 'Dr Who'
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.props.projectName,
        description: this.props.description,
        author: this.props.author
      }
    );

    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('gitattributes'),
      this.destinationPath('.gitattributes')
    );

    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('npmrc'),
      this.destinationPath('.npmrc')
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        appTitle: this.props.appTitle,
        description: this.props.description
      }
    );

    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copyTpl(
      this.templatePath('www/_index.html'),
      this.destinationPath('www/index.html'),
      {
        appTitle: this.props.appTitle
      }
    );

    this.fs.copy(
      this.templatePath('src/index.jsx'),
      this.destinationPath('src/index.jsx')
    );

    this.fs.copy(
      this.templatePath('src/app.jsx'),
      this.destinationPath('src/app.jsx')
    );

    this.fs.copy(
      this.templatePath('src/home/HomePage.jsx'),
      this.destinationPath('src/home/HomePage.jsx')
    );

    this.fs.copy(
      this.templatePath('src/home/HomePage.spec.js'),
      this.destinationPath('src/home/HomePage.spec.js')
    );
  }

};
