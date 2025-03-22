
import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the emerging technologies and practices that are shaping the future of web development and how they can benefit your business.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop',
    date: 'May 15, 2023',
    author: 'John Doe',
    slug: 'future-of-web-development'
  },
  {
    id: 2,
    title: 'Optimizing E-commerce for Conversion: Best Practices',
    excerpt: 'Learn the proven strategies and techniques to improve your e-commerce site\'s conversion rates and boost your online sales.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop',
    date: 'April 28, 2023',
    author: 'Jane Smith',
    slug: 'optimizing-ecommerce-conversion'
  },
  {
    id: 3,
    title: 'Leveraging Machine Learning for Business Intelligence',
    excerpt: 'Discover how machine learning can transform your business data into actionable insights and drive strategic decision-making.',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2670&auto=format&fit=crop',
    date: 'April 10, 2023',
    author: 'Michael Johnson',
    slug: 'machine-learning-business-intelligence'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="chip mb-3">Blog</div>
          <h2 className="heading-lg mb-4">Latest Insights</h2>
          <p className="body-md text-muted-foreground">
            Stay updated with the latest trends and insights in technology and digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`} 
              className="fade-in-element group h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <article className="h-full neo-card overflow-hidden rounded-xl flex flex-col hover-lift">
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="heading-sm mb-3 group-hover:text-primary transition-standard">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-primary font-medium">
                      Read More 
                      <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-standard hover-lift"
          >
            View All Posts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
