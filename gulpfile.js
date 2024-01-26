import gulp from "gulp";
import { path } from "./gulp/config/path.js"
// імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

// передаємо значення в глобальну змінну
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// імпорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';

// спостерігач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive }

// послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, svgSprive, gulp.parallel(copy, html, scss, js, images));

// побудова сцеарію виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// експорт сценаріїв
export { dev }
export { build }
export { deployZIP }

// виконання сценарію по замовчуванню
gulp.task('default', dev);