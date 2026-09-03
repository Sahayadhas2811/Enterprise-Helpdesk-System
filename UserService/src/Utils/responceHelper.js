const responceHelper = (res, statusCode, message, data)=>{

    return res.status(statusCode).json({
        success:true, 
        status:statusCode,
        message:message,
        data:data
    })
}

module.exports = responceHelper