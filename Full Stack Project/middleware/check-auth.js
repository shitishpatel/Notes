const jwt =  require('jsonwebtoken');
module.exports  = (req, res, next) => {

    try{
        const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'my_secret_key');
    // return res.json(token);
    req.userData=decoded;
    // return res.json(decoded)
    next();
    }catch(error){
        res.json({success:false,message:"Auth Failed"});
    }
}
