import { Test, TestingModule } from '@nestjs/testing';
import { LineupController } from './lineup.controller';

describe('LineupController', () => {
  let controller: LineupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LineupController],
    }).compile();

    controller = module.get<LineupController>(LineupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
