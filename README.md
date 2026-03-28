# edu-Power

> Plateforme éducative moderne — cours en ligne, quiz interactifs et suivi de progression étudiant.

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-purple)](https://vite.dev)
[![MUI](https://img.shields.io/badge/MUI-v7-blue)](https://mui.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## Aperçu

edu-Power est une plateforme d'apprentissage en ligne construite avec React 19 et Material UI. Elle propose un catalogue de cours structurés, un système de quiz avec timer et score, et un dashboard personnel pour suivre sa progression.

---

## Fonctionnalités

- Catalogue de cours avec filtres par catégorie
- Système de quiz interactif (timer, score, correction)
- Authentification (login / register)
- Dashboard étudiant (cours inscrits, progression, badges)
- Mode sombre / clair
- Design responsive (mobile-first)

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| React | 19 | Framework UI |
| Vite | 8 | Build tool |
| MUI | v7 | Composants UI |
| React Router | v7 | Navigation |
| Axios | — | Requêtes API |
| React Icons | v5 | Icônes |

---

## Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
git clone https://github.com/akrembarboura/edu-Power.git
cd edu-Power
npm install
npm run dev
```

L'application tourne sur `http://localhost:5173`

---

## Structure du projet

```
src/
├── app/           → App.jsx, routes
├── pages/         → Home, Courses, Login, Dashboard
├── components/
│   ├── ui/        → Button, Card, Input
│   ├── layout/    → Navbar, Footer
│   └── common/    → Loader, ErrorMessage
├── features/
│   ├── courses/   → CourseCard, useCourses
│   ├── auth/      → Login, Register
│   └── quiz/      → QuizCard, Timer, Score
├── context/       → AuthContext, ThemeContext
├── services/      → api.js, courseService
├── hooks/         → useFetch, useAuth
└── assets/        → images, styles
```

---

## Auteur

**Akrem Barboura** — [@akrembarboura](https://github.com/akrembarboura)

---

## Licence

MIT