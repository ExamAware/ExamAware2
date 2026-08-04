import { IsIn, IsInt, IsString, Matches, MaxLength, Min, MinLength } from 'class-validator';

export class EnrollDeviceDto {
  @IsString()
  @Matches(/^EA2-[A-Za-z0-9_-]{16,128}$/)
  enrollmentCode!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(120)
  displayName!: string;

  @IsIn(['win32', 'darwin', 'linux', 'openharmony'])
  platform!: 'win32' | 'darwin' | 'linux' | 'openharmony';

  @IsIn(['x64', 'arm64'])
  architecture!: 'x64' | 'arm64';

  @IsString()
  @MinLength(1)
  @MaxLength(64)
  appVersion!: string;

  @IsInt()
  @Min(1)
  protocolVersion!: number;
}
