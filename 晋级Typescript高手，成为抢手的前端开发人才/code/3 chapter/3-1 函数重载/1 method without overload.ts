type MessageType = "image" | "audio" | string; //微信消息类型
//type xtype=string
//boolean true false
type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};
//let msgobj:Message={id:23,type:"df",sendmessage:"abc"}
//let obj={username:"wangwu",age:23}
let messages: Message[] = [
  //let messages: Array<Message> = [
  {
    id: 1,
    type: "image",
    sendmessage: "你好啊,今晚咱们一起去三里屯吧",
  },
  {
    id: 2,
    type: "audio",
    sendmessage: "朝辞白帝彩云间，千里江陵一日还",
  },
  {
    id: 3,
    type: "audio",
    sendmessage: "你好！张无忌",
  },
  {
    id: 4,
    type: "image",
    sendmessage: "刘老根苦练舞台绝技！",
  },
  {
    id: 5,
    type: "image",
    sendmessage: "今晚王牌对王牌节目咋样?",
  },
];

//不用函数重载来实现2-12的功能
// 1.函数结构不分明,可读性，可维护性变差
function getMessage(
  value: number | MessageType
): Message | Array<Message> | undefined {
  if (typeof value === "number") {
    return messages.find((msg) => {
      return value === msg.id;
    });
  } else {
    //return messages.filter((msg) => { return value === msg.type })
    return messages.filter((msg) => value === msg.type);
  }
}

/* 不用函数重载的情况下 */
console.log(getMessage("audio"));
console.log(getMessage(2));

/* 不用函数重载的情况下问题：*/
let msg = getMessage(1);
console.log(msg.sendMessage); //getMessage返回的是联合类型Message|Array<Message>|undefined 类型“Message|Message[]”上不存在属性“sendMessage”。

/* 转换 */
let msg = (<Message>getMessage(1)).sendmessage;
console.log("msg:", msg); // msg: 你好啊,今晚咱们一起去三里屯吧

/* 转换2 */
let messageresult = (<Message[]>getMessage("audio")).forEach((msg) => {
  console.log(msg.sendmessage);
});
