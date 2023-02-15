import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getUserGoals: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      let response = prisma.goal.findMany({
        where: {
          creatorEmail: {
            equals: input.text,
          },
        },
      });
      return { response };
    }),

  createGoal: publicProcedure
    .input(
      z.object({
        tittle: z.string(),
        description: z.string(),
        link: z.optional(z.string()),
        creatorEmail: z.string(),
      })
    )
    .query(({ input }) => {
      let response = prisma.goal.create({data: input});
      return { response };
    }),
});
