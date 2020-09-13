import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Produto } from '../models/produto.model'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) {}

  async getAll(): Promise<Produto[]> {
    return this.repository.find()
  }

  async get(id: number): Promise<Produto> {
    return await this.repository.findOneOrFail({ id: id })
  }
}
