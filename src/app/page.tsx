import { LoginForm } from '@/components/auth/login-form';
import { GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4">
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-background bg-[url('https://placehold.co/1920x1080.png')] bg-cover bg-center"
        data-ai-hint="college campus"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="mb-8 text-center text-white">
        <div className="mb-4 flex justify-center">
            <GraduationCap size={64} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Student Central Hub
        </h1>
        <p className="mt-2 text-lg text-neutral-200">
          Your one-stop portal for college life.
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
