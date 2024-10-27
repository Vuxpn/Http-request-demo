import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
