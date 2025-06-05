import { CustomerTagDefinition } from '../entity/CustomerTagDefinition';
import { AppDataSource } from '../data-source';

export class CustomerTagDefinitionService {
  private CustomerTagDefinitionRepository = AppDataSource.getRepository(CustomerTagDefinition);

  async list(): Promise<CustomerTagDefinition[] | []> {
    return this.CustomerTagDefinitionRepository.find();
  }

}