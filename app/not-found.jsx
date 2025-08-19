import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            404
          </h1>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
        </div>

        {/* Main content */}
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
          Oops! The page you're looking for seems to have wandered off. 
          Don't worry, we'll help you find your way back.
        </p>

        {/* Helpful suggestions */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
            What you can do:
          </h3>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              Check the URL for typos
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              Use the navigation menu above
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              Go back to the previous page
            </li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              Return Home
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Go to Dashboard
            </Button>
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-8">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
}
