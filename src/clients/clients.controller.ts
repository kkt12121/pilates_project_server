import { Controller, Body, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './clients.entity';
import { ClientsService } from './clients.service';
import { ClientRegisterDTO } from './dtos/client-register.dto';

@Controller('users')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>,
  ) {}

  @Post('register')
  async signUp(@Body() clientRegisterDTO: ClientRegisterDTO) {
    return await this.clientsService.registerUser(clientRegisterDTO);
  }
}
