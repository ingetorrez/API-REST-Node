import '@babel/polyfill';

import app from './server';
// import { connect } from './database';

async function main() {
    await app.listen(app.get('port'));
    // await connect();
    console.log(`server on port`, app.get('port'));
}

main();