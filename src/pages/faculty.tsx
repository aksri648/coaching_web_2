import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useFaculty } from "@/hooks/use-coaching-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { facultyContent } from "@/content/site-content";

export default function Faculty() {
  const [, setLocation] = useLocation();
  const { data: faculty, isLoading } = useFaculty();

  const getSubjectColor = (subject: string) => {
    switch(subject.toLowerCase()) {
      case 'physics': return facultyContent.subjectStyles.physics;
      case 'chemistry': return facultyContent.subjectStyles.chemistry;
      case 'mathematics': return facultyContent.subjectStyles.mathematics;
      case 'biology': return facultyContent.subjectStyles.biology;
      default: return facultyContent.subjectStyles.default;
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <BookOpen className="h-10 w-10 text-accent" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            {facultyContent.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            {facultyContent.hero.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-[450px] bg-white border border-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty?.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden group bg-white">
                  <div className="h-72 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply" />
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute bottom-4 right-4 z-20">
                      <Badge className={`${getSubjectColor(member.subject)} border text-sm font-bold shadow-sm px-3 py-1`}>
                        {member.subject}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 relative bg-white flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h3>
                    
                    <div className="space-y-4 mb-4">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase">Qualification</p>
                          <p className="text-sm font-bold text-gray-800">{member.qualification}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase">Experience</p>
                          <p className="text-sm font-bold text-gray-800">{member.experience}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Join CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-primary text-white rounded-xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{facultyContent.joinCta.title}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-medium">{facultyContent.joinCta.subtitle}</p>
            <Button 
              onClick={() => setLocation("/contact")}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 h-14 text-lg rounded-md"
            >
              {facultyContent.joinCta.button}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
