const gulp = require("gulp");
const fs = require("fs");
const superstatic = require('superstatic');
const pug = require('pug');

const files = [
    {in:'./pug/index.pug',out:'index.html'},
    {in:'./pug/ton.pug',out:'ton.html'},
    {in:'./pug/tons.pug',out:'tons.html'},
    {in:'./pug/shop.pug',out:'shop.html'},
    {in:'./pug/breed.pug',out:'breed.html'},
    {in:'./pug/instruction.pug',out:'instruction.html'},
    {in:'./pug/entitydata.pug',out:'entitydata.html'},
    {in:'./pug/familytree.pug',out:'familytree.html'},
    {in:'./pug/ownership.pug',out:'ownership.html'},
    {in:'./pug/ranking.pug',out:'ranking.html'},
];

function copy(type, folder, filter) {
    fs.readdir(`./${folder}`, (err, files) => {
        try {
            fs.accessSync(`./${type}/${folder}`);
        } catch(e) {
            fs.mkdirSync(`./${type}/${folder}`);
        }
        files.filter(file => file.endsWith(filter)).map((file) => {
            fs.copyFile(`./${folder}/${file}`, `./${type}/${folder}/${file}`, (err) => {
                if(err) {console.error(err)}
            });
        });
    });
}

gulp.task("build", function(done) {
    copy("dist","js", ".js");
    copy("dist", "css", ".css");
    copy("dist", "img", "");
    files.map((file) => {
        let rawHtml = pug.renderFile(file.in, {});
        let outName = "./dist/" + file.out;
        fs.writeFileSync(outName, rawHtml);
    });
    done();
});

gulp.task("docs", function(done) {
    copy("docs", "js", ".js");
    copy("docs", "css", ".css");
    copy("docs", "img", "");
    files.map((file) => {
        let rawHtml = pug.renderFile(file.in, { "base_href": "https://planethouki.github.io/crypton-explorer/"});
        let outName = "./docs/" + file.out;
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
