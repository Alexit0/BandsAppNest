import { Test, TestingModule } from '@nestjs/testing';
import { LineupService } from './lineup.service';

describe('LineupService', () => {
  let service: LineupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineupService],
    }).compile();

    service = module.get<LineupService>(LineupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
