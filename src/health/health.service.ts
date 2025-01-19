import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): string {
    return 'App is healthy';
  }

  getReady(): string {
    return 'App is ready';
  }
}
