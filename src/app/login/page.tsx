import { Metadata } from "next";
import LoginForm from "../../components/LoginForm";

export const metadata: Metadata = {
  title: "Login | Make My Shop",
  description: "Login to your Make My Shop account.",
};

// This page is a server component by default in Next.js app directory.
// It renders the login form and handles no client-side logic directly.
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white dark:bg-black">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
} 