import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-coaching-data";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactContent } from "@/content/site-content";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  course: z.string().min(1, "Please select a program"),
  message: z.string().min(10, "Please provide more details"),
});

export default function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values, {
      onSuccess: () => {
        toast({
          title: contactContent.form.successToastTitle,
          description: contactContent.form.successToastDescription,
        });
        form.reset();
      },
    });
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">{contactContent.hero.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            {contactContent.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="border border-gray-200 shadow-sm bg-white rounded-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-display">{contactContent.info.title}</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-full text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contactContent.info.campus.title}</h4>
                      <p className="text-gray-600 font-medium">{contactContent.info.campus.lines[0]}<br />{contactContent.info.campus.lines[1]}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-full text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contactContent.info.phone.title}</h4>
                      <p className="text-gray-600 font-medium">{contactContent.info.phone.lines[0]}<br />{contactContent.info.phone.lines[1]}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-full text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contactContent.info.email.title}</h4>
                      <p className="text-gray-600 font-medium">{contactContent.info.email.lines[0]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-full text-primary shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contactContent.info.hours.title}</h4>
                      <p className="text-gray-600 font-medium">{contactContent.info.hours.lines[0]}<br />{contactContent.info.hours.lines[1]}</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 h-48 bg-gray-100 rounded-md border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                  <MapPin className="h-8 w-8 mb-2 opacity-50" />
                  <span className="font-bold text-sm uppercase tracking-wide">{contactContent.info.mapPlaceholder}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Card className="border-t-[6px] border-t-accent shadow-lg bg-white rounded-lg h-full">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">{contactContent.form.title}</h3>
                <p className="text-gray-500 mb-8 font-medium">{contactContent.form.subtitle}</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-bold">{contactContent.form.fields.nameLabel}</FormLabel>
                            <FormControl>
                              <Input placeholder={contactContent.form.fields.namePlaceholder} className="h-12 border-gray-300 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-bold">{contactContent.form.fields.phoneLabel}</FormLabel>
                            <FormControl>
                              <Input placeholder={contactContent.form.fields.phonePlaceholder} className="h-12 border-gray-300 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-bold">{contactContent.form.fields.emailLabel}</FormLabel>
                            <FormControl>
                              <Input placeholder={contactContent.form.fields.emailPlaceholder} className="h-12 border-gray-300 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-bold">{contactContent.form.fields.programLabel}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-gray-300 focus-visible:ring-primary">
                                  <SelectValue placeholder={contactContent.form.fields.programPlaceholder} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {contactContent.form.programs.map((program) => (
                                  <SelectItem key={program.value} value={program.value}>{program.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-bold">{contactContent.form.fields.messageLabel}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={contactContent.form.fields.messagePlaceholder}
                              className="min-h-[150px] border-gray-300 focus-visible:ring-primary resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={mutation.isPending}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold transition-all rounded-md flex items-center justify-center gap-2"
                    >
                      {mutation.isPending ? contactContent.form.submittingLabel : (
                        <>
                          {contactContent.form.submitLabel} <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
