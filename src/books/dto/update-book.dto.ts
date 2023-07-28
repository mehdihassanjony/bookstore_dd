import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { Tag } from '../enum';

export class UpdateBookDto {
  @IsOptional()
  public title: string;

  @IsOptional()
  public author: string;

  @IsOptional()
  @IsEnum(Tag, { message: 'Please enter correct tag.' })
  public tag: Tag;

  @IsOptional()
  public points: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public year: number;
}
