import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './product.model'

@Entity('digital_products')
export class DigitalProduct {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Product,
    product => product.digitalProducts,
  )
  product: Product

  @Column()
  link: string
}
