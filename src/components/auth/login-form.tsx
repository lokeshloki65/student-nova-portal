"use client";

import { useRouter } from "next/navigation";
import { BookUser, UserCog } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

export function LoginForm() {
  const router = useRouter();

  const handleLogin = (role: 'student' | 'admin') => {
    toast({
      title: `Logged in as ${role}`,
      description: `Redirecting to ${role} dashboard...`,
    });
    router.push(`/${role}/dashboard`);
  };

  return (
    <Tabs defaultValue="student" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">
          <BookUser className="mr-2" />
          Student
        </TabsTrigger>
        <TabsTrigger value="admin">
          <UserCog className="mr-2" />
          Admin
        </TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <Card>
          <CardHeader>
            <CardTitle>Student Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student-email">Email</Label>
              <Input id="student-email" type="email" placeholder="lokesh.kumar@university.edu" defaultValue="lokesh.kumar@university.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-password">Password</Label>
              <Input id="student-password" type="password" defaultValue="password123" />
            </div>
            <Button onClick={() => handleLogin('student')} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="admin">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Use your administrator account to manage the portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-email">Email</Label>
              <Input id="admin-email" type="email" placeholder="admin@university.edu" defaultValue="e.reed@university.edu"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <Input id="admin-password" type="password" defaultValue="adminpass" />
            </div>
            <Button onClick={() => handleLogin('admin')} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
