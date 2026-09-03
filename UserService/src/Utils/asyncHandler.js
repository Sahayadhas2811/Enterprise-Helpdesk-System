
const asyncHandler = (routeControllers)=>{
    return (req, res, next)=>{
        Promise
        .resolve(routeControllers(req, res, next)
        .catch(next))
    }
}

module.exports = asyncHandler