// src/config/database.ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : [],
});

export const connectDatabase = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('DatabaseConfig: Database connected successfully');
  } catch (error) {
    console.error('DatabaseConfig: Database connection failed:', error);
    process.exit(1);
  }
}

export const disconnectDatabase = async (): Promise<void> => {
  await prisma.$disconnect();

  console.log('DatabaseConfig: Database disconnected successfully');
}
