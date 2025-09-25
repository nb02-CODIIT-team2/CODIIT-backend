import { IsInt, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  rating: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: '리뷰 내용은 최소 10자 이상이어야 합니다.' })
  content: string;
}