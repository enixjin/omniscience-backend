import customerRoutes from './routes/customerRoutes';
import productRoutes from './routes/productsRoutes';
import tagRoutes from './routes/tagRoutes';
const mime = require('mime-types');
const OSS = require("ali-oss");


export const initRouters = (app) => {
  app.use('/api/customers', customerRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/tags', tagRoutes);
  app.get('/api/get_post_signature_for_oss_upload', async (req, res) => {
    const fileName = req.query.fileName;
    const signatureUrl = await generateSignatureUrl(fileName);
    res.json({ signatureUrl });
  }
  );
};

// 定义一个生成签名 URL 的函数
async function generateSignatureUrl(fileName) {
  // 获取预签名URL
  const client = await new OSS({
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: 'groupd-image',
    region: 'oss-cn-shanghai',
    authorizationV4: true
  });
  const fileType = mime.lookup(fileName);

  return await client.signatureUrlV4('PUT', 3600, {
    headers: {
      'Content-Type': `${fileType}`
    } // 请根据实际发送的请求头设置此处的请求头
  }, fileName);
}