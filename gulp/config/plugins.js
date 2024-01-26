// пошук і заміна
import replace from "gulp-replace"; 
// обробка помилок
import plumber from "gulp-plumber";
// повідомленнія (підказки)
import notify from "gulp-notify";
// локальний сервер
import browsersync from "browser-sync";
// перевірка оновлення
import newer from "gulp-newer";
import ifPlugin from "gulp-if";


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}