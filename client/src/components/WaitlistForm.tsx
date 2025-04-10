import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistFormSchema } from '@shared/schema';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      companySize: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest('POST', '/api/waitlist', data);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when we launch.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  function handleReset() {
    setIsSuccess(false);
    form.reset();
  }

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join our exclusive waitlist
          </h2>
          <p className="text-lg text-gray-300">
            Be among the first to access our platform when we launch. Early access members will receive special benefits.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          {!isSuccess ? (
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">First name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Company size</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501+">501+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 px-6"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </form>
              </Form>
              
              <div className="text-center text-gray-400 text-sm mt-6">
                By joining the waitlist, you agree to our 
                <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 ml-1">Privacy Policy</a> and 
                <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 ml-1">Terms of Service</a>.
              </div>
            </div>
          ) : (
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center animate-in fade-in">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">You're on the list!</h3>
              <p className="text-gray-300 mb-6">Thanks for joining our waitlist. We'll notify you when we launch.</p>
              <Button onClick={handleReset}>
                Back to Form
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
