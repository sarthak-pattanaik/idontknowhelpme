# idkhelpme - AI-Powered GTM Toolkit

A cutting-edge SaaS marketing platform for "idkhelpme" AI, providing a secure and interactive authentication system with comprehensive content and product management capabilities.

## Features

- Modern, responsive design with Tailwind CSS
- Strong, action-oriented messaging
- Authentication system with email OTP verification
- Four distinct product offerings (Homemaker, Intelligence, Snipper, Signals)
- Product selection interface
- Enhanced content planning calendar
- Static site deployment capabilities

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Animation**: Framer Motion
- **Routing**: Wouter
- **State Management**: React Query
- **Form Handling**: React Hook Form + Zod validation
- **Build Tool**: Vite

## Deployment Options

This project supports both full-stack and static deployments.

### Static Deployment (No Backend)

For static deployment with simulated authentication and features:

1. **Build the static site**:
   ```bash
   ./static-build.sh
   ```

2. **Preview the static site**:
   ```bash
   cd dist/static && npx serve
   ```

3. **Deploy to Netlify**:
   
   The repository includes a `netlify.toml` configuration file for easy deployment.
   - Connect your GitHub repository to Netlify
   - Select the repository
   - Netlify will automatically detect the configuration

4. **Deploy to Vercel**:
   
   The repository includes a `vercel.json` configuration file for easy deployment.
   - Connect your GitHub repository to Vercel
   - Select the repository
   - Vercel will automatically detect the configuration

### Full-Stack Deployment (With Backend)

For deployment with full functionality and database:

1. **Build the full application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

3. **Environment variables required**:
   - `DATABASE_URL`: PostgreSQL connection string
   - `SESSION_SECRET`: For secure session handling
   - (Optional) `SENDGRID_API_KEY`: For email notifications

## Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Database migrations**:
   ```bash
   npm run db:push
   ```

## Project Structure

- `/client`: Frontend React application
  - `/src/components`: Reusable UI components
  - `/src/pages`: Page components
  - `/src/hooks`: Custom React hooks
  - `/src/lib`: Utility functions and configuration
- `/server`: Express backend API
- `/shared`: Shared code between client and server
  - `/schema.ts`: Database schema and types

## Static Mode Features

When running in static mode:
- Authentication is simulated with a fixed OTP code (`123456`)
- API calls return mock data
- Full UI experience is maintained without a backend

---

Built with ❤️ using modern web technologies.