import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient(); //otherwise new prismaClient wiil inititalize everytime we change code while development

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
