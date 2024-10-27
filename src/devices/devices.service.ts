import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateDeviceDto } from './dto/createDevice.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import Device from './device.interface';

@Injectable()
export class DevicesService {
  private devices: Device[] = [
    {
      deviceId: '8a0fc66a61a959f6',
      qrCodeId: 'a652d57094b7590b0dea115b156c07098abdea87',
      qrCodeValue: 'P22498244182551944',
    },
    {
      deviceId: 'nhom23',
      qrCodeId: 'iot-nhom23',
      qrCodeValue: 'http-iot-nhom23',
    },
  ];

  async getAllDevices() {
    return this.devices;
  }
}
