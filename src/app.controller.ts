import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './create-task-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Task[]> {
    return this.appService.getAllTasks();
  }

  @Post('/create/task')
  @HttpCode(HttpStatus.CREATED)
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.appService.createTask(createTaskDto);
  }
}
