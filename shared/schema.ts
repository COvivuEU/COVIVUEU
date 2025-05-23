import { pgTable, text, serial, numeric, array } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const insuranceProviders = pgTable("insurance_providers", {
  id: serial("id").primaryKey(),
  image: text("image").notNull(),
  title: text("title").notNull(),
  provider: text("provider").notNull(),
  rating: numeric("rating").notNull(),
  bookings: text("bookings").notNull(),
  price: text("price").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  coverage: text("coverage").notNull(),
  features: array(text("features")).notNull()
});

export const insurancePackages = pgTable("packages", {
  id: serial("id").primaryKey(),
  provider_id: serial("provider_id").references(() => insuranceProviders.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  duration: text("duration").notNull(),
  coverage: text("coverage").notNull(),
  features: array(text("features")).notNull()
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  occupation: text("occupation").notNull(),
  interests: text("interests"),
  createdAt: text("created_at").notNull()
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWaitlistSchema = createInsertSchema(waitlist).pick({
  fullName: true,
  email: true,
  occupation: true,
  interests: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;
