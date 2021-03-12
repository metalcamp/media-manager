import { registerAs } from '@nestjs/config';

export interface QueueConfig {
  host: string;
  port: number;
}

export default registerAs('queue', () => ({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
}));
