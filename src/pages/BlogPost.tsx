
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Layout from '../components/Layout';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch',
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. Staying ahead of these trends is crucial for businesses and developers looking to create modern, efficient, and user-friendly digital experiences.</p>
      
      <h2>1. Progressive Web Applications (PWAs)</h2>
      <p>Progressive Web Applications combine the best of web and mobile apps. They work offline, load quickly, and can be added to a user's home screen, making them accessible and convenient. With the growing importance of mobile-first design, PWAs are becoming increasingly popular.</p>
      
      <h2>2. Serverless Architecture</h2>
      <p>Serverless computing allows developers to build and run applications without thinking about servers. It offers scalability, reduced operational costs, and faster time to market. This trend is gaining momentum as businesses look for more efficient ways to deploy applications.</p>
      
      <h2>3. AI and Machine Learning Integration</h2>
      <p>Artificial Intelligence and Machine Learning are transforming web development by enabling features like chatbots, personalized content recommendations, and predictive user behavior analysis. These technologies enhance user experience and provide valuable insights for businesses.</p>
      
      <h2>4. Voice Search Optimization</h2>
      <p>With the increasing use of voice assistants, optimizing websites for voice search is becoming essential. This involves using natural language processing, focusing on conversational keywords, and ensuring fast loading times for voice search results.</p>
      
      <h2>5. Motion UI and Microinteractions</h2>
      <p>Motion UI and microinteractions enhance user engagement by providing visual feedback and guiding users through their digital journey. These subtle animations and responses create a more intuitive and enjoyable user experience.</p>
      
      <h2>Conclusion</h2>
      <p>Embracing these trends can give businesses a competitive edge in the digital landscape. However, it's important to assess which trends align with your specific business goals and user needs before implementation.</p>
    `,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop',
    date: 'May 15, 2023',
    author: 'John Doe',
    slug: 'future-of-web-development',
    tags: ['Web Development', 'Technology Trends', 'Progressive Web Apps', 'Serverless']
  },
  {
    id: 2,
    title: 'Optimizing E-commerce for Conversion: Best Practices',
    content: `
      <p>In the competitive world of e-commerce, optimizing your online store for conversions is essential for success. A well-optimized e-commerce site not only attracts visitors but also turns them into customers. Here are some best practices to improve your e-commerce conversion rates.</p>
      
      <h2>1. Streamline the Checkout Process</h2>
      <p>A complicated checkout process is one of the leading causes of cart abandonment. Simplify your checkout by reducing the number of steps, offering guest checkout options, and providing multiple payment methods. The easier it is to complete a purchase, the higher your conversion rates will be.</p>
      
      <h2>2. Implement High-Quality Product Images and Videos</h2>
      <p>Since customers can't physically examine products online, high-quality images and videos are crucial. Provide multiple angles, zoom functionality, and lifestyle images showing the product in use. Video demonstrations can further enhance the customer's understanding of the product.</p>
      
      <h2>3. Optimize Product Descriptions</h2>
      <p>Compelling product descriptions that highlight benefits, not just features, can significantly impact conversions. Use clear, concise language and address potential customer concerns or questions. Including specifications, dimensions, and materials also helps customers make informed decisions.</p>
      
      <h2>4. Leverage Social Proof</h2>
      <p>Customer reviews, ratings, and testimonials build trust and credibility. Showcase positive feedback prominently and incorporate user-generated content to provide authentic perspectives on your products.</p>
      
      <h2>5. Personalize the Shopping Experience</h2>
      <p>Personalization, such as product recommendations based on browsing history or previous purchases, can increase conversion rates by making the shopping experience more relevant to individual customers.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing these best practices can significantly improve your e-commerce conversion rates. Remember that optimization is an ongoing process that requires regular testing and refinement based on customer feedback and analytics.</p>
    `,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop',
    date: 'April 28, 2023',
    author: 'Jane Smith',
    slug: 'optimizing-ecommerce-conversion',
    tags: ['E-commerce', 'Conversion Optimization', 'Online Sales', 'Digital Marketing']
  },
  {
    id: 3,
    title: 'Leveraging Machine Learning for Business Intelligence',
    content: `
      <p>Machine Learning (ML) is revolutionizing how businesses gather and analyze data, providing deeper insights and enabling more informed decision-making. When properly implemented, ML can transform business intelligence (BI) processes and create significant competitive advantages.</p>
      
      <h2>1. Predictive Analytics</h2>
      <p>Machine Learning excels at identifying patterns in historical data to predict future outcomes. Businesses can use predictive analytics to forecast sales, anticipate market trends, and identify potential risks before they materialize.</p>
      
      <h2>2. Customer Segmentation and Personalization</h2>
      <p>ML algorithms can analyze customer behavior data to identify distinct segments with similar characteristics and preferences. This enables businesses to create personalized marketing campaigns and product recommendations that resonate with specific customer groups.</p>
      
      <h2>3. Anomaly Detection</h2>
      <p>Machine Learning can automatically detect unusual patterns or outliers in data that might indicate fraud, errors, or new business opportunities. This capability is particularly valuable in finance, cybersecurity, and quality control.</p>
      
      <h2>4. Natural Language Processing for Sentiment Analysis</h2>
      <p>NLP, a branch of ML, allows businesses to analyze customer feedback, social media mentions, and reviews to gauge sentiment and identify areas for improvement. This provides valuable insights into customer satisfaction and brand perception.</p>
      
      <h2>5. Automated Reporting and Visualization</h2>
      <p>ML can automate the process of generating reports and creating visual representations of complex data, making it easier for stakeholders to understand and act on business intelligence.</p>
      
      <h2>Implementation Considerations</h2>
      <p>While the benefits of ML for business intelligence are substantial, successful implementation requires quality data, appropriate algorithms, skilled personnel, and integration with existing systems. Starting with clearly defined business problems and measurable goals is essential for maximizing ROI.</p>
      
      <h2>Conclusion</h2>
      <p>Machine Learning is transforming business intelligence from descriptive reporting to predictive and prescriptive analytics. By leveraging ML technologies, businesses can gain deeper insights, make more informed decisions, and ultimately drive growth and innovation.</p>
    `,
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2670&auto=format&fit=crop',
    date: 'April 10, 2023',
    author: 'Michael Johnson',
    slug: 'machine-learning-business-intelligence',
    tags: ['Machine Learning', 'Business Intelligence', 'Data Analysis', 'AI']
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <Layout>
        <div className="container-custom mx-auto py-32">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Post Not Found</h1>
            <p className="body-md mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/#blog" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover-lift"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          
          <div className="container-custom mx-auto h-full flex items-end">
            <div className="relative pb-8 max-w-4xl">
              <Link 
                to="/#blog" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-white/90 px-4 py-2 rounded-full mb-4 hover-lift"
              >
                <ArrowLeft size={14} />
                Back to Blog
              </Link>
              <h1 className="heading-lg text-white mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="container-custom mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={16} className="text-primary" />
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <aside className="neo-card p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.id !== post.id)
                    .map(recentPost => (
                      <Link 
                        key={recentPost.id}
                        to={`/blog/${recentPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
                            <img 
                              src={recentPost.image} 
                              alt={recentPost.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-standard">
                              {recentPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {recentPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 bg-secondary hover:bg-secondary/80 rounded-full text-sm cursor-pointer transition-standard"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
