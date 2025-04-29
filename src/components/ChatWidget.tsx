
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  text: "Hello! I'm the V Technologies assistant. How can I help you today? You can ask me about our IT infrastructure services, hardware solutions, networking, cloud services, Microsoft solutions, security services, IT consultancy, or software development.",
  isBot: true,
  timestamp: new Date(),
};

// Knowledge base about V Technologies
const KNOWLEDGE_BASE = {
  company: {
    name: "V Technologies",
    location: "based in Pune, India",
    description: "A system integration company providing global IT infrastructure solutions and consultancy services",
    focus: "Specializes in Intel based Hardware solutions, Design, implementations of Storage & Networking solutions for e-Business Applications, Mobile Computing, GroupWare, Workflow Automation, CAD/CAM/CAE applications and Web Technologies."
  },
  services: [
    {
      name: "Hardware Solutions",
      details: "Complete range of hardware including laptops, desktops, servers, and all-in-one PCs from brands like HP, Dell, Lenovo, and Acer."
    },
    {
      name: "Security Services",
      details: "Comprehensive security solutions including antiviruses, firewalls, and network security from providers like Kaspersky, McAfee, Norton, and Bitdefender."
    },
    {
      name: "Cloud Services",
      details: "Cloud computing solutions, storage, and infrastructure services using platforms like AWS, Microsoft Azure, and Google Cloud."
    },
    {
      name: "Microsoft Solutions",
      details: "Licensed Microsoft products including Windows, Office 365, Azure Services, Dynamics 365, and enterprise solutions."
    },
    {
      name: "IT Infrastructure",
      details: "Design and implementation of robust IT infrastructure with server, network, and storage solutions from vendors like Dell, HP, IBM, and Cisco."
    },
    {
      name: "Networking Solutions",
      details: "Complete networking solutions with hardware from top vendors like Cisco, HP, Juniper, and more."
    },
    {
      name: "IT Consultancy",
      details: "Expert advice and strategic planning for IT requirements, including strategic IT planning, business analysis, and project management."
    },
    {
      name: "Software Development",
      details: "Custom software development for web, mobile, and enterprise solutions using technologies like React, Node.js, Flutter, and more."
    }
  ],
  certificates: [
    {
      name: "AMPLIFY Impact HP Partner Program 2025",
      details: "Recognized as an HP AMPLIFY Impact Partner for 2025, acknowledging commitment to sustainable practices, digital transformation excellence, and customer value in delivering HP solutions."
    }
  ],
  vision: "To be amongst the top vendors of choice in the national & international market as a strong and viable player for delivering enterprise grade solutions in the arena of E-Business, Collaborative Computing and Enterprise Automation"
};

const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const generateResponse = (query: string): string => {
    // Convert query to lowercase for easier matching
    const lowerQuery = query.toLowerCase();
    
    // Check for greetings
    if (/^(hi|hello|hey|greetings)/.test(lowerQuery)) {
      return "Hello! How can I help you today? Feel free to ask about our services, company information, or anything else you'd like to know.";
    }
    
    // Check for company information queries
    if (lowerQuery.includes("company") || lowerQuery.includes("about") || lowerQuery.includes("who are you")) {
      return `${KNOWLEDGE_BASE.company.name} is ${KNOWLEDGE_BASE.company.description} ${KNOWLEDGE_BASE.company.location}. We ${KNOWLEDGE_BASE.company.focus}`;
    }
    
    // Check for vision queries
    if (lowerQuery.includes("vision") || lowerQuery.includes("mission") || lowerQuery.includes("goal")) {
      return `Our vision is: ${KNOWLEDGE_BASE.vision}`;
    }
    
    // Check for certificate queries
    if (lowerQuery.includes("certificate") || lowerQuery.includes("certification") || lowerQuery.includes("award") || lowerQuery.includes("achievement") || lowerQuery.includes("hp partner")) {
      const cert = KNOWLEDGE_BASE.certificates[0];
      return `We are proud of our ${cert.name}. This means ${cert.details}`;
    }
    
    // Check for services
    if (lowerQuery.includes("service") || lowerQuery.includes("offering") || lowerQuery.includes("provide") || lowerQuery.includes("work")) {
      return "We offer a wide range of services including Hardware Solutions, Security Services, Cloud Services, Microsoft Solutions, IT Infrastructure, Networking Solutions, IT Consultancy, and Software Development. Which service would you like to know more about?";
    }
    
    // Check for specific service inquiries
    for (const service of KNOWLEDGE_BASE.services) {
      if (lowerQuery.includes(service.name.toLowerCase()) || 
          (service.name === "Hardware Solutions" && (lowerQuery.includes("hardware") || lowerQuery.includes("laptop") || lowerQuery.includes("desktop") || lowerQuery.includes("server"))) ||
          (service.name === "Security Services" && (lowerQuery.includes("security") || lowerQuery.includes("antivirus") || lowerQuery.includes("firewall"))) ||
          (service.name === "Cloud Services" && (lowerQuery.includes("cloud") || lowerQuery.includes("aws") || lowerQuery.includes("azure"))) ||
          (service.name === "Microsoft Solutions" && (lowerQuery.includes("microsoft") || lowerQuery.includes("windows") || lowerQuery.includes("office"))) ||
          (service.name === "IT Infrastructure" && (lowerQuery.includes("infrastructure") || lowerQuery.includes("server setup"))) ||
          (service.name === "Networking Solutions" && (lowerQuery.includes("network") || lowerQuery.includes("lan") || lowerQuery.includes("wan") || lowerQuery.includes("wifi"))) ||
          (service.name === "IT Consultancy" && (lowerQuery.includes("consult") || lowerQuery.includes("advice") || lowerQuery.includes("planning"))) ||
          (service.name === "Software Development" && (lowerQuery.includes("software") || lowerQuery.includes("development") || lowerQuery.includes("app") || lowerQuery.includes("web")))) {
        return `Our ${service.name} include: ${service.details}`;
      }
    }
    
    // Check for contact related queries
    if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("call") || lowerQuery.includes("email") || lowerQuery.includes("phone")) {
      return "You can contact us through the Contact page on our website. Our team will get back to you promptly.";
    }
    
    // Default response for unrecognized queries
    return "Thank you for your question. For detailed information about this topic, please use our contact form or call us directly. Our experts will be happy to provide you with the specific information you need.";
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const botResponse: Message = {
        text: generateResponse(userMessage.text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full p-0 shadow-lg z-50 bg-vtech-blue hover:bg-vtech-darkBlue"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[95%] sm:w-[400px] md:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            V Technologies Assistant
          </SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex h-[calc(100vh-12rem)] flex-col gap-4">
          <ScrollArea className="flex-1 pr-4">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-2 text-sm",
                    message.isBot ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "mt-1 h-8 w-8 rounded-full p-2",
                    message.isBot ? "bg-vtech-blue text-white" : "bg-gray-200"
                  )}>
                    {message.isBot ? (
                      <Bot className="h-4 w-4" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 max-w-[80%]",
                      message.isBot
                        ? "bg-vtech-blue text-white"
                        : "bg-gray-200 text-gray-800 ml-auto"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-vtech-blue text-white p-2">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-vtech-blue text-white px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 rounded-full bg-white animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Textarea
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="min-h-[50px] resize-none"
              maxLength={500}
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className="bg-vtech-blue hover:bg-vtech-darkBlue"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatWidget;
