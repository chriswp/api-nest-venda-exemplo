import { Module } from '@nestjs/common'
import { VendaModule } from './venda/venda.module';

@Module({
  imports: [VendaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
