
// This is a re-export file to maintain compatibility with shadcn patterns
import { toast } from "sonner";
import { useToast as originalUseToast } from "@/hooks/use-toast";

export { originalUseToast as useToast, toast };
