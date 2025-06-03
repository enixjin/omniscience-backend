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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

insert into customer values(1,'Enix','enix@enix.net','13912345601','addresshere','male','hello');