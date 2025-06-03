import "reflect-metadata"
import { DataSource } from "typeorm"
import { AITryOnLog } from "./entity/AITryOnLog"
import { Chat } from "./entity/Chat"
import { Customer } from "./entity/Customer"
import { CustomerTagDefinition } from "./entity/CustomerTagDefinition"
import { Order } from "./entity/Order"
import { Product } from "./entity/Product"
import { RecommendationLog } from "./entity/RecommendationLog"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "jjyyxx1981",
    database: "omniscience",
    synchronize: false,
    logging: false,
    entities: [AITryOnLog, Chat, Customer, CustomerTagDefinition, Order, Product, RecommendationLog],
    migrations: [],
    subscribers: [],
})
