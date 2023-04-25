import { Repository } from 'typeorm';
import { CustomRepository } from '../db/typeorm-ex.decorator';
import { Client } from './clients.entity';
import { ClientRegisterDTO } from './dtos/client-register.dto';

@CustomRepository(Client)
export class ClientRepository extends Repository<Client> {}
