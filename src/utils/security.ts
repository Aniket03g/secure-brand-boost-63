
/**
 * Security utilities to prevent spam and protect website
 */

// Rate limiting for form submissions
export const checkRateLimit = (key: string, limit: number, timeWindow: number): boolean => {
  // In a real implementation, this would use localStorage or sessionStorage
  // but here we'll use a mock implementation for demonstration
  const now = Date.now();
  const storedData = localStorage.getItem(`rateLimit_${key}`);
  
  if (!storedData) {
    // First request, store timestamp
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify({
      count: 1,
      timestamp: now
    }));
    return true;
  }
  
  const data = JSON.parse(storedData);
  
  // Check if time window has passed
  if (now - data.timestamp > timeWindow) {
    // Reset counter
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify({
      count: 1,
      timestamp: now
    }));
    return true;
  }
  
  // Check if limit exceeded
  if (data.count >= limit) {
    return false;
  }
  
  // Update counter
  localStorage.setItem(`rateLimit_${key}`, JSON.stringify({
    count: data.count + 1,
    timestamp: data.timestamp
  }));
  
  return true;
};

// Email validation with strict rules
export const isValidEmail = (email: string): boolean => {
  const strictEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return strictEmailRegex.test(email);
};

// Check for common spam patterns in message
export const containsSpamPatterns = (message: string): boolean => {
  const spamPatterns = [
    /buy cheap/i,
    /discount/i,
    /free offer/i,
    /lottery/i,
    /\bvigra\b/i,
    /\bcialis\b/i,
    /\bcasino\b/i,
    /\bpoker\b/i,
    /\bviagra\b/i,
    /\brolex\b/i,
    /\bloan\b/i,
    /\bcredit\b/i,
    /\bdebt\b/i,
    /\bmillion\b/i,
    /\bdollar\b/i,
    /http:\/\//i,
    /https:\/\//i,
    /www\./i,
  ];
  
  return spamPatterns.some(pattern => pattern.test(message));
};

// Check for suspicious behavior (too many links, etc)
export const isSuspiciousMessage = (message: string): boolean => {
  // Too many links
  const linkCount = (message.match(/http/g) || []).length;
  if (linkCount > 2) return true;
  
  // Too many capital letters (shouting)
  const capitalRatio = message.split('').filter(char => char >= 'A' && char <= 'Z').length / message.length;
  if (capitalRatio > 0.5 && message.length > 20) return true;
  
  // Excessive punctuation
  const excessivePunctuation = /[!?]{3,}/.test(message);
  if (excessivePunctuation) return true;
  
  return false;
};

// Honeypot field check (hidden field that should be empty)
export const isHoneypotFilled = (value: string): boolean => {
  return value.length > 0;
};
