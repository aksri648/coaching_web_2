import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, Laptop, CheckCircle2 } from "lucide-react";
import { useCourses } from "@/hooks/use-coaching-data";
import { coursesContent } from "@/content/site-content";

export default function Courses() {
  const [, setLocation] = useLocation();
  const { data: courses, isLoading } = useCourses();
  const [activeTab, setActiveTab] = useState("All");
  const demoPriceByCategory: Record<string, string> = {
    JEE: "1,29,999",
    NEET: "1,19,999",
    Foundation: "79,999",
  };

  const filteredCourses = courses?.filter(
    c => activeTab === "All" || c.category === activeTab
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-24 px-4 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            {coursesContent.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            {coursesContent.hero.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        {/* Category Filters using Shadcn Tabs */}
        <div className="flex justify-center mb-16">
          <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 h-14 bg-white shadow-sm border border-gray-200 rounded-md p-1">
              {coursesContent.categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="font-bold text-sm md:text-base rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-[500px] bg-white border border-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses?.map((course) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={course.id}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-lg overflow-hidden group">
                    <div className={`h-3 w-full ${
                      course.category === 'JEE' ? 'bg-blue-600' : 
                      course.category === 'NEET' ? 'bg-green-600' : 
                      'bg-purple-600'
                    }`} />
                    <CardContent className="p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-6">
                        <Badge className={`px-4 py-1 text-xs font-black uppercase tracking-wider rounded-sm
                          ${course.category === 'JEE' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 
                            course.category === 'NEET' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
                            'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
                        >
                          {course.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{course.title}</h3>
                      <p className="text-gray-600 mb-6 flex-1 font-medium leading-relaxed">{course.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-md border border-gray-100">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                          <Clock className="h-4 w-4 text-primary" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                          <Laptop className="h-4 w-4 text-primary" />
                          {course.mode}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                            <span className="text-sm font-bold text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto mb-3 text-center">
                        <p className="text-2xl font-black text-primary">₹ {demoPriceByCategory[course.category] ?? "99,999"}</p>
                      </div>

                      <Button 
                        onClick={() => setLocation(`/contact?course=${course.id}`)}
                        className="w-full h-12 rounded-md text-base font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-md"
                      >
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
