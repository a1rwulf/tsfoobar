import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://nest:nest@127.0.0.1:27017/nest'),
            CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
