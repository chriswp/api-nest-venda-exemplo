import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { Produto } from '../models/produto.model'
import { ProdutoService } from '../services/produto.service'

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly service: ProdutoService) {}

  @Get()
  async index(): Promise<Produto[]> {
    return this.service.getAll()
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.service.get(id)
  }
}
