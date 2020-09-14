import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Product } from '../sale/models/product.model'
import { DigitalProduct } from '../sale/models/digital-product.model'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest-venda',
  entities: [Product, DigitalProduct],
  subscribers: [],
}
