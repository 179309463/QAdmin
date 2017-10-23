var gulp = require("gulp");
var mainBowerFiles = require("main-bower-files");

var dest = "pubilc/libs";

gulp.task('assets', function(){
	return gulp.src(mainBowerFiles())
		.pipe(gulp.dest(dest))
});