import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRootRoute(): string {
    return 'Root route api health check';
  }
}
