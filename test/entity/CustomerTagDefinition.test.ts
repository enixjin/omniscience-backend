import { CustomerTagDefinition } from '../../src/entity/CustomerTagDefinition';

describe('CustomerTagDefinition Entity', () => {
  it('should create an instance of CustomerTagDefinition', () => {
    const tag = new CustomerTagDefinition();
    expect(tag).toBeInstanceOf(CustomerTagDefinition);
  });

  it('should set and get properties correctly', () => {
    const tag = new CustomerTagDefinition();
    tag.tagId = 1;
    tag.tagName = 'VIP';
    tag.description = 'High-value customer';

    expect(tag.tagId).toBe(1);
    expect(tag.tagName).toBe('VIP');
    expect(tag.description).toBe('High-value customer');
  });
});