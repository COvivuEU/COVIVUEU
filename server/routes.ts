import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = waitlistFormSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }

      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.data.email);
      if (existingEntry) {
        return res.status(409).json({
          success: false,
          message: "This email is already on the waitlist"
        });
      }

      // Create a new waitlist entry
      const newEntry = await storage.createWaitlistEntry({
        email: validatedData.data.email,
        firstName: validatedData.data.firstName,
        companySize: validatedData.data.companySize || null,
        createdAt: new Date().toISOString()
      });

      // Return success response
      return res.status(201).json({
        success: true,
        message: "Successfully joined the waitlist",
        data: {
          id: newEntry.id,
          email: newEntry.email,
          firstName: newEntry.firstName
        }
      });
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred. Please try again later."
      });
    }
  });

  // Get waitlist count
  app.get("/api/waitlist/count", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.status(200).json({
        success: true,
        count: entries.length
      });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred. Please try again later."
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
