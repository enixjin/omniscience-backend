import { Chat } from '../../src/entity/Chat';

describe('Chat Entity', () => {
  it('should create an instance of Chat', () => {
    const chat = new Chat();
    expect(chat).toBeInstanceOf(Chat);
  });

  it('should set and get properties correctly', () => {
    const chat = new Chat();
    chat.chatId = 1;
    chat.customerId = 101;
    chat.SA_Id = 201;
    chat.message = 'Hello, how are you?';
    chat.timestamp = new Date();

    expect(chat.chatId).toBe(1);
    expect(chat.customerId).toBe(101);
    expect(chat.SA_Id).toBe(201);
    expect(chat.message).toBe('Hello, how are you?');
    expect(chat.timestamp).toBeInstanceOf(Date);
  });
});