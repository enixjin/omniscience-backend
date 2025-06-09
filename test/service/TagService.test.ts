import { CustomerTagDefinitionService } from '../../src/service/TagService';
import { AppDataSource } from '../../src/data-source';
import { CustomerTagDefinition } from '../../src/entity/CustomerTagDefinition';

jest.mock('../../src/data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('CustomerTagDefinitionService', () => {
  let tagService: CustomerTagDefinitionService;

  beforeEach(() => {
    tagService = new CustomerTagDefinitionService();
  });

  it('should be defined', () => {
    expect(tagService).toBeDefined();
  });

  it('should list all tags', async () => {
    const mockTags: CustomerTagDefinition[] = [
      { tagId: 1, tagName: 'VIP', description: 'High-value customer' },
      { tagId: 2, tagName: 'Regular', description: 'Regular customer' },
    ];

    (AppDataSource.getRepository(CustomerTagDefinition).find as jest.Mock).mockResolvedValue(mockTags);

    const result = await tagService.list();

    expect(result).toEqual(mockTags);
    expect(AppDataSource.getRepository(CustomerTagDefinition).find).toHaveBeenCalled();
  });
});