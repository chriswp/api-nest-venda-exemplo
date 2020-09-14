import { IsNotEmpty, IsNumber, MinLength } from 'class-validator'

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(5)
  readonly name: string

  @IsNotEmpty()
  @MinLength(15)
  readonly description: string

  @IsNumber()
  readonly price: number
}
