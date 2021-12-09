

export default (express, bodyParser, createReadStream, crypto, http, CORS, writeFileSync) => {
    const app=express();
    app
    .all('/login',r=>{
        r.res.set(CORS).send("itmo308556");
    })
    
    return app;
}