import { redirect } from "next/navigation";
import { checkUser } from "@/lib/checkUser";
import { currentUser } from "@clerk/nextjs/server";

export default async function OnboardingPage() {
  try {
    // Check if user exists in database, create if not
    const user = await checkUser();
    
    if (user) {
      // User exists, redirect to dashboard
      redirect("/dashboard");
    }

    // If we reach here, something went wrong with user creation
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Setting up your account...</h1>
          <p className="text-gray-600">Please wait while we create your account.</p>
          <p className="text-sm text-red-500 mt-4">If this page doesn't redirect automatically, please refresh.</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Onboarding error:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Error setting up account</h1>
          <p className="text-gray-600">Please try refreshing the page or contact support.</p>
          <p className="text-sm text-red-500 mt-4">{error.message}</p>
        </div>
      </div>
    );
  }
} 