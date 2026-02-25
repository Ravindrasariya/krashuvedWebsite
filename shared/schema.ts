import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const banners = pgTable("banners", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  captionEn: text("caption_en").notNull(),
  captionHi: text("caption_hi").notNull(),
  subCaptionEn: text("sub_caption_en"),
  subCaptionHi: text("sub_caption_hi"),
  sortOrder: integer("sort_order").notNull().default(0),
  active: boolean("active").notNull().default(true),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionHi: text("description_hi").notNull(),
  photoUrl: text("photo_url"),
  active: boolean("active").notNull().default(true),
});

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  ipAddress: text("ip_address").notNull(),
  userAgent: text("user_agent"),
  path: text("path").notNull(),
  visitedAt: timestamp("visited_at").notNull().defaultNow(),
});

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const productImages = pgTable("product_images", {
  id: text("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBannerSchema = createInsertSchema(banners).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertFeedbackSchema = createInsertSchema(feedback).omit({ id: true, createdAt: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Banner = typeof banners.$inferSelect;
export type InsertBanner = z.infer<typeof insertBannerSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Feedback = typeof feedback.$inferSelect;
export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;
export type ProductImage = typeof productImages.$inferSelect;
