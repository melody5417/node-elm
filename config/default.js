"use strict";

// 参考文档： https://wiki.jikexueyuan.com/project/node-lessons/cookie-session.html
module.exports = {
  port: parseInt(process.env.PORT, 10) || 8001,
  url: "mongodb://localhost:27017/elm",
  session: {
    name: "SID",	// 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid 。
    secret: "SID",	// 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
    cookie: {
      httpOnly: true,	// 不允许通过document访问cookie，避免客户端对cookie修改
      secure: false,	// 只允许https访问
      maxAge: 365 * 24 * 60 * 60 * 1000,
    },
  },
};
