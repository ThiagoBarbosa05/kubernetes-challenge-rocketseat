import { Injectable } from '@nestjs/common';
import { PrismaService } from './db/prisma/prisma.service';
import { CreateTaskDto } from './create-task-dto';

interface Task {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  id: string;
}

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async createTask({ title, description }: CreateTaskDto): Promise<Task> {
    const taskCreated = await this.prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return taskCreated;
  }

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }
}
