import { Chat } from '../entity/Chat';
import { AppDataSource } from '../data-source';

export class ChatService {
  private ChatRepository = AppDataSource.getRepository(Chat);

  async getChatByCustomerID(id: number): Promise<Chat[] | []> {
    return this.ChatRepository.find({ where: { customerId: id } });
  }

}