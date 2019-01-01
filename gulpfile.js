const gulp = require("gulp");
const fs = require("fs");
const superstatic = require('superstatic');
const pug = require('pug');

const files = [
    {in:'./pug/index.pug',out:'./dist/index.html'},
    {in:'./pug/tonlist.pug',out:'./dist/tonlist.html'},
    {in:'./pug/shop.pug',out:'./dist/shop.html'},
    {in:'./pug/breed.pug',out:'./dist/breed.html'},
    {in:'./pug/instruction.pug',out:'./dist/instruction.html'},
    {in:'./pug/entitydata.pug',out:'./dist/entitydata.html'},
    {in:'./pug/familytree.pug',out:'./dist/familytree.html'},
    {in:'./pug/ownership.pug',out:'./dist/ownership.html'},
    {in:'./pug/ranking.pug',out:'./dist/ranking.html'},
];

gulp.task("build", function(done) {
    fs.readdir("./js", (err, files) => {
        try {
            fs.accessSync("./dist/js");
        } catch(e) {
            fs.mkdirSync("./dist/js");
        }
        files.filter(file => file.endsWith(".js")).map((file) => {
            fs.copyFile(`./js/${file}`, `./dist/js/${file}`, (err) => {
                if(err) {console.error(err)}
            });
        });
    });
    fs.readdir("./css", (err, files) => {
        try {
            fs.accessSync("./dist/css");
        } catch(e) {
            fs.mkdirSync("./dist/css");
        }
        files.map((file) => {
            fs.copyFile(`./css/${file}`, `./dist/css/${file}`, (err) => {
                if(err) {console.error(err)}
            });
        });
    });
    fs.readdir("./img", (err, files) => {
        try {
            fs.accessSync("./dist/img");
        } catch(e) {
            fs.mkdirSync("./dist/img");
        }
        files.map((file) => {
            fs.copyFile(`./img/${file}`, `./dist/img/${file}`, (err) => {
                if(err) {console.error(err)}
            });
        });
    });
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
