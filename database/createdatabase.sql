CREATE DATABASE IF NOT EXISTS omniscience;

use omniscience;

CREATE TABLE Customer (
    customerId INT PRIMARY KEY, -- 客户唯⼀标识
    name VARCHAR(100), -- 客户姓名
    email VARCHAR(100), -- 客户邮箱
    phone VARCHAR(20), -- 客户电话
    address TEXT, -- 客户地址
    gender TEXT, -- 客⼈性别
    title TEXT -- 称谓
);


CREATE TABLE Product (
    productId INT PRIMARY KEY, -- 产品唯⼀标识
    productName VARCHAR(100), -- 产品名称
    category VARCHAR(50), -- 产品分类
    subCategory VARCHAR(50), -- ⼦分类
    price DECIMAL(10, 2), -- 产品价格
    imageUrl TEXT, -- 产品图⽚URL
    description TEXT -- 产品描述
);

CREATE TABLE `Order` (
    orderId INT PRIMARY KEY, -- 订单唯⼀标识
    customerId INT, -- 关联客户表
    orderDate DATE, -- 下单⽇期
    totalAmount DECIMAL(10, 2), -- 总⾦额
    productId INT, -- 产品id (保持与Product表主键类型一致)
    status VARCHAR(50), -- 订单状态 (如：已下单、已发货等)
    FOREIGN KEY (customerId) REFERENCES Customer(customerId),
    FOREIGN KEY (productId) REFERENCES Product(productId)
);

CREATE TABLE Chat (
    chatId INT PRIMARY KEY, -- 聊天记录唯⼀标识
    customerId INT, -- 关联客户表
    SA_Id INT, -- 销售Id
    message TEXT, -- 聊天内容
    timestamp DATETIME, -- 聊天时间
    FOREIGN KEY (customerId) REFERENCES Customer(customerId)
);

CREATE TABLE RecommendationLog (
    logId INT PRIMARY KEY, -- ⽇志唯⼀标识
    customerId INT, -- 关联客户表
    recommendationDetails JSON, -- 推荐详情 (如推荐的产品ID列表)
    timestamp DATETIME, -- 推荐时间
    FOREIGN KEY (customerId) REFERENCES Customer(customerId)
);

CREATE TABLE CustomerTagDefinition (
    tagId INT PRIMARY KEY, -- 标签唯⼀标识
    tagName VARCHAR(50), -- 标签名称
    description TEXT -- 标签描述
);

CREATE TABLE AITryOnLog (
    logId INT PRIMARY KEY, -- ⽇志唯⼀标识
    customerId INT, -- 关联客户表
    top_productId INT, -- ⽤户选择的上装产品ID
    bottom_productId INT, -- ⽤户选择的下装产品ID
    uploadImageUrl TEXT, -- ⽤户上传的图⽚URL
    tryOnImageUrl TEXT, -- AI⽣成的虚拟试⾐图⽚URL
    timestamp DATETIME, -- 试⾐时间
    FOREIGN KEY (customerId) REFERENCES Customer(customerId),
    FOREIGN KEY (top_productId) REFERENCES Product(productId),
    FOREIGN KEY (bottom_productId) REFERENCES Product(productId)
);

insert into customer values(1,'Jack','jack@jack.net','13912345601','addresshere','male','hello');
insert into customer values(2,'Rose','Rose@rose.net','13912345602','addresshere','female','hello');

