
const errorHandler = (err, req, res, next)=>{

    const errorMessage = err.message || "Internal Server Error";
    const statusCode = err.status || 500;

    return res.status(statusCode).json({
        success : false,
        status : statusCode,
        message : errorMessage
    })
}

module.exports = {
    errorHandler
}