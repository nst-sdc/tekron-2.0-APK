# Tekron @ NST - The Ultimate Tech Showdown

Tekron is the flagship tech fest at *Newton School of Technology - Pune*. This app is your digital pass to the chaos, code, and creativity. We've built a backend with strict RBAC and a React Native frontend for all you Hackers and Ops.

## Features

### Authentication & Roles
- **Automatic Role Assignment**: Your fate is sealed by your email domain:
  - `*@superadmin.com` → **God Mode (SuperAdmin)**
  - `*@admin.com` → **Ops (Admin)**
  - Others → **Hacker (Participant)**
- **Secure Login**: JWT-based auth. No imposters allowed.
- **No Public Registration**: Invite-only. If you're in, you're in.

### Hacker Features (Participants)
•⁠  ⁠*Unapproved Access*:
  - View your *Identity Matrix (QR Code)*.
  - Check the *Battleground Map* (Venue).
  - Locked out of the cool stuff until Ops approves you.
•⁠  ⁠*Approved Access*:
  - *Dashboard*: The Mission Control. Schedule, loot, and intel.
  - *Alerts*: Direct comms from the Ops team.
  - *Profile*: Your digital footprint.

### Ops Features (Admins)
•⁠  ⁠*Dashboard*: The War Room. Live stats on the horde.
•⁠  ⁠*QR Scanner*: Validate Hackers at the gates.
•⁠  ⁠*Approval Workflow*: Gatekeeping 101. Let 'em in or kick 'em out.
•⁠  ⁠*Announcements*: Broadcast to the masses.

## Tech Stack

### Backend (⁠ tekron-backend ⁠)
•⁠  ⁠*Runtime*: Node.js
•⁠  ⁠*Framework*: Express.js
•⁠  ⁠*Database*: PostgreSQL (via Neon)
•⁠  ⁠*ORM*: Prisma
•⁠  ⁠*Auth*: JWT, bcrypt
•⁠  ⁠*Tools*: Nodemon, Dotenv

### Frontend (⁠ tekron-frontend ⁠)
•⁠  ⁠*Framework*: React Native (Expo)
•⁠  ⁠*Routing*: Expo Router
•⁠  ⁠*State Management*: Zustand
•⁠  ⁠*UI*: Custom Theme System, Linear Gradients
•⁠  ⁠*Features*: Camera (QR Scanning), WebView (Maps), Secure Store

## Project Structure


tekron-2.0-APK/
├── tekron-backend/         # Express API & Database
│   ├── prisma/            # Schema & Seed script
│   ├── src/
│   │   ├── controllers/   # Logic for Auth, Admin, Participant
│   │   ├── routes/        # API Endpoints
│   │   ├── middleware/    # Auth Guards
│   │   └── utils/         # JWT, QR helpers
│   └── server.js          # Entry point (Root of backend)
│
└── tekron-frontend/        # Expo React Native App
    ├── app/               # Screens & Navigation (File-based routing)
    │   ├── admin/         # Admin screens
    │   ├── participant/   # Participant screens
    │   └── auth/          # Login screen
    ├── components/        # Reusable UI components
    ├── context/           # Global State (Zustand)
    └── constants/         # Theme & Config


## Setup & Installation

### Prerequisites
•⁠  ⁠Node.js (v18+)
•⁠  ⁠npm or yarn
•⁠  ⁠Expo Go app (for testing on device)
•⁠  ⁠PostgreSQL Database URL

### 1. Backend Setup

1.⁠ ⁠Navigate to the backend directory:
   ⁠ bash
   cd tekron-backend
    ⁠
2.⁠ ⁠Install dependencies:
   ⁠ bash
   npm install
    ⁠
3.⁠ ⁠Configure Environment Variables:
   Create a ⁠ .env ⁠ file in ⁠ tekron-backend/ ⁠ and add:
   ⁠ env
   DATABASE_URL="postgresql://user:password@host:port/dbname"
   JWT_SECRET="your_super_secret_key"
   PORT=3000
    ⁠
4.⁠ ⁠Push Database Schema:
   ⁠ bash
   npx prisma db push
   ```
5. Seed the Database (Create default users):
   ```bash
   node prisma/seed.js
   ```
6. Start the Server:
   ```bash
   npm start
    ⁠

### 2. Frontend Setup

1.⁠ ⁠Navigate to the frontend directory:
   ⁠ bash
   cd tekron-frontend
    ⁠
2.⁠ ⁠Install dependencies:
   ⁠ bash
   npm install
    ⁠
3.⁠ ⁠Configure Backend URL:
   Open ⁠ constants/config.ts ⁠ and update ⁠ BACKEND_URL ⁠ with your machine's local IP address (not localhost if testing on device):
   ⁠ typescript
   export const BACKEND_URL = 'http://YOUR_LOCAL_IP:3000';
    ⁠
4.⁠ ⁠Start the App:
   ⁠ bash
   npx expo start
    ⁠
5.⁠ ⁠Scan the QR code with Expo Go (Android/iOS).

## Usage Guide

### Default Users (from Seed)

| Role | Email | Password | Access |
|------|-------|----------|--------|
| **SuperAdmin** | `superadmin@superadmin.com` | `Password` | Full System Access |
| **Admin** | `admin@admin.com` | `Password` | Dashboard, Scanner, Approvals |
| **Participant (Approved)** | `arpit@example.com` | `ArpitSarang` | Dashboard, Events, Alerts |
| **Participant (Unapproved)** | `maverick@example.com` | `Maverick` | Map/QR Only |

### Testing the Flow
1. **Login as Participant** (`arpit@example.com`).
   - You will see the **Venue Map** and **QR Code**.
   - You cannot access the Dashboard yet.
2. **Login as Admin** (`john@admin.com`) on another device or simulator.
   - Go to **Scanner** or **Approvals**.
   - Scan the participant's QR or manually approve them.
3. **Refresh Participant App**.
   - You should now have full access to the **Dashboard**, **Events**, and **Alerts**.

## Contributing
1.⁠ ⁠Fork the repository.
2.⁠ ⁠Create a feature branch.
3.⁠ ⁠Commit your changes.
4.⁠ ⁠Push to the branch.
5.⁠ ⁠Open a Pull Request.
