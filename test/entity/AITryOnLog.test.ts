import { AITryOnLog } from '../../src/entity/AITryOnLog';

describe('AITryOnLog Entity', () => {
  it('should create an instance of AITryOnLog', () => {
    const aiTryOnLog = new AITryOnLog();
    expect(aiTryOnLog).toBeInstanceOf(AITryOnLog);
  });

  it('should set and get properties correctly', () => {
    const aiTryOnLog = new AITryOnLog();
    aiTryOnLog.logId = 1;
    aiTryOnLog.uploadImageUrl = 'https://example.com/upload.jpg';
    aiTryOnLog.tryOnImageUrl = 'https://example.com/tryon.jpg';
    aiTryOnLog.timestamp = new Date();

    expect(aiTryOnLog.logId).toBe(1);
    expect(aiTryOnLog.uploadImageUrl).toBe('https://example.com/upload.jpg');
    expect(aiTryOnLog.tryOnImageUrl).toBe('https://example.com/tryon.jpg');
    expect(aiTryOnLog.timestamp).toBeInstanceOf(Date);
  });
});