import { z } from "zod";
import { prisma } from "../../db";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const goalsCRUDRouter = createTRPCRouter({
  getUserGoals: publicProcedure.input(z.string()).query(({ input }) => {
    let response = prisma.goal.findMany({
      where: {
        creatorEmail: {
          equals: "goliveirapk@gmail.com",
        },
      },
    });
    return response;
  }),

  createGoal: protectedProcedure
    .input(
      z.object({
        tittle: z.string(),
        description: z.string(),
        link: z.string(),
        creatorEmail: z.string(),
      })
    )
    .mutation(({ input }) => {
      let response = prisma.goal.create({ data: input });
      return response;
    }),
});
