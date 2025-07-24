import { LoginForm } from '@/components/auth/login-form';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-8">
        <div className="mx-auto w-full max-w-md">
            <div className="mb-8 text-center">
                <div className="mb-4 flex justify-center">
                    <GraduationCap size={64} className="text-primary"/>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Student Central Hub
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                Your one-stop portal for college life.
                </p>
            </div>
            <LoginForm />
        </div>
      </div>
       <div className="relative hidden lg:block">
        <Image
          src="https://placehold.co/1080x1920.png"
          alt="University campus"
          layout="fill"
          objectFit="cover"
          data-ai-hint="university campus"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </main>
  );
}
