// const OSS = require('ali-oss');

// const client = new OSS({
//   // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
//   region: 'oss-cn-shanghai',
//   // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
//   accessKeyId: process.env.OSS_ACCESS_KEY_ID,
//   accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET
// });

// async function listBuckets() {
//   try {
//     // 列举当前账号所有地域下的存储空间。
//     const result = await client.listBuckets();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// listBuckets();


const OSS = require("ali-oss");

// 定义一个生成签名 URL 的函数
async function generateSignatureUrl(fileName) {
  // 获取预签名URL
  const client = await new OSS({
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: 'test-block-public',
    region: 'oss-cn-shanghai',
    authorizationV4: true
  });

  return await client.signatureUrlV4('GET', 3600, {
    headers: {
    } // 请根据实际发送的请求头设置此处的请求头
  }, fileName);
}
// 调用函数并传入文件名
generateSignatureUrl('Simon.png').then(url => {
  console.log('Generated Signature URL:', url);
}).catch(err => {
  console.error('Error generating signature URL:', err);
});