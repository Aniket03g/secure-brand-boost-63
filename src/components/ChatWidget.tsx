
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
  text: "Hello! I'm the V Technologies assistant. How can I help you today? Feel free to ask about our services, products, or general inquiries.",
  isBot: true,
  timestamp: new Date(),
};

const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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

    // Simulate bot response - In a real implementation, this would call an AI service
    setTimeout(() => {
      const botResponse: Message = {
        text: "Thank you for your message. I understand you're interested in our services. For specific inquiries, please use the contact form above, and our team will get back to you shortly.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full p-0 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
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
                  <div className="mt-1 h-8 w-8 rounded-full bg-secondary p-2">
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
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground ml-auto"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-secondary p-2">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-secondary px-3 py-2">
                    Typing...
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
