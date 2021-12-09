

export default (express, bodyParser, createReadStream, crypto, http, CORS, writeFileSync) => {
    const app=express();
    const wp = {
        id: 1,
        title: {
            rendered: 'itmo308556'
        }
    }
    app
    .all('/login',r=>{
        r.res.set(CORS).send("itmo308556");
    })
    .all('/wordpress/', r=>{
        r.res.set(CORS).send(wp)
    })
    .all('/wordpress/wp-json/wp/v2/posts/', r=>{
        r.res.set(CORS).send([wp])
    })
    
    return app;
}