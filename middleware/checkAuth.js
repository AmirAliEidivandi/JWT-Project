const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(400).json({
            errors: [
                {
                    msg: "No token found...",
                },
            ],
        });
    }

    try {
        let user = await JWT.verify(token, "lkadhf9849u9ri4hfnkdhqh98ry43rfnoi");
        req.user = user.email;
        next();
    } catch (error) {
        return res.status(400).json({
            errors: [
                {
                    msg: "token invalid",
                },
            ],
        });
    }
};
