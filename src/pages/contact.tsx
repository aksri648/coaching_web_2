import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MapEmbed from "@/components/ui/mapembed";
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
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  course: z.string().min(1, "Please select a program"),
  message: z.string().min(10, "Please provide more details"),
});

const WEB3FORMS_ACCESS_KEY = "d25919e7-9351-4f9c-92f8-694b0eaf3597";
const COUNTRY_CODE = "+91";
const SUCCESS_CARD_DURATION_MS = 5000;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [successProgress, setSuccessProgress] = useState(100);
  
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

  useEffect(() => {
    if (!showSuccessCard) {
      return;
    }

    setSuccessProgress(100);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextValue = Math.max(0, 100 - (elapsed / SUCCESS_CARD_DURATION_MS) * 100);
      setSuccessProgress(nextValue);
    }, 50);

    const hideTimeout = setTimeout(() => {
      setShowSuccessCard(false);
      setSuccessProgress(100);
    }, SUCCESS_CARD_DURATION_MS);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, [showSuccessCard]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Inquiry - BrightPath",
          from_name: "BrightPath Website",
          replyto: values.email,
          name: values.name,
          email: values.email,
          phone: `${COUNTRY_CODE}${values.phone}`,
          course: values.course,
          message: values.message,
          botcheck: "",
        }),
      });

      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Submission failed. Please try again.");
      }

      form.reset();
      setShowSuccessCard(true);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

                <div className="mt-10 rounded-md border border-gray-200 overflow-hidden">
                  <MapEmbed />
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
            <Card className="border-t-[6px] border-t-accent shadow-lg bg-white rounded-lg">
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
                              <div className="flex h-12 items-center rounded-md border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-primary">
                                <span className="px-3 text-sm font-semibold text-gray-700 border-r border-gray-300">{COUNTRY_CODE}</span>
                                <Input
                                  type="tel"
                                  inputMode="numeric"
                                  autoComplete="tel-national"
                                  maxLength={10}
                                  placeholder="9876543210"
                                  className="h-full border-0 rounded-none focus-visible:ring-0"
                                  value={field.value}
                                  onChange={(event) => {
                                    const nextValue = event.target.value.replace(/\D/g, "").slice(0, 10);
                                    field.onChange(nextValue);
                                  }}
                                  onBlur={field.onBlur}
                                  name={field.name}
                                  ref={field.ref}
                                />
                              </div>
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
                      disabled={isSubmitting}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold transition-all rounded-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? contactContent.form.submittingLabel : (
                        <>
                          {contactContent.form.submitLabel} <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                {showSuccessCard && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative mt-6 overflow-hidden rounded-lg border border-green-200 bg-green-50 p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-green-100 p-2 text-green-700">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-900">Inquiry submitted successfully</p>
                        <p className="text-sm text-green-800">
                          We received your details and will contact you shortly.
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-green-200">
                      <div
                        className="h-full bg-green-500 transition-[width] duration-75 ease-linear"
                        style={{ width: `${successProgress}%` }}
                      />
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
