
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    testimonial: 'Working with this team transformed our online presence. Their expertise in web development and e-commerce solutions helped us increase our sales by 45% in just three months.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director, GlobalBrand',
    image: 'https://randomuser.me/api/portraits/men/81.jpg',
    rating: 5,
    testimonial: 'The data analysis services provided valuable insights that drove our marketing strategy. The results exceeded our expectations with a 60% increase in conversion rates.'
  },
  {
    id: 3,
    name: 'Elisa Rodriguez',
    position: 'CTO, InnovateNow',
    image: 'https://randomuser.me/api/portraits/women/37.jpg',
    rating: 5,
    testimonial: 'Their machine learning solution automated our data processing tasks, saving us countless hours and reducing errors. The system they built continues to be a crucial part of our operations.'
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Founder, E-Commerce Store',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    rating: 5,
    testimonial: 'The e-commerce platform they developed for us is robust, user-friendly, and has significantly improved our customer experience. Sales have doubled since the launch.'
  },
  {
    id: 5,
    name: 'Amanda Thompson',
    position: 'Digital Manager, RetailPlus',
    image: 'https://randomuser.me/api/portraits/women/39.jpg',
    rating: 5,
    testimonial: 'Their landing page optimization services completely transformed our conversion rates. The attention to detail and focus on user experience was exactly what we needed.'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="chip mb-3">Testimonials</div>
          <h2 className="heading-lg mb-4">What Clients Say</h2>
          <p className="body-md text-muted-foreground">
            Feedback from clients who have experienced the quality of our services
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials
                      .slice(
                        slideIndex * itemsPerView, 
                        Math.min((slideIndex + 1) * itemsPerView, testimonials.length)
                      )
                      .map((testimonial) => (
                        <div key={testimonial.id} className="h-full">
                          <div className="h-full neo-card p-6 md:p-8 flex flex-col">
                            <div className="flex items-center mb-6">
                              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                              </div>
                            </div>
                            <div className="flex mb-4">
                              {renderStars(testimonial.rating)}
                            </div>
                            <p className="text-muted-foreground flex-grow">
                              "{testimonial.testimonial}"
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-standard"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2 mx-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? 'w-6 bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-standard"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
