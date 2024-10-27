import { Module } from '@nestjs/common';
import { DevicesModule } from './devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesController } from './devices/devices.controller';

@Module({
  imports: [DevicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
