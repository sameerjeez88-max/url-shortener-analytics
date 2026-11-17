# 🔗 Custom URL Shortener & Click Analytics Engine

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Custom URL Shortener & Click Analytics Engine** built with Node.js, Express, high-speed 302 redirection routing, real-time click tracking counters, and a responsive dark-mode management dashboard styled with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Instant Redirection Engine:** High-performance short code routing (`/:shortCode`) executing instant 302 HTTP redirects to target destinations.
* **Real-Time Click Tracking:** Automatically logs visitor analytics, user agents, and increments total click counters per link.
* **Custom Aliases:** Enables users to create personalized short slugs or fallback to auto-generated unique hashes.
* **Modern Tailwind UI:** Clean dark-mode command center layout equipped with one-click clipboard copying and live analytics cards.
* **Clean Code Architecture:** Modular separation of routing logic, data stores, and server configuration.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode shortener form and active links dashboard |
| **Backend Runtime** | Node.js & Express.js | REST routing, URL generation, and high-speed redirection engine |

---

## 📂 Project Folder Structure

```text
url-shortener-analytics/
├── public/
│   └── index.html             # Tailwind CSS URL manager dashboard UI
├── src/
│   ├── routes/
│   │   └── urlRoutes.js       # Shorten, retrieve, and delete endpoints
│   └── data/
│       └── store.js           # In-memory database store for URLs & click logs
├── server.js                  # Main entry point & 302 redirect handler
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
