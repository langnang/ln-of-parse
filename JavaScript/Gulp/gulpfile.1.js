const gulp = require("gulp");
// 自动加载插件
const $ = require("gulp-load-plugins")();
// 删除文件插件
$.del = require("del");
// 重命名插件
$.rename = require("gulp-rename");
// js文件压缩插件
$.uglify = require("gulp-uglify");
// scss编译成css
$.sass = require("gulp-sass");
// 文件合并插件
$.concat = require("gulp-concat");
// css压缩插件
$.minifyCSS = require("gulp-minify-css");
// 优化图像大小
$.imagemin = require("gulp-imagemin");
/**
 * CSS 处理块
 */
{
    // 清理assets/css文件夹
    gulp.task("clean-assets-css", () => {
        return $.del("./assets/css/")
    })
    // 清理dist/css文件夹
    gulp.task("clean-dist-css", () => {
        return $.del("./dist/css/")
    })
    // sass编译成css
    gulp.task("sass-to-css", gulp.series("clean-assets-css", () => {
        return gulp.src("./assets/sass/**/*.scss")// sass 文件夹及其子文件夹下所有scss格式文件
            .pipe($.sass())// 将所有scss全部编译成对应css
            .pipe(gulp.dest("./assets/css/"))// 输出到css文件夹

    }))
    // 所有css合并,合并只是将所有文件内容放在一起，压缩才是真正的合并相同样式
    gulp.task("css-to-one", gulp.series("clean-dist-css", 'sass-to-css', () => {
        return gulp.src("./assets/css/**/*.css")// css 文件夹及其子文件夹下所有css格式文件
            .pipe($.concat("ts.css"))// 合并所有css文件内容到ts.css
            .pipe(gulp.dest("./dist/css/"))// 输出到css文件夹
    }))
    // 压缩css 并重命名
    gulp.task("css-to-min", gulp.series("css-to-one", () => {
        return gulp.src("./dist/css/ts.css")// ts.css
            .pipe($.minifyCSS())// 压缩
            .pipe($.rename({ suffix: '.min' }))// 重命名添加.min后缀
            .pipe(gulp.dest("./dist/css/"))// 输出到css文件夹
    }))
    // sass编译并合并成css
    gulp.task("css", gulp.series("css-to-min"));
    // gulp.task("css",()=>{
    //     return gulp.src("./assets/sass/**/*.scss")
    //     .pipe($.sass())
    //     .pipe($.concat("ts.css"))
    //     .pipe(gulp.dest("./dist/css/"))
    // })
    // sass编译并压缩成css
    // gulp.task("sass", () => {
    //     return gulp.src("./assets/sass/**/*.scss")
    //         .pipe($.sass())
    //         .pipe($.concat("ts.css"))
    //         .pipe($.minifyCSS())
    //         .pipe($.rename({ suffix: '.min' }))
    //         .pipe(gulp.dest("./dist/css/"))
    // })
}
/**
 * JavaScript 处理块
 */
{
    // 清理dist/js文件夹
    gulp.task("clean-dist-js", () => {
        return $.del("./dist/js/")
    })
    // 压缩js 并重命名
    gulp.task("js-to-min", gulp.series("clean-dist-js", () => {
        return gulp.src("./assets/js/**/*.js")
            .pipe($.uglify())
            .pipe($.rename({ suffix: ".min" }))
            .pipe(gulp.dest("./dist/js/"));
    }))
    // js压缩
    gulp.task("js", gulp.series("js-to-min"))
}
/**
 * Image 处理块
 */
{
    // 清理dist/img文件夹
    gulp.task("clean-dist-img", () => {
        return $.del("./dist/img/")
    })
    // 优化img图像
    gulp.task("img-to-min", gulp.series("clean-dist-img", () => {
        return gulp.src("./assets/img/*.{jpg,png,JPG,PNG}")
        .pipe($.imagemin())
        .pipe(gulp.dest("./dist/img"))
    }))
    // img 优化
    gulp.task("img", gulp.series("img-to-min"))
}
/**
 * 其它 处理块
 */
{
    // Hello World:hello
    gulp.task("hello", () => {
        console.log("Hello World")
    })
    // 文件重命名:rename
    gulp.task("rename", () => {
        return gulp.src("")
    })
}

/**
 * 监听 处理块
 */
{
    // watch html
    gulp.task("watch-html", () => {
    })
    // watch ./assets/sass/**/*==>编译合并成css
    gulp.task("watch-css", () => {
        gulp.watch("./assets/sass/**/*.scss", gulp.series("css"));
    })
    // watch js
    gulp.task("watch-js", () => {
        gulp.watch("./assets/js/**/*.js", gulp.series("js"));
    })
    // watch img
    gulp.task("watch-img", () => {
        gulp.watch("./assets/img/**/*.{jpg,png,JPG,PNG}", gulp.series("img"));

    })
}


/**
 * 默认 执行处理块
 */
{
    gulp.task("default", gulp.parallel("watch-css","watch-js","watch-img"))
}
