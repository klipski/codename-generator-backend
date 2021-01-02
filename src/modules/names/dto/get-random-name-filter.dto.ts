import { IsNotEmpty, IsOptional, MaxLength } from "class-validator";

export class GetRandomNameFilterDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(1)
  startswith: string;
}