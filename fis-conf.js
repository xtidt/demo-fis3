//es6编译 代码编译产出时，后缀改成 .js
fis.match('*.es6', {
    parser: fis.plugin('babel'),
    rExt: '.js'
});

fis.match('*', {
    useHash: false
});

fis.hook('commonjs', {
  // 配置项
  paths: {
    $: '/static/lib/jquery-1.11.3.min.js'
  }
});

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        allInOne: false
    })
});

//js模块化 commonJs
fis.match('/static/*.js', {
    isMod: true
})

//less
fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
})

fis.match('/static/*.{css,less}', {
    packTo: '/release/css/aio.css'
});

fis.match('/static/*.js', {
    packTo: '/release/js/aio.js'
})
