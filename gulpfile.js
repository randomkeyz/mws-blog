var gulp = require('gulp');
//var imagemin = require('gulp-imagemin');
//var imageminPngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean:dist', function(){
  return del.sync('dist');
});



//gulp.task('images', function(){
//  return gulp.src('images_src/**/*.+(png|jpg|jpeg|gif|svg)')
//      .pipe(imagemin({interlaced: true},[
//          imageminPngquant({
//            speed: 1,
//           quality: 98 //lossy settings
//          }) 
//        ]))
//      .pipe(gulp.dest('dist/images'))
//      });

gulp.task('images', function(){
  gulp.src('images_src/**/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(imageResize({
        imageMagick: true,
        quality: 0.3,
        width: 1600
      }))
      .pipe(gulp.dest('dist/images'));
});

gulp.task('default', function(){
  runSequence('clean:dist', ['images']);
});
