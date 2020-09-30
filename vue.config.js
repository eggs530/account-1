const path = require("path");//引入node.js模块

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons");  //__dir当前目录，讲解

    config.module //vue把webpack的api封装暴露给我们的对象
        .rule("svg-sprite")  //添加规则
        .test(/\.svg$/)  //匹配正则
        .include.add(dir)
        .end()              //匹配范围只包含dir中icons这个目录
        .use("svg-sprite-loader")    //选择使用的loader
        .loader("svg-sprite-loader")  //重复确定使用这个loader
        .options({ extract: false })   // 添加选项，不要解析出文件
        .end()

    config
        .plugin("svg-sprite")//配置插件
        .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 排除 icons 目录
  }
};