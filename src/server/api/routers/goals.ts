import { z } from "zod";
import { prisma } from "../../db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const goalsCRUDRouter = createTRPCRouter({
  getUserGoals: publicProcedure.input(z.string()).query(({ input }) => {
    const response = prisma.goal.findMany({
      where: {
        creatorEmail: {
          equals: input,
        },
      },
    });
    return response;
  }),

  createGoal: publicProcedure
    .input(
      z.object({
        tittle: z.string(),
        description: z.string(),
        link: z.string(),
        creatorEmail: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.goal.create({ data: input });
    }),
});
