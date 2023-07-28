import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { Tag } from '../enum';

export class CreateBookDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public author: string;

  @IsNotEmpty()
  @IsEnum(Tag, { message: 'Please enter correct tag.' })
  public tag: Tag;

  @IsNotEmpty()
  public points: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  public year: number;
}
