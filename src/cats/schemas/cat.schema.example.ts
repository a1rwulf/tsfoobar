import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Cat {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export class Test<T = unknown> {
  _id: T;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export type CatDocument = Cat & Document & Test;
export const CatSchema = SchemaFactory.createForClass(Cat);
