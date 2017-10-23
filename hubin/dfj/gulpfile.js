//gulp
/*var gulp=require("gulp");
var babel=require("gulp-babel");
var uglify=require("gulp-uglify");

gulp.task("jsTask2",function(){
	gulp.src("src/js/*.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest("dest/js"));
});
gulp.task("default",["jsTask2"]);
*/
var gulp=require("gulp");
var htmlmin=require("gulp-htmlmin");
gulp.task("htmltask",function(){
	gulp.src("src/dafeiji.html")
	.pipe(htmlmin())
	.pine(gulp.dest("dest"));
})
gulp.task("default",["htmltask"])
