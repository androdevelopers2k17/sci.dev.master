var gulp = require("gulp")
var inject = require("gulp-inject-string");
var package = require("./package.json");

var files = [
    "src/index.html",
    "src/app/**/*.constant.js"
];

gulp.task("version", function () {
    return gulp.src(files, {
            base: "./"
        })
        .pipe(inject.afterEach(".js", "?_v" + package.version))
        .pipe(inject.afterEach(".css", "?_v" + package.version))
        .pipe(gulp.dest("./"))
});

gulp.task("default", ["version"]);