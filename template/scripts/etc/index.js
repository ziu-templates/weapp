/**
 * 项目编译配置文件
 */
const path = require('path');

function getPrjConfig({
                        UglifyJs = true,
                        codePath = path.resolve(process.cwd(), 'dist/release')
                      } = {}) {
  return {
    UglifyJs,
    codePath,
    pkgConfigName: 'project.config.json',
  };
}

module.exports = {
  rootSrc: "src",
  compileCssSuffix: 'scss',
  cssSuffix: 'wxss',
  xmlSuffix: 'wxml',
  eslintSuffix: '(js|wxs)',
  miniJsSuffix: 'wxs',
  globalObject: 'global',
  autoImportAppConfigPath: "src/outside",
  sourceMap: true,
  development: getPrjConfig({
    UglifyJs: false,
    codePath: path.resolve(process.cwd(), 'dist/dev'),
  }),
  testing: getPrjConfig({
    codePath: path.resolve(process.cwd(), 'dist/testing'),
  }),
  staging: getPrjConfig({
    codePath: path.resolve(process.cwd(), 'dist/staging'),
  }),
  production: getPrjConfig(),
  envList: {
    development: true,
    testing: true,
    staging: true,
    production: true,
  },
};