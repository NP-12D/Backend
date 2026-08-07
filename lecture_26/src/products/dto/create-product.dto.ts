import {
  IsString,
  MaxLength,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @MaxLength(50)
  description!: string;

  @Min(0)
  @Max(999999)
  @IsNumber()
  price!: number;

  @IsNumber()
  stock!: number;

  @IsNotEmpty()
  @IsString()
  category!: string;
}
