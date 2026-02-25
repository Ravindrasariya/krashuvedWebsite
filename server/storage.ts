import {
  type User, type InsertUser,
  type Banner, type InsertBanner,
  type Testimonial, type InsertTestimonial,
  type Feedback, type InsertFeedback,
  type ProductImage,
  users, banners, testimonials, visitors, feedback, productImages
} from "@shared/schema";
import { eq, asc, desc, sql, gte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getBanners(): Promise<Banner[]>;
  getBanner(id: number): Promise<Banner | undefined>;
  createBanner(banner: InsertBanner): Promise<Banner>;
  updateBanner(id: number, banner: Partial<InsertBanner>): Promise<Banner | undefined>;
  deleteBanner(id: number): Promise<boolean>;

  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;

  recordVisit(ipAddress: string, userAgent: string | null, path: string): Promise<void>;
  getTotalVisitors(): Promise<number>;
  getUniqueVisitorsToday(): Promise<number>;

  createFeedback(fb: InsertFeedback): Promise<Feedback>;
  getFeedback(): Promise<Feedback[]>;
  deleteFeedback(id: number): Promise<boolean>;

  getProductImages(): Promise<ProductImage[]>;
  upsertProductImage(id: string, imageUrl: string): Promise<ProductImage>;
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getBanners(): Promise<Banner[]> {
    return db.select().from(banners).where(eq(banners.active, true)).orderBy(asc(banners.sortOrder));
  }

  async getBanner(id: number): Promise<Banner | undefined> {
    const [banner] = await db.select().from(banners).where(eq(banners.id, id));
    return banner;
  }

  async createBanner(banner: InsertBanner): Promise<Banner> {
    const [created] = await db.insert(banners).values(banner).returning();
    return created;
  }

  async updateBanner(id: number, banner: Partial<InsertBanner>): Promise<Banner | undefined> {
    const [updated] = await db.update(banners).set(banner).where(eq(banners.id, id)).returning();
    return updated;
  }

  async deleteBanner(id: number): Promise<boolean> {
    const result = await db.delete(banners).where(eq(banners.id, id)).returning();
    return result.length > 0;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials).where(eq(testimonials.active, true));
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    const [testimonial] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return testimonial;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [created] = await db.insert(testimonials).values(testimonial).returning();
    return created;
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const [updated] = await db.update(testimonials).set(testimonial).where(eq(testimonials.id, id)).returning();
    return updated;
  }

  async deleteTestimonial(id: number): Promise<boolean> {
    const result = await db.delete(testimonials).where(eq(testimonials.id, id)).returning();
    return result.length > 0;
  }

  async recordVisit(ipAddress: string, userAgent: string | null, path: string): Promise<void> {
    await db.insert(visitors).values({ ipAddress, userAgent, path });
  }

  async getTotalVisitors(): Promise<number> {
    const [result] = await db.select({ count: sql<number>`count(*)::int` }).from(visitors);
    return result?.count ?? 0;
  }

  async getUniqueVisitorsToday(): Promise<number> {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const [result] = await db
      .select({ count: sql<number>`count(distinct ${visitors.ipAddress})::int` })
      .from(visitors)
      .where(gte(visitors.visitedAt, todayStart));
    return result?.count ?? 0;
  }

  async createFeedback(fb: InsertFeedback): Promise<Feedback> {
    const [created] = await db.insert(feedback).values(fb).returning();
    return created;
  }

  async getFeedback(): Promise<Feedback[]> {
    return db.select().from(feedback).orderBy(desc(feedback.createdAt));
  }

  async deleteFeedback(id: number): Promise<boolean> {
    const result = await db.delete(feedback).where(eq(feedback.id, id)).returning();
    return result.length > 0;
  }

  async getProductImages(): Promise<ProductImage[]> {
    return db.select().from(productImages);
  }

  async upsertProductImage(id: string, imageUrl: string): Promise<ProductImage> {
    const [result] = await db
      .insert(productImages)
      .values({ id, imageUrl })
      .onConflictDoUpdate({ target: productImages.id, set: { imageUrl } })
      .returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
