import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBannerSchema, insertTestimonialSchema } from "@shared/schema";

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

  return httpServer;
}
