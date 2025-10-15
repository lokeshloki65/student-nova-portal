🚀 Student Nova Portal
Student Nova Portal is a modern, all-in-one management system designed for educational institutions. Built with Next.js and Firebase, it provides separate, feature-rich dashboards for students and administrators to streamline academic information and communication.

✨ Key Features
The portal is intelligently designed with distinct functionalities for both students and administrators.

🧑‍🎓 For Students
The student dashboard provides a centralized view of all essential academic information.

Personalized Dashboard: A clean and intuitive interface to view critical updates at a glance.

Announcements: View important notices and updates from the administration, intelligently prioritized by the AI.

Attendance Tracking: Check your attendance records subject-wise with clear visual indicators.

Academic Marks: Access your internal and semester exam scores as soon as they are published.

Class Timetable: View your weekly class schedule in an easy-to-read format.

👑 For Administrators
The admin dashboard is a powerful control center for managing the entire student lifecycle.

Central Management Dashboard: A multi-tabbed interface to manage all aspects of the portal.

Student & Admin Management: Add, view, and manage student and administrator accounts with ease.

Data Entry Modules: Dedicated interfaces for uploading and managing student attendance, marks, and class timetables.

AI-Powered Announcement Prioritizer: An intelligent tool that uses Google's Gemini AI to automatically rank the importance of announcements, ensuring students see the most critical information first.

🛠️ Tech Stack
Area	Technology / Library
Framework	Next.js, React.js
Language	TypeScript
Backend	Google Firebase (Firestore, Authentication)
AI	Google Gemini, Genkit Framework
Styling	Tailwind CSS
UI	shadcn/ui, Radix UI, Lucide React
Forms	React Hook Form, Zod

Export to Sheets
🚀 Getting Started
To get a local copy up and running, follow these steps.

Prerequisites
Node.js (v18 or later)

npm, yarn, or pnpm

A Firebase project with Firestore and Authentication (Email/Password) enabled.

Installation & Setup
Clone the Repository:

Bash

git clone https://github.com/your-username/student-nova-portal.git
cd student-nova-portal
Install Dependencies:

Bash

npm install
Configure Environment Variables:

Create a .env.local file in the root directory.

Add your Firebase project configuration keys. You can find these in your Firebase project settings under "Web app" configuration.

Code snippet

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
Add your Google Gemini API key for the Genkit features.

Code snippet

GOOGLE_GENAI_API_KEY=your_gemini_api_key
Run the Genkit Developer UI (for AI features):

In a separate terminal, start the Genkit development server.

Bash

npx genkit start
Run the Next.js Development Server:

In your main terminal, run the application.

Bash

npm run dev
Open http://localhost:3000 in your browser to see the result.
