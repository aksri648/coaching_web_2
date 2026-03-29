import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, BookOpen, Users, MapPin, Building2, Beaker, Coffee, Bus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutContent } from "@/content/site-content";

const facilityIcons = {
  building: Building2,
  book: BookOpen,
  map: MapPin,
  beaker: Beaker,
  coffee: Coffee,
  bus: Bus,
} as const;

export default function About() {
  return (
    <div className="w-full bg-gray-50 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/campus.png`}
            alt="Campus" 
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm mb-6 backdrop-blur-sm"
          >
            <BookOpen className="h-4 w-4 text-accent" />
            {aboutContent.hero.badge}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            {aboutContent.hero.titlePrefix} <span className="text-accent">{aboutContent.hero.titleAccent}</span> {aboutContent.hero.titleSuffix}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-3xl mx-auto font-medium"
          >
            {aboutContent.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-gray-200 shadow-xl bg-white rounded-lg p-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">{aboutContent.mission.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                {aboutContent.mission.text}
              </p>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border border-accent bg-primary text-white shadow-xl rounded-lg p-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">{aboutContent.vision.title}</h2>
              <p className="text-white/80 leading-relaxed text-lg font-medium">
                {aboutContent.vision.text}
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary">{aboutContent.journey.title}</h2>
            <p className="text-gray-600 mt-4 font-medium">{aboutContent.journey.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {aboutContent.journey.timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-xl">{item.title}</h3>
                    <time className="font-display font-bold text-accent text-lg">{item.year}</time>
                  </div>
                  <p className="text-gray-600 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary">{aboutContent.facilities.title}</h2>
            <p className="text-gray-600 mt-4 font-medium">{aboutContent.facilities.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aboutContent.facilities.items.map((fac, i) => {
              const FacilityIcon = facilityIcons[fac.icon];
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center hover:border-primary hover:shadow-md transition-all cursor-default"
              >
                <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-primary">
                  <FacilityIcon className="h-6 w-6" />
                </div>
                <span className="font-bold text-gray-800 text-sm">{fac.label}</span>
              </motion.div>
            )})}
          </div>
        </div>

      </section>
    </div>
  );
}
