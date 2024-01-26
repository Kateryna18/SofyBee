import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      fonter({
        formats: ["woff"],
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeigh = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeigh.toLowerCase() === 'thin') {
                            fontWeigh = 100;
                        } else if (fontWeigh.toLowerCase() === 'extralight') {
                            fontWeigh = 200;
                        } else if (fontWeigh.toLowerCase() === 'light') {
                            fontWeigh = 300;
                        } else if (fontWeigh.toLowerCase() === 'medium') {
                            fontWeigh = 500;
                        } else if (fontWeigh.toLowerCase() === 'semibold') {
                            fontWeigh = 600;
                        } else if (fontWeigh.toLowerCase() === 'bold') {
                            fontWeigh = 700;
                        } else if (fontWeigh.toLowerCase() === 'extrabold' || fontWeigh.toLowerCase() === 'heavy') {
                            fontWeigh = 800;
                        } else if (fontWeigh.toLowerCase() === 'black') {
                            fontWeigh = 900;
                        } else {
                            fontWeigh = 400;
                        }
                        fs.appendFile(fontsFile, `@font-face {
                            font-family: ${fontName};
                            font-display: swap;
                            src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff2") format("woff2");
                            font-weight: ${fontWeigh};
                            font-style: normal;
                        }\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                console.log("Файл scss/fonts.scss вже існує. Для оновлення файда потрібно його видалити!");
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() {}
}