insert into product values(1,'REGULAR-FIT JACKET IN SOFT SUEDE WITH ZIP FRONT','Clothing','Jackets',6200,'https://images.hugoboss.com/is/image/boss/hbeu50528014_275_100','A regular-fit jacket with a zip front by BOSS Menswear. This piece is crafted in soft suede with smooth lining for comfort. We continuously look for more responsible ways to produce and finish our products. A minimum of 60% of the leather used to make this product has been sourced from certified tanneries.Regular fitShirt CollarFastening top: Zip closurePockets top: Single welt pocketInside zip pocketsButton cuffsFully linedStandard lengthFit back length: 64 cm');
insert into product values(2,'Reversible jacket with water-repellent finish','Clothing','Jackets',9000,'https://images.hugoboss.com/is/image/boss/hbeu50542544_275_100','With a reversible design, this BOSS Menswear jacket is a worthwhile investment. Combining checked virgin wool on one side with soft padding and a plain effect on the other, this jacket gives you endless styling possibilities. The water-repellent finish keeps the rain off in unpredictable weather.');
insert into product values(3,'MIXED-MATERIAL TRAINERS WITH SUEDE AND FAUX LEATHER','Shoes','Sneakers',1900,'https://images.hugoboss.com/is/image/boss/hbeu50498265_401_100','Lace-up trainers by BOSS, designed in mixed materials with suede trims, faux nappa leather and an odour-control lining.LacesFully linedPackaging: Box');
insert into product values(4,'Portuguese-crafted moccasin loafers in suede with penny trim','Shoes','Casual Shoes',2600,'https://images.hugoboss.com/is/image/boss/hbeu50541750_260_100','Crafted in soft suede for comfort, these timeless BOSS Menswear loafers have a flexible moccasin construction with great traction. Penny trim featuring embossed logo. We continuously look for more responsible ways to produce and finish our products. A minimum of 60% of the leather used to make this product has been sourced from certified tanneries. Fastening top: Slip-onFully linedPackaging: Box');
insert into product values(5,'REGULAR-FIT T-SHIRT IN STRETCH COTTON WITH CONTRAST LOGO','Clothing','T-shirts',680,'https://images.hugoboss.com/is/image/boss/hbeu50506373_27_100','An understated T-shirt by BOSS, ready to be teamed with any outfit. Regular fit in stretch cotton for comfort. Contrast logo at the chest.Regular fitCrew neckShort sleevesStandard length');
insert into product values(6,'Cotton-piqué polo shirt with logo detail','Clothing','Polo Shirts',1250,'https://images.hugoboss.com/is/image/boss/hbeu50494697_2_100','Crafted in breathable cotton piqué, this BOSS Menswear polo shirt is a versatile staple. Cut to a straight fit. Elegant tipping stripes.Regular fitPolo collarNumber of buttons: 3Short sleevesStandard length');
insert into product values(7,'MAINE REGULAR-FIT JEANS IN DARK-BLUE COMFORT-STRETCH DENIM','Clothing','Jeans',1450,'https://images.hugoboss.com/is/image/boss/hbeu50501129_406_100','Regular-fit jeans cut with a tapered leg in dark-blue comfort-stretch denim featuring subtle used effects by BOSS Menswear.Regular fitZip closurePockets bottom front: Side pocketsTapered legPockets bottom back: Patch pocketStandard length');
insert into product values(8,'Maine regular-fit jeans in blue Italian denim','Clothing','Jeans',2000,'https://images.hugoboss.com/is/image/boss/hbeu50540479_423_100','With a modern tapered leg, these BOSS Menswear jeans are made in finest Italian denim. Blended with generous stretch for comfort and shape recovery.Regular fitRegular riseButton and zip closurePockets bottom front: Side pocketsTapered legPockets bottom back: Patch pocketStandard length');
insert into product values(9,'SLIM-FIT SHIRT IN EASY-IRON STRETCH-COTTON POPLIN','Clothing','Shirts',1500,'https://images.hugoboss.com/is/image/boss/hbeu50469345_452_100','A timeless business shirt in a defined fit by BOSS Menswear.Slim fitKent collarRound cuffs');
insert into product values(10,'Modern-fit shirt in striped slub cotton','Clothing','Shirts',1350,'https://images.hugoboss.com/is/image/boss/hbeu50539765_413_100','Patterned with a classic stripe, this HUGO Menswear shirt is made in soft, slubby yarn for added character. Clean fit with tonal logo detail.modern fitKent collarSquared cuffsStandard length');
insert into product values(11,'Slim-fit linen shirt with stand collar','Clothing','Shirts',1250,'https://images.hugoboss.com/is/image/boss/hbeu50490740_405_100','Cut to a defined fit, this HUGO Menswear shirt is ideal for any occasion. Crafted in 100% linen for cooling breathability in warmer temperatures.Slim fitStand collarSquared cuffsStandard length');
insert into product values(12,'Slim-fit suit in patterned virgin wool and silk','Clothing','Suits',14500,'https://images.hugoboss.com/is/image/boss/hbeu50539677_234_100','With its understated pattern, this elegant BOSS Menswear suit is perfect for summertime occasions. Blended with luxurious silk. Sharp defined silhouette. Classic peak lapels.Partially lined');
insert into product values(13,'Extra-slim-fit suit in stretch dobby','Clothing','Suits',5600,'https://images.hugoboss.com/is/image/boss/hbeu50545457_427_100','Tailored to an extra-slim fit, this HUGO Menswear suit has a melange effect for easy styling. Textured fabric with wool and stretch. Fully lined.Extra-slim fitNotch lapelsNumber of buttons: 2Welt chest pocketsPockets top: Flap pocketsInside jet pocket with buttonButton cuffsSide ventFully linedFit back length: 72 cmFit foot width: 36,0 cmPackaging: Dust bag');
insert into product values(14,'Regular-fit blazer in micro-check virgin wool','Clothing','Suits',4500,'https://images.hugoboss.com/is/image/boss/hbeu50540647_992_100','With its refined check, this BOSS Womenswear blazer is so easy to style. Crafted in breathable virgin wool, with shaping darts for a flattering fit. This product is made with responsibly sourced wool. For us, responsibly sourced means mulesing free, and meeting the standards of the Five Freedoms of animal welfare.Regular fitNotch lapelsFastening top: Button closureNumber of buttons: 1Pockets top: Welt pocketsKissing buttons on the cuffBack ventFully linedFit back length: 62 cm');
insert into product values(15,'Regular-fit blazer in pinstripe stretch material','Clothing','Suits',4300,'https://images.hugoboss.com/is/image/boss/hbeu50530987_960_100','A double-breasted blazer in a fitted shape by HUGO Womenswear. This smart jacket is cut to a straight fit in stretch fabric with a pinstripe.Regular fitPeak lapelsFastening top: Button closureNumber of buttons: Double-breastedPockets top: Flap pocketsNo cuffsBack ventFully linedFit back length: 72 cm');
insert into product values(16,'Midi-length skirt in blue stretch denim','Clothing','Skirts',1800,'https://images.hugoboss.com/is/image/boss/hbeu50512588_469_100','A slim-fitting midi skirt by BOSS Womenswear. Featuring a front slit, this high-rise piece is crafted in stretch denim with a vintage blue wash.Slim fitHigh riseButton and zip closurePockets bottom front: Side pocketsPockets bottom back: Patch pocketFront slit');
insert into product values(17,'Plissé midi skirt with hazy floral print','Clothing','Skirts',2600,'https://images.hugoboss.com/is/image/boss/hbeu50540325_987_100','With a comfortable elasticated rear waistband, this HUGO Womenswear midi skirt is a statement work-to-weekend piece. Plissé pleats with floaty tiering. Retro print. This product is partly created with recycled polyester. We at HUGO BOSS prefer recycled polyester from pre- and post-consumer textile waste and do our best to phase out polyester from PET bottles. The aim of using recycled materials is to save valuable resources. Regular fitRegular riseA-line skirtElasticised waistSide slitFully linedStandard lengthFit back length: 90 cm');
insert into product values(18,'Slim-fit pencil skirt in virgin wool','Clothing','Skirts',2000,'https://images.hugoboss.com/is/image/boss/hbeu50490036_1_100','An elegant pencil skirt by BOSS. Cut to a flattering slim fit with a high waist, its designed in soft wool with smooth lining. This product is made with responsibly sourced wool. For us, responsibly sourced means mulesing free, and meeting the standards of the Five Freedoms of animal welfare.Slim fitHigh risePencil skirtZip closureBack ventBack slitFully linedMedium lengthFit back length: 58 cm');
insert into product values(19,'Pencil skirt with zipped pockets in stretch material','Clothing','Skirts',2300,'https://images.hugoboss.com/is/image/boss/hbeu50533419_1_100','A modern pencil skirt by BOSS Womenswear. This fully lined piece is crafted in stretch material and trimmed with diagonal zipped pockets. This product is made with cellulose fibres, derived from natural raw wood material and sourced from responsibly managed forests. We cooperate with external organisations to ensure respectful treatment of virgin and endangered forests.Regular fitZip closurePockets bottom front: Zip pocketsBack slitFit back length: 62 cm');

