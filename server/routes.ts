import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBannerSchema, insertTestimonialSchema, insertFeedbackSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/banners", async (_req, res) => {
    const bannerList = await storage.getBanners();
    res.json(bannerList);
  });

  app.post("/api/banners", async (req, res) => {
    const parsed = insertBannerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }
    const banner = await storage.createBanner(parsed.data);
    res.status(201).json(banner);
  });

  app.patch("/api/banners/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const banner = await storage.updateBanner(id, req.body);
    if (!banner) return res.status(404).json({ message: "Banner not found" });
    res.json(banner);
  });

  app.delete("/api/banners/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = await storage.deleteBanner(id);
    if (!deleted) return res.status(404).json({ message: "Banner not found" });
    res.json({ success: true });
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonialList = await storage.getTestimonials();
    res.json(testimonialList);
  });

  app.post("/api/testimonials", async (req, res) => {
    const parsed = insertTestimonialSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }
    const testimonial = await storage.createTestimonial(parsed.data);
    res.status(201).json(testimonial);
  });

  app.patch("/api/testimonials/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const testimonial = await storage.updateTestimonial(id, req.body);
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
    res.json(testimonial);
  });

  app.delete("/api/testimonials/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = await storage.deleteTestimonial(id);
    if (!deleted) return res.status(404).json({ message: "Testimonial not found" });
    res.json({ success: true });
  });

  app.post("/api/track", async (req, res) => {
    const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket.remoteAddress || "unknown";
    const userAgent = req.headers["user-agent"] || null;
    const path = req.body.path || "/";
    await storage.recordVisit(ip, userAgent, path);
    res.json({ success: true });
  });

  app.post("/api/admin/login", async (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) {
      res.json({ success: true });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  });

  app.get("/api/admin/visitors", async (_req, res) => {
    const total = await storage.getTotalVisitors();
    const uniqueToday = await storage.getUniqueVisitorsToday();
    res.json({ total, uniqueToday });
  });

  app.post("/api/feedback", async (req, res) => {
    const parsed = insertFeedbackSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }
    const fb = await storage.createFeedback(parsed.data);
    res.status(201).json(fb);
  });

  app.get("/api/admin/feedback", async (_req, res) => {
    const list = await storage.getFeedback();
    res.json(list);
  });

  app.delete("/api/admin/feedback/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = await storage.deleteFeedback(id);
    if (!deleted) return res.status(404).json({ message: "Feedback not found" });
    res.json({ success: true });
  });

  app.get("/api/product-images", async (_req, res) => {
    const images = await storage.getProductImages();
    res.json(images);
  });

  app.patch("/api/admin/product-images/:id", async (req, res) => {
    const { id } = req.params;
    const { imageUrl } = req.body;
    if (!imageUrl || typeof imageUrl !== "string") {
      return res.status(400).json({ message: "imageUrl is required" });
    }
    const result = await storage.upsertProductImage(id, imageUrl);
    res.json(result);
  });

  return httpServer;
}
