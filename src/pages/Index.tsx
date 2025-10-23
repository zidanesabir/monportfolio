import React, { Suspense, lazy } from "react";
import Header from "../components/Header";


const Hero = lazy(() => import("../components/Hero")); 
const About = lazy(() => import("../components/About"));
const Education = lazy(() => import("../components/Education"));
const Experience = lazy(() => import("../components/Experience"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));


const SectionSkeleton = () => (
  <div className="flex h-screen w-full items-center justify-center bg-amber-900">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-yellow-400"></div>
  </div>
);

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      <main>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Hero /> 
          <About />
          <Education />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  );
};

export default Index;