const UrlPrinter=(req,res,next)=>{
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    //console.log(req.hostName)
    console.log(fullUrl);
    console.log(req.body)
    next();
}
module.exports=UrlPrinter