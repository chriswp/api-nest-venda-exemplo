import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from '../models/product.model'
import { CreateProductDto } from '../dto/create-product.dto'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.repository.find()
  }

  async get(id: number): Promise<Product> {
    return await this.repository.findOneOrFail({ id: id })
  }

  async createProduct(product: CreateProductDto): Promise<Product> {
    const p = this.repository.create(product)
    return this.repository.save(p)
  }
}
