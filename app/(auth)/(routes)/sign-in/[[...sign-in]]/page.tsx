import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn
  appearance={{
    elements: {
      formButtonPrimary:
        "bg-secondary3 hover:bg-secondary1 text-sm normal-case",
    },

    
  }}
   />;
} 