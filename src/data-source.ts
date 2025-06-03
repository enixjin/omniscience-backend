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
    type: (process.env.DB_TYPE as any) || "mysql",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "omniscience",
    synchronize: process.env.DB_SYNCHRONIZE === "true",
    logging: false,
    entities: [AITryOnLog, Chat, Customer, CustomerTagDefinition, Order, Product, RecommendationLog],
    migrations: [],
    subscribers: [],
})
