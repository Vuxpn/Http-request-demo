import { Module } from '@nestjs/common';
import { DevicesModule } from './devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/device`),
    DevicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
