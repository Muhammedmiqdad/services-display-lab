
import React from 'react';
import { Code, ShoppingCart, LineChart, Brain, Rocket, Database, Smartphone, Globe, Layout } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <div className="fade-in-element group hover-lift" style={{ animationDelay: `${delay}ms` }}>
    <div className="h-full neo-card p-6 md:p-8">
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-standard">
        {icon}
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout size={24} />,
      title: 'Website Design & Development',
      description: 'Custom, responsive websites built with modern technologies that provide exceptional user experiences.',
      delay: 100
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with secure payment processing, inventory management, and customer portals.',
      delay: 200
    },
    {
      icon: <Rocket size={24} />,
      title: 'Landing Page Optimization',
      description: 'High-converting landing pages designed to increase your conversion rates and grow your business.',
      delay: 300
    },
    {
      icon: <Globe size={24} />,
      title: 'Digital Marketing Services',
      description: 'Strategic marketing campaigns to increase visibility, engagement, and drive qualified traffic to your site.',
      delay: 400
    },
    {
      icon: <LineChart size={24} />,
      title: 'Data Analysis',
      description: 'Advanced data analysis to uncover insights, identify patterns, and inform strategic business decisions.',
      delay: 500
    },
    {
      icon: <Brain size={24} />,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and AI implementations to automate processes and extract value from your data.',
      delay: 600
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Responsiveness',
      description: 'Ensuring your digital products work flawlessly across all devices and screen sizes.',
      delay: 700
    },
    {
      icon: <Database size={24} />,
      title: 'Database Solutions',
      description: 'Efficient database design, implementation, and optimization for reliable data storage and retrieval.',
      delay: 800
    },
    {
      icon: <Code size={24} />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to meet your specific business requirements and challenges.',
      delay: 900
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <div className="chip mb-3">Services</div>
          <h2 className="heading-lg mb-4">Comprehensive Technical Solutions</h2>
          <p className="body-md text-muted-foreground">
            Expert services to help you build, optimize, and grow your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
