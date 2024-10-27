import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/createDevice.dto';

@Controller('device')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  getAllDevices() {
    return this.devicesService.getAllDevices();
  }

  @Post()
  requestDevice(
    @Body() deviceId: string,
    qrCodeId: string,
    qrCodeValue: string,
  ) {
    return { deviceId, qrCodeId, qrCodeValue };
  }
}
