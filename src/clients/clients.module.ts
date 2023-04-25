import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { Client } from './clients.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../db/typeorm-ex.module';
import { ClientRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    TypeOrmExModule.forCustomRepository([ClientRepository]),
  ],
  providers: [ClientsService],
  controllers: [ClientsController],
  exports: [ClientsService],
})
export class ClientsModule {}
