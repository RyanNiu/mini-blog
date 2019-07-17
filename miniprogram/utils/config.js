/**
 * 打赏二维码
 */
var moneyUrl ="https://7465-test-3rcvg-1259137164.tcb.qcloud.la/QcCode/mony.jpeg?sign=2e87100ffc10834da75ee0565cb1319d&t=1563376235"

/**
 * 公众号二维码
 */
var wechatUrl ="https://7465-test-3rcvg-1259137164.tcb.qcloud.la/QcCode/qrcode_for_wuzhuqingshi.jpg?sign=6f7c1622dffe6c53fee5f0080eb0548a&t=1563378006"

/**
 * 云开发环境
 */
var env ="test-3rcvg"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env
}