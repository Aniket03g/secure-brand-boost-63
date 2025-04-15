
import { useState } from 'react';
import { Shield, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { checkRateLimit, isValidEmail, containsSpamPatterns, isSuspiciousMessage, isHoneypotFilled } from '../utils/security';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  captchaResponse: string;
  honeypot: string; // Hidden field for spam detection
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  captcha?: string;
}

const SecureContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    captchaResponse: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaValue, setCaptchaValue] = useState<number[]>([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  ]);
  const [captchaInput, setCaptchaInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (parseInt(captchaInput) !== captchaValue[0] + captchaValue[1]) {
      newErrors.captcha = 'Please solve the calculation correctly';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const refreshCaptcha = () => {
    setCaptchaValue([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ]);
    setCaptchaInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check (5 submissions per 10 minutes)
    if (!checkRateLimit('contact_form', 5, 10 * 60 * 1000)) {
      setErrors({...errors, captcha: 'Too many attempts. Please try again later.'});
      return;
    }
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setFormValues({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          captchaResponse: '',
          honeypot: ''
        });
        
        refreshCaptcha();
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center mb-6">
        <Shield className="text-vtech-blue mr-2" size={24} />
        <h3 className="text-2xl font-semibold">Secure Contact</h3>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md flex items-center">
          <CheckCircle2 size={20} className="mr-2 flex-shrink-0" />
          <span>Your message has been sent successfully. We'll get back to you soon!</span>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md flex items-center">
          <AlertCircle size={20} className="mr-2 flex-shrink-0" />
          <span>There was an error sending your message. Please try again later.</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-vtech-blue focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-vtech-blue focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vtech-blue focus:border-transparent"
              placeholder="Your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formValues.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vtech-blue focus:border-transparent"
              placeholder="Your company name"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-vtech-blue focus:border-transparent ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your requirements..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
        
        {/* CAPTCHA */}
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Security Verification *
          </label>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded border border-gray-300">
              {captchaValue[0]} + {captchaValue[1]} = ?
            </div>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className={`w-20 px-4 py-2 border rounded-md focus:ring-2 focus:ring-vtech-blue focus:border-transparent ${
                errors.captcha ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder=""
            />
            <button
              type="button"
              onClick={refreshCaptcha}
              className="text-vtech-blue hover:text-vtech-darkBlue font-medium"
            >
              Refresh
            </button>
          </div>
          {errors.captcha && (
            <p className="mt-2 text-sm text-red-600">{errors.captcha}</p>
          )}
          <p className="text-xs text-gray-500 mt-2">
            This helps us prevent spam submissions.
          </p>
        </div>
        
        {/* Honeypot field - hidden from users but bots will fill it */}
        <div className="hidden">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formValues.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-vtech-blue text-white px-6 py-3 rounded-md font-medium hover:bg-vtech-darkBlue transition-colors disabled:opacity-70 flex items-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Shield size={18} className="mr-2" />
                Send Secure Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecureContactForm;
