"use strict";

import mongoose from "mongoose";

// 模型使用 Schema 接口进行定义。 Schema 可以定义每个文档中存储的字段，及字段的验证要求和默认值。
const Schema = mongoose.Schema;

// SchemaType 如 default，有多种
const adminSchema = new Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: { type: String, default: "管理员" },
  status: Number, //1:普通管理、 2:超级管理员
  avatar: { type: String, default: "default.jpg" },
  city: String,
});

adminSchema.index({ id: 1 });

// 使用模式“编译”模型
// 第一个参数是为模型所创建集合的别名（Mongoose 将为 SomeModel 模型创建数据库集合），第二个参数是创建模型时使用的模式。
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
