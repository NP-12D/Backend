export const isAdmin=(req,res,next)=>{
    console.log(req.headers);
     const isadmin=req.headers.isadmin;
    if(!isadmin || isadmin !== "admin"){
        return res.status(403).json({message:"you are not admin", data:null})
    }
   next()
}