# 🍕 Pizzería Mamma Mia

Aplicación web desarrollada con React y Vite que simula una tienda de pizzas, enfocada en la construcción de componentes reutilizables, manejo de estado global con Context API y diseño responsive.

---

## 🚀 Demo

Puedes ver el proyecto funcionando aquí:

👉 [Ver demo en producción](https://pizzeria-mamma-mia-qg7w.onrender.com/)

---

## ✨ Características

- 🧩 Componentes reutilizables en React
- 🎨 Diseño responsive (mobile-first)
- 🧠 Render dinámico de datos con props y estado
- 🛒 Carrito de compras con Context API (agregar, aumentar, disminuir y eliminar productos)
- 💰 Total del carrito sincronizado en tiempo real con el Navbar
- 🍕 Vista de detalle de pizza con consumo de API REST
- 🗺️ Enrutamiento con React Router DOM
- 🔐 Formularios de Login y Registro
- 👤 Página de perfil de usuario
- ❌ Página 404 personalizada
- 📦 Estructura modular y escalable (CSS por componente)
- 🎯 UI moderna con enfoque en experiencia de usuario

---

## 🛠️ Tecnologías

![HTML](https://skillicons.dev/icons?i=html)
![CSS](https://skillicons.dev/icons?i=css)
![JavaScript](https://skillicons.dev/icons?i=js)
![React](https://skillicons.dev/icons?i=react)
![Vite](https://skillicons.dev/icons?i=vite)

---

## 📁 Estructura del proyecto

```bash
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Header.jsx / Header.css
│   └── Footer.jsx / Footer.css
│
├── views/
│   ├── Home.jsx / Home.css
│   ├── Catalogo.jsx / Catalogo.css
│   ├── Cart.jsx / Cart.css
│   ├── Pizza.jsx / Pizza.css
│   ├── LoginForm.jsx / LoginForm.css
│   ├── RegisterForm.jsx / RegisterForm.css
│   ├── Profile.jsx / Profile.css
│   └── NotFound.jsx / NotFound.css
│
├── context/
│   └── CartContext.jsx
│   └── PizzaContext.jsx 
│
├── assets/
├── App.jsx / App.css
├── index.css
└── main.jsx
```

---

## ⚙️ Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/tamarariveram/Pizzeria-Mamma-Mia.git

# Ingresar al proyecto
cd Pizzeria-Mamma-Mia/Frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## 👩‍💻 Autora

Tamara Rivera — [@tamarariveram](https://github.com/tamarariveram)