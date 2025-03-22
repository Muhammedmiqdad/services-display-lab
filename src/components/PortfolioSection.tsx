
import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2940&auto=format&fit=crop',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring secure payment processing and inventory management.',
    tags: ['E-commerce', 'React', 'Node.js']
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    category: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    description: 'Interactive dashboard for visualizing complex datasets, enabling users to gain insights through customizable charts and filters.',
    tags: ['Data Visualization', 'D3.js', 'Python']
  },
  {
    id: 3,
    title: 'Machine Learning Model',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop',
    description: 'Predictive analytics model that uses historical data to forecast market trends with high accuracy.',
    tags: ['Machine Learning', 'Python', 'TensorFlow']
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2940&auto=format&fit=crop',
    description: 'Complete redesign of a corporate website, focusing on user experience, modern design principles, and conversion optimization.',
    tags: ['Web Design', 'UX/UI', 'Responsive']
  },
  {
    id: 5,
    title: 'Marketing Analytics Platform',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    description: 'Analytics platform that helps marketing teams track campaign performance, customer engagement, and ROI across multiple channels.',
    tags: ['Analytics', 'Marketing', 'Dashboard']
  },
  {
    id: 6,
    title: 'Custom CRM System',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2874&auto=format&fit=crop',
    description: 'Bespoke CRM system tailored to a client\'s specific workflow, integrating with existing systems and improving team productivity.',
    tags: ['CRM', 'Custom Software', 'Integration']
  }
];

// Category filter options
const categories = ['All', 'Web Development', 'Web Design', 'Data Analysis', 'Machine Learning', 'Digital Marketing', 'Software Development'];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(4);

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Load more items
  const handleLoadMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, filteredItems.length));
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="chip mb-3">Portfolio</div>
          <h2 className="heading-lg mb-4">Recent Projects</h2>
          <p className="body-md text-muted-foreground">
            Explore a selection of my recent work across various industries and technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-standard ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleItems(4);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.slice(0, visibleItems).map((item, index) => (
            <div key={item.id} className="fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="group h-full overflow-hidden rounded-xl neo-card flex flex-col hover-lift">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 text-primary rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="heading-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-standard"
            >
              Load More
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
