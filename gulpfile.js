var gulp = require("gulp");
var ejs = require("gulp-ejs");
var webserver = require("gulp-webserver");


var paths = {
    js: {
        source: "src/js/**/*js",
        watch: "src/js/**/*.js",
        dest: "dist/js"
    },
    sass: {
        source: "src/sass/**/*.scss",
        watch: "src/js/**/*.scss",
        dest: "dist/css"
    },
    templates: {
        source: "src/page/**/*.ejs",
        watch: "src/page/**/*.ejs",
        dest: "dist/page"
    },
    startPage: "page/index.html"
};

gulp.task("default", ["webserver", "watch"]);

gulp.task("webserver", function(){
    gulp.src("dist")
        .pipe(webserver({
            host: "localhost",
            port: 8000,
            livereload: true,
            directoryListing: true,
            open: paths.startPage
        }))
});

gulp.task("ejs", function(){
    gulp.src(paths.templates.source)
        .pipe(ejs())
        .pipe(gulp.dest(paths.templates.dest))
});

gulp.task("watch", function(){
    gulp.watch(paths.templates.watch,["ejs"]);
});



