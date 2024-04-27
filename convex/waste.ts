import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const createNewWasteEstimation = mutation({
  args: {
    customer: v.string(),
      site: v.string(),
      year: v.number(),
      month: v.number(),
      wasteType: v.string(),
      estimatedKg: v.number(),
      actualKg: v.number()
  },
  async handler(ctx, { customer, site, year, month, wasteType, estimatedKg, actualKg }) {
    await ctx.db.insert("waste", {customer, site, year, month, wasteType, estimatedKg, actualKg });
  }
});

export const getWaste = query({
  args: {},
  async handler(ctx, args) {
    return ctx.db.query("waste").collect();
  },
});