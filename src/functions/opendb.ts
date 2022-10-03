const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

export async function openDB(){
    return sqlite.open({
        filename:'./cakedb.sqlite',
        driver:sqlite3.Database
    });
}