exports.errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500

    // Duplication
    if (err.code = 11000 && err.keyPattern && err.keyValue) {
        err.statusCode = 400
        for (let p in err.keyValue) {
            if (p === "username") p = "Tên đăng nhập/Email"
            err.message = `${p} đã được đăng ký`
        }
    }

    // ObjectID: Not found
    // if (err.kind = "ObjectId") {
    //     err.statusCode = 404
    //     err.message = `Đường đẫn không thể truy cập`
    // }

    // Validation
    if (err.errors) {
        err.statusCode = 400
        err.message = []
        for (let p in err.errors) {
            err.message.push(err.errors[p].properties.message)
        }
    }

    res.status(err.statusCode).json({
        status: 'failed',
        message: err.message
    })
}