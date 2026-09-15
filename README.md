# 🍳 Cookora — Recipe & Cooking Platform

A modern, responsive recipe discovery and management web app built with React.js, Bootstrap 5, and Local Storage. Built as part of a Front-End Development internship assignment.

🔗 **Live Demo:** [cookora-psi.vercel.app](https://cookora-psi.vercel.app)

---

## ✨ Features

- 🔍 **Search & Filter** — search recipes by name and filter by category
- 📖 **Recipe Details** — full recipe view with ingredients (checkable) and step-by-step instructions
- ❤️ **Favorites** — save recipes to favorites, persisted with Local Storage
- ➕ **Full CRUD** — add, edit, and delete your own recipes
- ✅ **Form Validation** — required fields and input validation on the recipe form
- 🌙 **Dark Mode** — toggleable theme, persisted with Local Storage
- 📱 **Fully Responsive** — optimized for desktop, tablet, and mobile
- 💫 **Polished UI/UX** — loading skeletons, toast notifications, empty states, 404 page, and micro-interactions

---

## 🛠 Built With

- React.js (Vite)
- React Router
- Bootstrap 5 + Custom CSS
- Local Storage (for recipes, favorites, and theme persistence)
- Git & GitHub

---

## 📂 Project Structure

src/
├── components/ # Reusable UI components (Navbar, RecipeCard, RecipeForm, etc.)
├── pages/ # Route-level pages (Home, RecipeDetail, Favorites, AddRecipe, EditRecipe, NotFound)
├── data/ # Default recipe seed data
├── hooks/ # Custom hooks (useLocalStorage, useDarkMode)
├── utils/ # Form validation logic
└── App.jsx # Routes and app-level state


---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/imfaiz56/cookora.git

# Navigate into the project
cd cookora

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📸 Screenshots

*(Add screenshots here before final submission)*

---

## 👤 Author

**Muhammad Faiz Alam**
[LinkedIn](https://linkedin.com/in/faiz56) · [GitHub](https://github.com/imfaiz56)