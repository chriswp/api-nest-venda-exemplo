import { Module } from '@nestjs/common'
import { SaleModule } from './sale/sale.module'
import { ProductController } from './sale/controllers/product.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './config/typeorm.config'
import { ProductService } from './sale/services/product.service'
import { Product } from './sale/models/product.model'
import { DigitalProduct } from './sale/models/digital-product.model'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    SaleModule,
    TypeOrmModule.forFeature([Product, DigitalProduct]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
