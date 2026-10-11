# 🚀 CortexAI — Enterprise Multipurpose AI Platform

[![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite%20%7C%20Redux-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)](https://nodejs.org/)
[![Microservices](https://img.shields.io/badge/Architecture-Microservices%20%7C%20Docker-orange)](https://www.docker.com/)
[![Database](https://img.shields.io/badge/Caching-Redis-red)](https://redis.io/)
[![Auth](https://img.shields.io/badge/Auth-Firebase%20%7C%20OAuth%202.0-yellow)](https://firebase.google.com/)

---

## 📌 Executive Summary
**CortexAI** is a scalable, full-stack, enterprise-grade AI SaaS application engineered using a **Distributed Microservices Architecture**. The platform features real-time interactive AI conversations, payment gateway integrations, dynamic state management, and optimized backend caching. Designed with modularity and production readiness in mind, CortexAI handles high-concurrency requests seamlessly across separate backend services.

---

## ✨ Key Features & Architectural Highlights

### ⚡ 1. Microservices Backend Architecture
* **API Gateway Pattern:** Centralized entry point handling request routing, middleware execution, and rate limiting.
* **Decoupled Services:** Isolated services for **Auth**, **Agent**, **Billing**, and **Chat** ensuring high fault isolation and independent scalability.
* **High-Performance Caching:** Integrated **Redis** service for rapid session management and cached request delivery.
* **Containerized Deployment:** Dockerized microservices configured for quick orchestration using `docker-compose`.

### 🛡️ 2. Secure Authentication & User Management
* **Firebase & Google OAuth 2.0:** Multi-provider authentication supporting persistent user sessions and token-based client verification.
* **Protected Routes & Interceptors:** Centralized API request handling with automated auth token verification via custom Axios middleware.

### 💬 3. Interactive AI Chat Engine
* **Real-time Messaging Pipeline:** Optimized message streaming and dynamic state dispatching using Redux Toolkit (`conversationSlice`, `messageSlice`).
* **Artifacts & Rich UI Elements:** Dynamic rendering of generated content, code blocks, and interactive AI artifacts (`Artifact.jsx`).
* **Conversation Management:** Real-time conversation creation, dynamic updates, and full message history retention.

### 💳 4. Integrated Billing & Subscriptions
* **Transaction Verification:** Custom payment verification workflows (`verifyPayment.js`) integrated into a dedicated billing drawer UI (`BillingDrawer.jsx`).
* **Usage Tiering:** Middleware verification to control API usage based on active user subscription levels.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React (Vite), Redux Toolkit, React Router, Axios, CSS Modules |
| **Backend** | Node.js, Express.js, Microservices, API Gateway |
| **Database & Caching** | Redis, Cluster Key Slot, Redis I/O |
| **Auth & Security** | Firebase Admin SDK, Google OAuth 2.0, Environment Security |
| **DevOps & CI/CD** | Docker, Docker Compose, Git, GitHub Actions (`deploy.yml`) |

---

## 📂 Project Directory Structure

```text
cortexAI/
├── backend/
│   ├── gateway/           # API Gateway (Routing, Middleware, Utils)
│   ├── services/          # Microservices Architecture
│   │   ├── agent/         # AI Logic & Agent Execution Engine
│   │   ├── auth/          # Authentication & Token Management
│   │   ├── billing/       # Payment Processing & Subscription Limits
│   │   └── chat/          # Real-time Conversation Handler
│   └── shared/            # Shared Utilities (Redis Connector)
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI (ChatArea, BillingDrawer, Sidebar, Artifact)
│   │   ├── features/      # API Integration Workflows
│   │   ├── pages/         # Core Views (Home, Authentication)
│   │   ├── redux/         # Global State Store (User, Message, Conversation Slices)
│   │   └── utils/         # Axios & Firebase SDK Configurations
└── docker-compose.yml     # Multi-Container Orchestrator
