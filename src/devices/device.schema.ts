import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Device {
  @Prop()
  deviceId: string;

  @Prop()
  qrCodeId: string;

  @Prop()
  qrCodeValue: string;
}

export const deviceSchema = SchemaFactory.createForClass(Device);
