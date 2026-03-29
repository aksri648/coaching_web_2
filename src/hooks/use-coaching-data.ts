import { useQuery, useMutation } from "@tanstack/react-query";
import { mockData } from "@/content/site-content";

// Types
export interface Course {
  id: string;
  title: string;
  category: "JEE" | "NEET" | "Foundation";
  duration: string;
  mode: string;
  description: string;
  features: string[];
}

export interface Faculty {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  imageUrl: string;
}

export interface Result {
  id: string;
  name: string;
  exam: string;
  year: string;
  rank: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  course: string;
  avatarUrl: string;
}

// Hooks
export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 400));
      return mockData.courses;
    }
  });
}

export function useFaculty() {
  return useQuery({
    queryKey: ["faculty"],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 400));
      return mockData.faculty;
    }
  });
}

export function useResults() {
  return useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 400));
      return mockData.results;
    }
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 400));
      return mockData.testimonials;
    }
  });
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: any) => {
      await new Promise(r => setTimeout(r, 1000));
      console.log("Form submitted", data);
      return { success: true };
    }
  });
}
