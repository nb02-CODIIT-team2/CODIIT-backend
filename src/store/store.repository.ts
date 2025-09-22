import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Store } from '@prisma/client';

@Injectable()
export class StoreRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySellerId(sellerId: string) {
    return this.prisma.store.findFirst({ where: { sellerId } });
  }

  create(data: Prisma.StoreCreateInput): Promise<Store> {
    return this.prisma.store.create({ data });
  }

  getBySellerId(sellerId: string): Promise<boolean> {
    return this.prisma.store.count({ where: { sellerId } }).then((n) => n > 0);
  }

  findById(id: string) {
    return this.prisma.store.findUnique({ where: { id } });
  }
}
