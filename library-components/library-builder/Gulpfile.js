var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var merge = require('merge-stream');

var argv = require('yargs').argv;
var finalFolderName = argv.folderName;

gulp.task('clean:dist', function () {
    return del([
        'src/dist'
    ]);
})

gulp.task('clean:dist-aot', function () {
    return del([
        'dist-aot'
    ]);
})

// This task deletes the unnessary files created while compilation and the node_modules folder
// It then copies the package.json file into the final dist folder
// It also copies the static files in the assets folder into the dist folder.
gulp.task('structure:dist-aot', function () {
    const distFolder = 'dist-aot';
    del.sync([distFolder + '/**/*.ngfactory.ts', distFolder + '/**/*.ngsummary.json', distFolder + '/node_modules']);
    var copyPackage =  gulp.src('package-library.json')
        .pipe(rename('package.json'))
        .pipe(gulp.dest(distFolder))

    var copyStaticAssets =  gulp.src('src/assets/**/*')
                            .pipe(gulp.dest(distFolder + '/assets'))
    
    return merge(copyPackage,copyStaticAssets);
})

//The task first ensures that the 'structure:dist-aot' task is completed. After that it runs the function task defined in the callback function
gulp.task('create-dist', ['structure:dist-aot'], function () {
    if (finalFolderName !== undefined) {
        return gulp.src('dist-aot/**/*')
            .pipe(gulp.dest(finalFolderName));

    }
});
