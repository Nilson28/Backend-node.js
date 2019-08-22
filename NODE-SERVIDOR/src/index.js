import app from './app';

async function main(){
    await app.listen(4551);
    console.log('server on port 4551');
};

main();
