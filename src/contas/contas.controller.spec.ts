import { Test, TestingModule } from '@nestjs/testing';
import { ContasController } from './contas.controller';

describe('Contas Controller', () => {
  let controller: ContasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContasController],
    }).compile();

    controller = module.get<ContasController>(ContasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
