import { IsString } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  deviceId: string;

  @IsString()
  qrCodeId: string;

  @IsString()
  qrCodeValue: string;
}
