const gulp = require("gulp");
const fs = require("fs");
const superstatic = require('superstatic');
const pug = require('pug');

const files = [
    {in:'./pug/index.pug',out:'./dist/index.html'},
    {in:'./pug/ton.pug',out:'./dist/ton.html'},
    {in:'./pug/tons.pug',out:'./dist/tons.html'},
    {in:'./pug/shop.pug',out:'./dist/shop.html'},
    {in:'./pug/breed.pug',out:'./dist/breed.html'},
    {in:'./pug/instruction.pug',out:'./dist/instruction.html'},
    {in:'./pug/entitydata.pug',out:'./dist/entitydata.html'},
    {in:'./pug/familytree.pug',out:'./dist/familytree.html'},
    {in:'./pug/ownership.pug',out:'./dist/ownership.html'},
    {in:'./pug/ranking.pug',out:'./dist/ranking.html'},
];

function copy(folder, filter) {
    fs.readdir(`./${folder}`, (err, files) => {
        try {
            fs.accessSync(`./dist/${folder}`);
        } catch(e) {
            fs.mkdirSync(`./dist/${folder}`);
        }
        files.filter(file => file.endsWith(filter)).map((file) => {
            fs.copyFile(`./${folder}/${file}`, `./dist/${folder}/${file}`, (err) => {
                if(err) {console.error(err)}
            });
        });
    });
}

gulp.task("build", function(done) {
    copy("js", ".js");
    copy("css", ".css");
    copy("img", "");
    files.map((file) => {
        let rawHtml = pug.renderFile(file.in);
        let outName = file.out;
        fs.writeFileSync(outName, rawHtml);
    });
    done();
});

gulp.task('serve', function(){
    superstatic.server({
        port:3000,
        config: {
            public: "./dist"
        },
    }).listen();
});


gulp.task('watch', gulp.parallel( gulp.task('build'), gulp.task('serve'), function(){
    let watchFiles = files.map((file) => {return file.in});
    watchFiles.push("./pug/layout.pug");
    fs.readdirSync("./js").map((file) => {
        watchFiles.push(`./js/${file}`);
    });
    gulp.watch(watchFiles, gulp.task("build"));
}));
