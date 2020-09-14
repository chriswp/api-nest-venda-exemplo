import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common'
import { ProductService } from '../services/product.service'
import { Product } from '../models/product.model'
import { CreateProductDto } from '../dto/create-product.dto'

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.service.getAll()
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.service.get(id)
  }

  @Post()
  async store(@Body(new ValidationPipe()) request: CreateProductDto): Promise<Product> {
    return this.service.createProduct(request)
  }
}
