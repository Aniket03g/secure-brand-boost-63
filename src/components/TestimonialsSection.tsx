
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      text: "V Technologies has been instrumental in upgrading our IT infrastructure. Their expertise and professionalism are unmatched, and they've helped us seamlessly transition to a more secure and efficient system.",
      author: "Rajiv Kumar",
      role: "CIO",
      company: "Manufacturing Company",
      rating: 5
    },
    {
      text: "We've been working with V Technologies for over 3 years now, and they've consistently delivered high-quality IT consultancy services. Their team is responsive, knowledgeable, and always goes above and beyond.",
      author: "Priya Singh",
      role: "IT Manager",
      company: "Financial Services",
      rating: 5
    },
    {
      text: "The security solutions provided by V Technologies have been a game-changer for our organization. We now have peace of mind knowing our data is protected with top-tier security systems.",
      author: "Anil Sharma",
      role: "Director of Technology",
      company: "Healthcare Provider",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with V Technologies.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-lg shadow-xl p-8 md:p-12 text-white">
            <div className="absolute top-6 left-6">
              <Quote size={42} className="text-white opacity-20" />
            </div>
            
            <div className="mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={`inline-block mr-1 ${
                    i < testimonials[currentIndex].rating 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-white/40'
                  }`} 
                />
              ))}
            </div>
            
            <p className="text-xl italic mb-8 relative z-10">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="relative z-10">
              <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
              <p className="text-white/90">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-accent' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16">
            <button
              onClick={prevTestimonial}
              className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 md:translate-x-16">
            <button
              onClick={nextTestimonial}
              className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
