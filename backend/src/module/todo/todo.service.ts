import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(uuid: string) {
    return this.prisma.todo.findUnique({
      rejectOnNotFound: true,
      where: {
        uuid,
      },
    });
  }

  async create(input: CreateTodoInput) {
    return this.prisma.todo.create({
      data: {
        ...input,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async update(uuid: string, input: UpdateTodoInput) {
    return this.prisma.todo.update({
      where: {
        uuid,
      },
      data: {
        ...input,
        updatedAt: new Date(),
      },
    });
  }

  async delete(uuid: string) {
    return this.prisma.todo.delete({
      where: {
        uuid,
      },
    });
  }
}
