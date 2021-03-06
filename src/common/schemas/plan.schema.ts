import * as mongoose from 'mongoose';
import { DaySchema } from './day.schema';

export const PlanSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    drinkDescription: { type: String, required: true },
    owner: { type: String, required: true },
    votes: { type: Number, required: true, default: 0 },
    tags: [{ type: String, lowercase: true, trim: true, required: false }],
    days: [{ type: DaySchema, required: true }],
  },
  { timestamps: true },
);
