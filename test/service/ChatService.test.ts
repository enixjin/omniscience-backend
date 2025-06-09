import { ChatService } from '../../src/service/ChatService';
import { AppDataSource } from '../../src/data-source';
import { Chat } from '../../src/entity/Chat';

jest.mock('../../src/data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('ChatService', () => {
  let chatService: ChatService;

  beforeEach(() => {
    chatService = new ChatService();
  });

  it('should be defined', () => {
    expect(chatService).toBeDefined();
  });

  it('should get chat by customer ID', async () => {
    const mockChats: Chat[] = [
      { chatId: 1, customerId: 101, SA_Id: 201, message: 'Hello', timestamp: new Date() },
      { chatId: 2, customerId: 101, SA_Id: 202, message: 'Hi there', timestamp: new Date() },
    ];

    (AppDataSource.getRepository(Chat).find as jest.Mock).mockResolvedValue(mockChats);

    const result = await chatService.getChatByCustomerID(101);

    expect(result).toEqual(mockChats);
    expect(AppDataSource.getRepository(Chat).find).toHaveBeenCalledWith({ where: { customerId: 101 } });
  });
});