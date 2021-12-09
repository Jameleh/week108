

export default (express, bodyParser, createReadStream, crypto, http, CORS, writeFileSync) => {
    const app=express();
    const wp = {
        id: 1,
        title: {
            rendered: 'itmo308556'
        }
    }
    const wpH={'Content-Type':'application/json',...CORS}
    app
    .all('/login',r=>{
        r.res.set(CORS).send("itmo308556");
    })
    .all('/wordpress/', r=>{
        r.res.set(wpH).send(wp)
    })
    .all('/wordpress/wp-json/wp/v2/posts/', r=>{
        r.res.set(wpH).send([wp])
    })
    
    return app;
}