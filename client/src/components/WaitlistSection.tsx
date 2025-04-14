import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema } from "@shared/schema";

// Extend the waitlist schema with additional validation
const formSchema = insertWaitlistSchema.extend({
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
});

type FormData = z.infer<typeof formSchema>;

const occupationOptions = [
  { value: "designer", label: "Designer" },
  { value: "developer", label: "Developer" },
  { value: "manager", label: "Manager" },
  { value: "entrepreneur", label: "Entrepreneur" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" }
];

const benefits = [
  {
    title: "Early Access",
    description: "Get access before the general public launch"
  },
  {
    title: "Special Pricing",
    description: "Exclusive discounts for early adopters"
  },
  {
    title: "Premium Support",
    description: "Direct access to our support team"
  }
];

const WaitlistSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      occupation: "",
      interests: "",
      terms: false
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Submit to API
      await apiRequest("POST", "/api/waitlist", {
        fullName: data.fullName,
        email: data.email,
        occupation: data.occupation,
        interests: data.interests || ""
      });
      
      // Show success UI
      setIsSuccess(true);
      
      // Reset form
      reset();
      
      // Show success toast
      toast({
        title: "Success!",
        description: "You have been added to our waitlist.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      if (error instanceof Response) {
        const data = await error.json();
        errorMessage = data.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      // Show error toast
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 shadow-sm border border-primary/20">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Join Our Waitlist
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Be the first to know when ProductX launches. Early subscribers get exclusive benefits and priority access.
              </p>
              
              <div className="mt-12 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">{benefit.title}</h3>
                      <p className="mt-1 text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {!isSuccess ? (
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="bg-white p-6 rounded-xl shadow-md border border-slate-200 relative"
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className={`block w-full rounded-md border ${errors.fullName ? "border-red-500" : "border-slate-300"} bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-colors`}
                        {...register("fullName")}
                        disabled={isSubmitting}
                      />
                      {errors.fullName && (
                        <div className="mt-1 text-sm text-red-600">{errors.fullName.message}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className={`block w-full rounded-md border ${errors.email ? "border-red-500" : "border-slate-300"} bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-colors`}
                        {...register("email")}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="mt-1 text-sm text-red-600">{errors.email.message}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="occupation" className="block text-sm font-medium text-slate-700 mb-1">Occupation</label>
                      <select
                        id="occupation"
                        className={`block w-full rounded-md border ${errors.occupation ? "border-red-500" : "border-slate-300"} bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-colors`}
                        {...register("occupation")}
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Select your occupation</option>
                        {occupationOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.occupation && (
                        <div className="mt-1 text-sm text-red-600">{errors.occupation.message}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="interests" className="block text-sm font-medium text-slate-700 mb-1">What interests you most?</label>
                      <textarea
                        id="interests"
                        rows={3}
                        placeholder="Tell us what features you're most excited about"
                        className="block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-colors"
                        {...register("interests")}
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary focus:ring-opacity-20"
                          {...register("terms")}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-slate-700">I agree to the terms and conditions</label>
                        {errors.terms && (
                          <div className="mt-1 text-sm text-red-600">{errors.terms.message}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center rounded-md bg-primary px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Join Waitlist</span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                  <p className="text-slate-600 mb-6">Thank you for joining our waitlist. We'll be in touch soon!</p>
                  <button 
                    onClick={handleReset}
                    className="text-primary hover:text-primary/90 font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
