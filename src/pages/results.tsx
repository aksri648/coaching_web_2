import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useResults } from "@/hooks/use-coaching-data";
import { Trophy, Medal } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resultsContent } from "@/content/site-content";

export default function Results() {
  const { data: results, isLoading } = useResults();
  const [activeExam, setActiveExam] = useState("All");

  const filteredResults = results?.filter(
    r => activeExam === "All" || r.exam === activeExam || (activeExam === "Foundation" && !r.exam.includes("JEE") && !r.exam.includes("NEET"))
  );

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <Trophy className="h-12 w-12 text-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            {resultsContent.hero.titlePrefix} <span className="text-accent">{resultsContent.hero.titleAccent}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            {resultsContent.hero.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Total Selections Stats Banner */}
      <div className="bg-secondary border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-around items-center gap-8 text-center">
          {resultsContent.selectionStats.map((stat, index) => (
            <div key={stat.label} className="contents">
              <div>
                <div className="text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-bold text-gray-600 uppercase">{stat.label}</div>
              </div>
              {index < resultsContent.selectionStats.length - 1 && (
                <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Filters */}
        <div className="flex justify-center mb-16">
          <Tabs defaultValue="All" onValueChange={setActiveExam} className="w-full max-w-3xl">
            <TabsList className="flex flex-wrap h-auto bg-white p-1 border border-gray-200 shadow-sm rounded-md justify-center gap-2">
              {resultsContent.exams.map(exam => (
                <TabsTrigger
                  key={exam}
                  value={exam}
                  className="px-6 py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white rounded-sm transition-all"
                >
                  {exam}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Results Grid */}
        <div className="mb-24">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="h-80 bg-gray-100 border border-gray-200 animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredResults?.map((result, i) => (
                  <motion.div
                    key={result.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <Card className="h-full border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-visible rounded-lg">
                      {/* Decorative Medals based on rank */}
                      {(result.rank.includes("1 ") || result.rank === "AIR 1" || result.rank.includes("AIR 5")) && (
                        <div className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg z-20">
                          <Medal className="h-6 w-6" />
                        </div>
                      )}

                      <CardContent className="p-6 flex flex-col items-center text-center pt-8">
                        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-accent to-primary mb-6">
                          <img src={result.imageUrl} alt={result.name} className="w-full h-full object-cover rounded-full border-4 border-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.name}</h3>
                        <Badge variant="secondary" className="mb-4 font-bold bg-secondary text-primary">
                          {result.exam} {result.year}
                        </Badge>
                        
                        <div className="w-full bg-gray-50 border border-gray-100 rounded-md py-3 mt-auto">
                          <div className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-wider">Rank Achieved</div>
                          <div className="text-3xl font-black text-accent font-display tracking-tight">{result.rank}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Results Table Section */}
        <div className="mt-24 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-primary">{resultsContent.growthSection.title}</h2>
            <p className="text-gray-600 mt-2 font-medium">{resultsContent.growthSection.subtitle}</p>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  {resultsContent.growthSection.headers.map((header) => (
                    <TableHead key={header} className={`font-bold text-gray-900 ${header === "Year" ? "" : "text-center"}`}>
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultsContent.growthSection.rows.map((row, rowIndex) => (
                  <TableRow key={row[0]}>
                    {row.map((cell, cellIndex) => (
                      <TableCell
                        key={`${row[0]}-${cellIndex}`}
                        className={`${cellIndex === 0 ? "font-bold" : "text-center font-medium"} ${rowIndex === 0 && cellIndex === row.length - 1 ? "text-accent font-bold" : ""}`}
                      >
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </div>
  );
}