insert into `Order` values(1,1,'2023-01-01',5000.00,1,'pending');
insert into `Order` values(2,1,'2024-01-02',3000.00,1,'completed');
insert into `Order` values(3,2,'2024-01-03',680.00,1,'pending');
insert into `Order` values(4,2,'2024-01-04',1450.00,1,'completed');

insert into chat values(1,1,1,'你好，我想了解一下BOSS今年新款的修身西装，浅灰色或浅褐色，44码有现货吗？','2023-01-01 00:00:00');
insert into chat values(2,1,1,'你好，想了解你们店最新的男士西装系列，是否有修身款的？','2023-01-01 00:05:00');
insert into chat values(3,1,1,'商务用，浅褐色有货吗?','2023-01-01 00:10:00');
insert into chat values(4,1,1,'听说你们提供西装定制，流程是怎样的？','2023-01-01 00:15:00');
insert into chat values(5,1,1,'费用大概多少？','2023-01-01 00:20:00');

insert into chat  values(6,2,1,'上个月买的女士衬衫洗后缩水了，你们不是说面料预缩处理过吗？','2023-01-01 00:25:00');
insert into chat  values(7,2,1,'这是小票，我想换大一号。','2023-01-01 00:30:00');
insert into chat  values(8,2,1,'想送男友香水，Boss哪款最受欢迎？ ','2023-01-01 00:35:00');
insert into chat  values(9,2,1,'想找一套适合晚宴的女装，简约但高级。','2023-01-01 00:40:00');
insert into chat  values(10,2,1,'好的帮我留M 码我想试试。','2023-01-01 00:45:00');

insert into customerTagDefinition values(1,'高价值客户','客户每次都买金额都在5000以上');
insert into customerTagDefinition values(2,'一般客户','客户每次都买金额都在3000以下');
insert into customerTagDefinition values(3,'高频购买客户','客户每个月都购买产品');
insert into customerTagDefinition values(4,'低频购买客户','客户至少6个月以上购买一次');