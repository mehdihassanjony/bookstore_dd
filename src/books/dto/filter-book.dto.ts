import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { Tag } from '../enum';

export class FilterBookDto {
  @IsOptional()
  public title: string;

  @IsOptional()
  public author: string;

  @IsOptional()
  public tag: Tag;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public min_year: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public max_year: number;
}
