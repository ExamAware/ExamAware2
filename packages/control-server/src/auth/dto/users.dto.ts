import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Max,
  Min
} from 'class-validator';
import { PageQueryDto } from '../../api/pagination.dto.js';
import { authRoles, type AuthRole } from '../access-control.js';

const ROLE_VALUES = Object.keys(authRoles) as AuthRole[];

export class ListUsersDto extends PageQueryDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  search?: string;

  @IsOptional()
  @IsIn(ROLE_VALUES)
  role?: AuthRole;
}

export class CreateUserDto {
  @IsString()
  @Length(3, 32)
  username!: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(12, 128)
  password?: string;

  @IsIn(ROLE_VALUES)
  role: AuthRole = 'viewer';
}

export class BatchCreateUsersDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(200)
  @IsString({ each: true })
  usernames!: string[];

  @IsIn(ROLE_VALUES)
  role: AuthRole = 'viewer';

  @IsIn(['skip', 'replace'])
  existingUserMode: 'skip' | 'replace' = 'skip';
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(3, 32)
  username?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsOptional()
  @IsIn(ROLE_VALUES)
  role?: AuthRole;

  @IsOptional()
  @IsBoolean()
  banned?: boolean;
}

export class UserPageSizeDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  pageSize = 50;
}
