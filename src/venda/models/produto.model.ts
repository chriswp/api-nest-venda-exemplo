import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column()
  descricao: string

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  preco: number

  @CreateDateColumn({ type: 'timestamp' })
  data_criacao: Date

  @UpdateDateColumn({ type: 'timestamp' })
  data_alteracao: Date
}
