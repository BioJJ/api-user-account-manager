import { Test, TestingModule } from '@nestjs/testing';
import { ContaService } from './conta.service';

describe('ContaService', () => {
  let provider: ContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContaService],
    }).compile();

    provider = module.get<ContaService>(ContaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
