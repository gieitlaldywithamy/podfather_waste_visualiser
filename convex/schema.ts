import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    waste: defineTable({
      customer: v.string(),
      site: v.string(),
      year: v.number(),
      month: v.number(),
      wasteType: v.string(),
      estimatedKg: v.number(),
      actualKg: v.number()
    })
  });