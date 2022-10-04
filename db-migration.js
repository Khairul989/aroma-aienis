const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function openDB(){
    return sqlite.open({
        filename:'./cakedb.sqlite',
        driver:sqlite3.Database
    });
}
async function setup(){
    const db = await openDB();
    await db.migrate(
        {
            migrationsPath:'./migrations',
            force:true,
        }
    );
}

setup();