

module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        console.log(req.session);
        next();
    }   else {
        res.status(400).json({message: "You shall not pass"});
    }
};