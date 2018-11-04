const gulp = require("gulp");
const fs = require("fs");
const superstatic = require('superstatic');
const pug = require('pug');

const files = [
    {in:'./pug/index.pug',out:'./index.html'},
    {in:'./pug/entitylist.pug',out:'./entitylist.html'},
    {in:'./pug/auctionsell.pug',out:'./auctionsell.html'},
    {in:'./pug/auctionseed.pug',out:'./auctionseed.html'},
    {in:'./pug/instruction.pug',out:'./instruction.html'},
    {in:'./pug/entitydata.pug',out:'./entitydata.html'},
];

gulp.task("build", function(done) {
    files.map((file) => {
        let rawHtml = pug.renderFile(file.in);
        let outName = file.out;
        fs.writeFileSync(outName, rawHtml);
    });
    done();
});

gulp.task('serve', function(){
    superstatic.server({
        port:3000
    }).listen();
});


gulp.task('watch', gulp.parallel( gulp.task('serve'), function(){
    let watchFiles = files.map((file) => {return file.in});
    watchFiles.push("./pug/layout.pug");
    gulp.watch(watchFiles, gulp.task("build"));
}));
