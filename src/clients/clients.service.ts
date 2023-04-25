import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './clients.entity';
import { ClientRegisterDTO } from './dtos/client-register.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>,
    private readonly configService: ConfigService,
  ) {}

  async registerUser(clientRegisterDTO: ClientRegisterDTO): Promise<void> {
    await this.clientsRepository.save({
      ...clientRegisterDTO,
    });
  }
}
