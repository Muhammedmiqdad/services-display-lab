
import React from 'react';
import { ChevronRight, Code, Terminal, LineChart, ShoppingCart, Layout, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="fade-in-element">
            <div className="chip mb-3">Technical Professional</div>
            <h1 className="heading-xl mb-6">
              Modern Solutions for the Digital World
            </h1>
            <p className="body-lg mb-8 text-muted-foreground max-w-lg">
              Comprehensive technical services tailored to elevate your digital presence. From web development to machine learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-lift"
              >
                Get Started
                <ChevronRight size={16} />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover-lift"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative slide-up-element">
            <div className="aspect-[4/3] relative">
              {/* Abstract graphic element */}
              <div className="absolute inset-0 z-10 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                <div className="glass-card col-span-1 row-span-1 flex items-center justify-center p-6 animate-float">
                  <Code size={32} className="text-primary" />
                </div>
                <div className="glass-card col-span-1 row-span-1 flex items-center justify-center p-6 animate-float" style={{animationDelay: '0.2s'}}>
                  <Layout size={32} className="text-primary" />
                </div>
                <div className="glass-card col-span-1 row-span-1 flex items-center justify-center p-6 animate-float" style={{animationDelay: '0.4s'}}>
                  <ShoppingCart size={32} className="text-primary" />
                </div>
                <div className="glass-card col-span-1 row-span-1 flex items-center justify-center p-6 animate-float" style={{animationDelay: '0.6s'}}>
                  <Terminal size={32} className="text-primary" />
                </div>
                <div className="glass-card col-span-1 row-span-1 flex items-center justify-center p-6 animate-float" style={{animationDelay: '0.8s'}}>
                  <Database size={32} className="text-primary" />
                </div>
                <div className="glass-card col-span-1 row-span-1 flex items-center justify-center p-6 animate-float" style={{animationDelay: '1s'}}>
                  <LineChart size={32} className="text-primary" />
                </div>
              </div>
              
              {/* Background element */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl animate-pulse-soft"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[60%] h-[60%] bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
