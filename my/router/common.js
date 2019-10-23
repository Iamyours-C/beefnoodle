
module.exports = {
    // 验证邮箱
    isEmail (email) {
        if (!email) return false
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        return reg.test(email)

    }
}








