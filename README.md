# GetIt

<p align="center">
  <img src="public/logo.png" alt="GetIt Logo" width="200"/>
</p>

<p align="center">
  <b>Your one-stop solution for community-based Q&A and knowledge sharing</b>
</p>

<p align="center">
  <a href="#problem-statement">Problem Statement</a> •
  <a href="#solution">Solution</a> •
  <a href="#team">Team</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#setup">Setup</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

---

## Problem Statement

In today's knowledge-based economy, developers, students, and professionals frequently encounter technical challenges that require specific expertise. Existing platforms are often fragmented, difficult to navigate, or fail to connect users with appropriate domain experts. This leads to:

- Delayed problem resolution and reduced productivity
- Lack of accessible, domain-specific knowledge resources
- Difficulty in finding personalized guidance for complex technical issues
- Limited community interaction and collaborative learning opportunities

## Solution

GetIt is a modern Q&A platform designed to connect knowledge seekers with domain experts in a streamlined, user-friendly environment. Our platform facilitates efficient knowledge exchange through intelligent matching algorithms, real-time interactions, and community-driven content curation.

## Team

| Name | Role | Contact |
|------|------|---------|
| Praneeth Kumar | Team Lead & Full-stack Developer | praneeth@getit.com |
| Maya Rodriguez | Frontend Engineer | maya@getit.com |
| Raj Patel | Backend Developer | raj@getit.com |
| Sarah Chen | UX/UI Designer | sarah@getit.com |
| Alex Johnson | DevOps Engineer | alex@getit.com |

## Features

- **Intelligent Question Routing**: Questions are automatically routed to the most qualified experts
- **Real-time Collaboration**: Live chat and collaborative editing tools
- **Community-based Moderation**: Quality control through peer review and reputation system
- **Personalized Feed**: AI-powered content recommendations based on user interests and behavior
- **Knowledge Repository**: Searchable archive of answers and solutions
- **Multi-format Support**: Rich text, code snippets, images, and file attachments

## Tech Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Firebase Authentication
- Styled Components & Material UI
- CodeMirror for code editing

### Backend
- Node.js with Express
- Firebase Services (Authentication, Firestore, Storage)
- Redis for caching
- Socket.io for real-time features

### DevOps
- GitHub Actions for CI/CD
- Docker for containerization
- Google Cloud Platform

## Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Firebase account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/getit.git
   cd getit
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Initialize Firebase**
   ```bash
   npx firebase init
   ```
   Select the Firebase services you want to use (Authentication, Firestore, Storage, etc.)

## Usage

### Development Environment

1. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

2. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

### Production Build

1. **Create a production build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy to Firebase Hosting**
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## Testing

```bash
# Run unit tests
npm test

# Run end-to-end tests
npm run e2e

# Check code quality
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by the GetIt Team
</p>