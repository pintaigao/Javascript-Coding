/* 2-1 【TS类】TS类底层根基，深入JS原型 */
function QQUsers(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; //QQ号
  this.QQAge = QQAge_; //Q龄
  this.QQMark = QQMark_; //QQ标签
  //引用对象类型=引用类型=对象类型=引用数据类型
  // 数组也是一种引用数据类型
  this.commonfriends = ["骑驴看海", "大漠上的英雄", "坚实的果子", "小草"]; //共同好友
  // 方法也是一种引用数据类型
  this.show = function () {
    console.log(`QQ号:${this.QQNo},QQ龄:${this.QQAge},QQ标注:${this.QQMark}`);
    console.log(`共同的好友是:${this.commonfriends}`);
  };
}
// 对象也叫实例(instance)
// QQZhangSan叫做对象变量 对象是等号右边通过new出来的一个实例 而且是运行期间才在堆中开辟对象的内存空间
let QQZhangSan = new QQUsers("37834522", 15, "王阳明传人");
let QQLisi = new QQUsers("30424232", 10, "袁隆平的徒弟");

QQZhangSan.show();
QQLisi.show();

/* 2-3 【原型】深度透彻掌握原型 */
QQUsers.prototype.commonfriends = [
  "骑驴看海",
  "大漠上的英雄",
  "坚实的果子",
  "小草",
];

QQUsers.prototype.show = function () {
  console.log(`QQ号:${this.QQNo},QQ龄:${this.QQAge},QQ标注:${this.QQMark}`);
  console.log(`共同的好友是:${this.commonfriends}`);
};

console.log("QQLisi:", QQLisi);
console.log("QQLisi.commonfriends:", QQLisi.commonfriends);
console.log("QQZhangSan.commonfriends:", QQZhangSan.commonfriends);

/* 
console.log("QQUsers.prototype:", QQUsers.prototype);

QQUsers.prototype={
  constructor: ƒ QQUsers(QQNo_, QQAge_, QQMark_)
  __proto__: Object
} 
*/

QQUsers.prototype.commonfriends.push("大树");
console.log("QQZhangSan.commonfriends", QQZhangSan.commonfriends);
console.log("QQLisi.commonfriends", QQLisi.commonfriends);
console.log("QQUsers.prototype.commonfriends", QQUsers.prototype.commonfriends);

// 5.3 创建实例后再覆盖原型
QQUsers.prototype = {
  commonfriends: ["abc", "bcd", "骑驴看海"],
};

console.log("QQUsers.prototype:", QQUsers.prototype);
console.log("QQZhangSan.commonfriends:", QQZhangSan.commonfriends);
console.log(
  "QQUsers.prototype.commonfriends:",
  QQUsers.prototype.commonfriends
);
