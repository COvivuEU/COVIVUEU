import type { Express } from "express";
import { createServer, type Server } from "http";
import { insuranceProviders, insurancePackages } from "@shared/schema";
import { storage } from "./storage";
import { ZodError } from "zod";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/waitlist', async (req, res) => {
    try {
      // Validate request body against waitlist schema
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({
          success: false,
          message: 'This email is already registered in our waitlist.'
        });
      }
      
      // Create new waitlist entry
      const newEntry = await storage.createWaitlistEntry(validatedData);
      
      return res.status(201).json({
        success: true,
        message: 'Successfully added to waitlist!',
        data: {
          id: newEntry.id,
          email: newEntry.email
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: validationError.message
        });
      }
      
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred'
      });

  app.get('/api/insurance/providers', async (req, res) => {
    try {
      const providers = await storage.getAllInsuranceProviders();
      return res.status(200).json({
        success: true,
        data: providers
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch insurance providers'
      });
    }
  });

  app.get('/api/insurance/packages', async (req, res) => {
    try {
      const packages = await storage.getAllInsurancePackages();
      return res.status(200).json({
        success: true,
        data: packages
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch insurance packages'
      });
    }
  });

    }
  });

  app.get('/api/waitlist', async (req, res) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      return res.status(200).json({
        success: true,
        count: entries.length,
        data: entries
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
