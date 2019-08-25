import app from './app';

async function main(){
    await app.listen(4552);
    console.log('server on port 4552');
};

main();
