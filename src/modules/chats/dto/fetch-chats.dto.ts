import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class FetchChatsDto {
  @IsOptional()
  conversation_id?: number;

  @IsNotEmpty()
  parties: string[];

  @IsOptional()
  @IsString()
  search?: string;

  @IsNotEmpty()
  page: number;
}

@Injectable()
export class PaginationTransformPipe implements PipeTransform {
  async transform(dto: FetchChatsDto, { metatype }: ArgumentMetadata) {
    if (!metatype) {
      return dto;
    }

    return plainToInstance(metatype, dto);
  }
}
