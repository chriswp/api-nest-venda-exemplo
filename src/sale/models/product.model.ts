import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { DigitalProduct } from './digital-product.model'

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  price: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => DigitalProduct,
    digitalProduct => digitalProduct.product,
  )
  digitalProducts: DigitalProduct[]
}
