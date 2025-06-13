import { RecommendationLog } from '../../src/entity/RecommendationLog';

describe('RecommendationLog Entity', () => {
  it('should create an instance of RecommendationLog', () => {
    const log = new RecommendationLog();
    expect(log).toBeInstanceOf(RecommendationLog);
  });

  it('should set and get properties correctly', () => {
    const log = new RecommendationLog();
    log.logId = 1;
    log.recommendationDetails = { productId: 101, score: 0.95 };
    log.timestamp = new Date();

    expect(log.logId).toBe(1);
    expect(log.recommendationDetails).toEqual({ productId: 101, score: 0.95 });
    expect(log.timestamp).toBeInstanceOf(Date);
  });
});