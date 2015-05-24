var gulp = require("gulp");
var sass = require("gulp-sass")
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var ejs = require("gulp-ejs");
var prettify = require("gulp-html-prettify");
var minifyHTML = require("gulp-minify-html");

gulp.task("serve", ["sass"], function() {
	browserSync.init({
        server: {
		    baseDir: "./app"
		}
    });
	gulp.watch("app/template/**/*.ejs", ["template"]);
    gulp.watch("app/scss/**/*.scss", ["sass"]);
});

gulp.task("sass", function() {
	return gulp.src("app/scss/*.scss")
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(gulp.dest("app/css"))
		.pipe(reload({stream: true}));
});
gulp.task("template", function() {
    return gulp.src("app/template/**/*.ejs")
	    .pipe(ejs())
		//.pipe(minifyHTML())
		.pipe(prettify({indent_char:" ", indent_size:4}))
		.pipe(gulp.dest("app"))
		.pipe(reload({stream: true}));
});

gulp.task("default", ["serve"]);
