# ⚛️ Aprendiendo React

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-En%20Desarrollo-yellow?style=for-the-badge)

**Mi viaje de aprendizaje en React desde cero**

[📚 Proyectos](#-proyectos) • [🎯 Objetivos](#-objetivos-de-aprendizaje) • [🛠️ Tech Stack](#️-tech-stack) • [📖 Recursos](#-recursos-útiles)

</div>

---

## 📝 Sobre este Repositorio

Este repositorio documenta mi **proceso de aprendizaje en React**, desde los conceptos más básicos hasta proyectos más complejos. Aquí encontrarás una colección de proyectos prácticos, ejercicios y experimentos mientras aprendo esta poderosa librería de JavaScript.

> 💡 **Nota:** Este es un repositorio de aprendizaje en constante evolución. Se irán añadiendo nuevos proyectos y mejoras conforme avance en mi formación.

---

## 🎯 Objetivos de Aprendizaje

### ✅ Fundamentos Completados
- [x] ¿Qué es React y por qué usarlo?
- [x] Crear proyecto con Vite
- [x] Componentes funcionales
- [x] JSX y sintaxis básica
- [x] Props y composición de componentes
- [x] Eventos básicos (onClick, onHover)
- [x] Renderizado condicional
- [x] Manejo de estado con useState

### 🔄 En Progreso
- [ ] useEffect y ciclo de vida
- [ ] Custom hooks
- [ ] Context API
- [ ] Forms y validación avanzada
- [ ] React Router
- [ ] Fetch y APIs externas
- [ ] Optimización y performance
- [ ] Testing con Jest

### 📝 Próximos Pasos
- [ ] TypeScript con React
- [ ] Estado global (Redux/Zustand)
- [ ] Next.js
- [ ] React Native
- [ ] Deployment y CI/CD

---

## 📂 Estructura del Repositorio

```
aprendiendo_react/
│
├── pruebas/                      # 🧪 Ejercicios y prácticas
│   └── projects/
│       ├── 00-hola-mundo/        # Primer componente React
│       ├── 01-tic-tac-toe/       # Juego del tres en raya
│       └── 02-mouse-follower/    # Seguidor de cursor interactivo
│
├── proyectos/                    # 🚀 Proyectos completos
│   └── monitor-solar/            # Dashboard solar con datos reales
│
├── package.json                  # Configuración del workspace
└── README.md                     # Este archivo
```

---

## 🚀 Proyectos

### 🧪 **Proyectos de Práctica** (`/pruebas/projects`)

Ejercicios y mini-proyectos para practicar conceptos específicos.

| Proyecto | Descripción | Conceptos Clave | Estado |
|----------|-------------|-----------------|--------|
| **00-hola-mundo** | Mi primer componente React | JSX, Componentes | ✅ Completado |
| **01-tic-tac-toe** | Juego del tres en raya (Ta-Te-Ti) | State, Props, Eventos, Lógica de juego | ✅ Completado |
| **02-mouse-follower** | Círculo que sigue el cursor del mouse | useEffect, Event Listeners, Cleanup | ✅ Completado |

---

### 🎯 **Proyectos Reales** (`/proyectos`)

Aplicaciones completas con funcionalidad real.

#### 📊 **Monitor Solar**
<table>
  <tr>
    <td width="60%">
      <h4>Descripción</h4>
      <p>Dashboard interactivo para monitorizar datos de paneles solares en tiempo real. Incluye gráficos de producción, estadísticas y alertas.</p>
      <h4>🎯 Conceptos Aplicados</h4>
      <ul>
        <li>✅ Componentes funcionales y composición</li>
        <li>✅ Props drilling y datos jerárquicos</li>
        <li>✅ useState para gestión de estado local</li>
        <li>✅ Renderizado condicional</li>
        <li>✅ Estilos CSS modulares</li>
        <li>🔄 Fetch de APIs (próximamente)</li>
        <li>🔄 Charts y visualización de datos</li>
      </ul>
    </td>
    <td width="40%">
      <h4>📦 Tech Stack</h4>
      <pre>
React 18
Vite
CSS Modules
      </pre>
      <h4>🚀 Demo</h4>
      <code>
cd proyectos/monitor-solar
npm install
npm run dev
      </code>
      <h4>📸 Preview</h4>
      <em>Screenshot próximamente</em>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Core
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18+ | Librería principal UI |
| **Vite** | 5+ | Build tool y dev server |
| **JavaScript** | ES6+ | Lenguaje de programación |
| **CSS3** | - | Estilos y diseño |

### Herramientas de Desarrollo
| Herramienta | Propósito |
|-------------|-----------|
| **VS Code** | Editor de código |
| **ESLint** | Linter para calidad de código |
| **Git & GitHub** | Control de versiones |
| **npm** | Gestor de paquetes |

### Librerías Futuras
- [ ] **React Router** - Navegación SPA
- [ ] **Axios** / **TanStack Query** - Fetch de datos
- [ ] **Tailwind CSS** - Framework de estilos
- [ ] **Framer Motion** - Animaciones
- [ ] **React Hook Form** - Formularios
- [ ] **Vitest** - Testing

---

## 🎓 Conceptos Aprendidos

### 🔹 Componentes
```jsx
// Componente funcional básico
function Saludo({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}

// Composición
function App() {
  return (
    <div>
      <Saludo nombre="Rubén" />
      <Saludo nombre="React" />
    </div>
  );
}
```

### 🔹 Estado con useState
```jsx
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

### 🔹 Eventos
```jsx
function Boton() {
  const handleClick = () => {
    console.log('¡Click!');
  };

  return <button onClick={handleClick}>Púlsame</button>;
}
```

### 🔹 Renderizado Condicional
```jsx
function Mensaje({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Bienvenido de vuelta</p>
      ) : (
        <p>Por favor, inicia sesión</p>
      )}
    </div>
  );
}
```

### 🔹 Listas y Keys
```jsx
function ListaTareas({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>{tarea.texto}</li>
      ))}
    </ul>
  );
}
```

### 🔹 useEffect (Mouse Follower)
```jsx
import { useState, useEffect } from 'react';

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
    >
      🎯
    </div>
  );
}
```

---

## 🚀 Inicio Rápido

### Prerequisitos
```bash
node --version  # >= 18.x
npm --version   # >= 9.x
```

### Clonar el Repositorio
```bash
git clone https://github.com/ruubeenn13/aprendiendo_react.git
cd aprendiendo_react
```

### Ejecutar un Proyecto

#### Opción 1: Proyectos de Práctica
```bash
cd pruebas/projects/01-tic-tac-toe
npm install
npm run dev
# Abrir http://localhost:5173
```

#### Opción 2: Proyectos Reales
```bash
cd proyectos/monitor-solar
npm install
npm run dev
# Abrir http://localhost:5173
```

---

## 📚 Recursos Útiles

### 📖 Documentación Oficial
- [React.dev](https://react.dev/) - Nueva documentación oficial
- [Vite Guide](https://vitejs.dev/) - Guía de Vite
- [MDN Web Docs](https://developer.mozilla.org/) - Referencia de JavaScript

### 🎓 Cursos y Tutoriales
- [React Official Tutorial](https://react.dev/learn) - Tutorial interactivo oficial
- [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react) - Curso gratuito
- [Midudev - Aprendiendo React](https://www.youtube.com/@midudev) - Tutoriales en español
- [JavaScript.info](https://javascript.info/) - Fundamentos de JS

### 🌟 Proyectos de Inspiración
- [React Projects](https://github.com/topics/react-projects) - GitHub Topics
- [Awesome React](https://github.com/enaqx/awesome-react) - Lista curada
- [Frontend Mentor](https://www.frontendmentor.io/) - Desafíos de diseño

### 👥 Comunidades
- [r/reactjs](https://www.reddit.com/r/reactjs/) - Subreddit de React
- [Reactiflux](https://www.reactiflux.com/) - Discord oficial
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs) - Q&A

---

## 🎯 Progreso de Aprendizaje

### ✅ Marzo 2026 - Semana 1-2: Fundamentos
- [x] Crear primer componente
- [x] Entender JSX
- [x] Pasar props entre componentes
- [x] Composición de componentes

### ✅ Marzo 2026 - Semana 3-4: Estado y Eventos
- [x] Hook useState
- [x] Manejo de eventos (onClick, onHover)
- [x] Renderizado condicional
- [x] Actualización de estado

### 🔄 Marzo-Abril 2026: Efectos y Ciclo de Vida
- [x] Hook useEffect básico
- [x] Event listeners (mousemove)
- [x] Cleanup functions
- [ ] Fetch de datos (en progreso)

### 📝 Abril-Mayo 2026: Proyectos Prácticos
- [x] Tic Tac Toe - Lógica de juego
- [x] Mouse Follower - Interacción con DOM
- [x] Monitor Solar - Dashboard (base)
- [ ] Integración con API real

---

## 💡 Lecciones Aprendidas

### 🎯 **Proyecto: Tic Tac Toe**
**Aprendí:**
- Cómo manejar arrays como estado
- Calcular ganador con lógica condicional
- Inmutabilidad del estado (no modificar directamente)
- Componentes controlados

**Desafío:** Determinar el ganador con 8 combinaciones posibles
**Solución:** Array de patrones ganadores y verificación con `.every()`

---

### 🎯 **Proyecto: Mouse Follower**
**Aprendí:**
- useEffect con event listeners
- Importancia del cleanup para evitar memory leaks
- Actualización de estado en tiempo real
- Posicionamiento absoluto con JS

**Desafío:** El círculo quedaba "pegado" después de desmontar
**Solución:** Return cleanup function en useEffect

---

### 🎯 **Proyecto: Monitor Solar**
**Aprendí:**
- Estructurar proyecto con múltiples componentes
- Pasar datos entre niveles (props drilling)
- Organizar archivos CSS por componente
- Crear componentes reutilizables

**Próximo desafío:** Integrar API real de paneles solares

---

## 🔧 Configuración del Entorno

### Mi Setup de Desarrollo

**📦 VS Code Extensions:**
```
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier - Code formatter
- Auto Rename Tag
- Bracket Pair Colorizer 2
- Simple React Snippets
- Import Cost
```

**⚙️ Snippets Personalizados:**
```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "export function ${1:ComponentName}() {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  )",
      "}"
    ]
  }
}
```

**🎨 Prettier Config:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

---

## 📊 Estadísticas del Repositorio

![GitHub last commit](https://img.shields.io/github/last-commit/ruubeenn13/aprendiendo_react?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/ruubeenn13/aprendiendo_react?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/ruubeenn13/aprendiendo_react?style=flat-square)

---

## 🗺️ Roadmap 2026

### 🎯 Q1 2026 (Marzo - Mayo) - EN PROGRESO
- [x] Fundamentos de React ✅
- [x] Componentes y Props ✅
- [x] Estado con useState ✅
- [x] Efectos con useEffect ✅
- [ ] Custom Hooks 🔄
- [ ] Context API 📝

### 🎯 Q2 2026 (Junio - Agosto)
- [ ] React Router (Navegación)
- [ ] Fetch de APIs externas
- [ ] Formularios avanzados
- [ ] Proyecto: Weather App
- [ ] Proyecto: Pokedex

### 🎯 Q3 2026 (Septiembre - Noviembre)
- [ ] Estado global (Context/Redux)
- [ ] Testing con Vitest
- [ ] Optimización de rendimiento
- [ ] Proyecto: E-commerce

### 🎯 Q4 2026 (Diciembre - Febrero 2027)
- [ ] TypeScript con React
- [ ] Next.js (SSR/SSG)
- [ ] Deployment (Vercel/Netlify)
- [ ] Proyecto Full-Stack (MERN)

---

## 📋 Próximos Proyectos Planeados

| # | Proyecto | Descripción | Conceptos | Prioridad |
|---|----------|-------------|-----------|-----------|
| 1 | **Weather App** | Consulta del clima con API | Fetch, useEffect, APIs | 🔴 Alta |
| 2 | **Todo App Pro** | Lista de tareas con filtros | LocalStorage, Context | 🟡 Media |
| 3 | **Pokedex** | Galería de pokémon con búsqueda | API, Routing, Paginación | 🟡 Media |
| 4 | **Movie Database** | Buscador de películas (TMDb) | API, Debouncing, Cards | 🟢 Baja |
| 5 | **E-commerce** | Tienda online con carrito | State Management, Router | 🟢 Baja |
| 6 | **Blog Personal** | Blog con admin y auth | CRUD, Firebase, Auth | 🟢 Baja |

---

## 💡 Mejores Prácticas Aprendidas

### ✅ Estructura de Componentes
```jsx
// ✅ BUENO - Componente pequeño y reutilizable
function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

// ❌ MALO - Todo en un solo componente gigante
function App() {
  // 300 líneas de código aquí...
}
```

### ✅ Nombres Descriptivos
```jsx
// ✅ BUENO
const [isLoading, setIsLoading] = useState(false);
const [userProfile, setUserProfile] = useState(null);

// ❌ MALO
const [flag, setFlag] = useState(false);
const [data, setData] = useState(null);
```

### ✅ Inmutabilidad del Estado
```jsx
// ✅ BUENO
setUsers([...users, newUser]);
setUsers(users.filter(u => u.id !== userId));

// ❌ MALO
users.push(newUser);  // ¡Mutación directa!
users.splice(index, 1);
```

### ✅ Cleanup en useEffect
```jsx
// ✅ BUENO
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// ❌ MALO - Memory leak
useEffect(() => {
  window.addEventListener('resize', () => {});
  // Sin cleanup
}, []);
```

---

## 🤝 Contribuciones

Aunque este es principalmente un repositorio de aprendizaje personal, **las sugerencias son bienvenidas**:

- 💡 Ideas de proyectos
- 📚 Recursos útiles que conoces
- 🐛 Correcciones de errores en el código
- 💬 Feedback constructivo sobre mi código

**Cómo contribuir:**
1. Fork el proyecto
2. Crea una rama (`git checkout -b sugerencia/mejora`)
3. Commit tus cambios (`git commit -m 'Sugerencia: ...'`)
4. Push a la rama (`git push origin sugerencia/mejora`)
5. Abre un Pull Request

---

## 📬 Contacto

**Rubén Juan**

- 🐙 GitHub: [@ruubeenn13](https://github.com/ruubeenn13)
- 📂 Repositorio: [aprendiendo_react](https://github.com/ruubeenn13/aprendiendo_react)
- 💼 Android Project: [filmoteca-RubenJuan](https://github.com/ruubeenn13/filmoteca-RubenJuan)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Siéntete libre de usar el código para aprender.

```
MIT License - Copyright (c) 2026 Rubén Juan
```

---

## 🙏 Agradecimientos

- 🎓 **[Midudev](https://midu.dev/)** - Por sus increíbles tutoriales de React en español
- 📘 **[React Team](https://react.dev/)** - Por la nueva documentación oficial
- 🌐 **Comunidad de Stack Overflow** - Por resolver mis dudas
- 💙 **Todos los creadores de contenido** que comparten su conocimiento gratuitamente

---

## 📝 Changelog

### 📅 **Marzo 2026**
- ✅ Configuré mi primer proyecto con Vite
- ✅ Creé componente "Hola Mundo"
- ✅ Completé proyecto Tic Tac Toe
- ✅ Completé proyecto Mouse Follower
- ✅ Inicié proyecto Monitor Solar
- 🔄 Trabajando con useEffect y cleanup
- 🔄 Practicando fetch de datos

### 📅 **Abril 2026**
- 📝 Próximo: Integrar API real en Monitor Solar
- 📝 Próximo: Weather App con API

### 📅 **Mayo 2026**
- 📝 Próximo: Custom Hooks
- 📝 Próximo: Context API

> Esta sección se actualiza mensualmente

---

## 🎯 Estado Actual - Marzo 2026

**📚 Actualmente aprendiendo:** useEffect y ciclo de vida de componentes

**🔨 Proyecto actual:** Monitor Solar (integrando API)

**📖 Próximo tema:** Custom Hooks y reutilización de lógica

**🎯 Objetivo del mes (Abril 2026):** Completar Weather App con API real

**⏱️ Tiempo dedicado hasta ahora:** ~40 horas de práctica

---

## 🔗 Links Rápidos

- 📂 [Ver proyectos de práctica](/pruebas/projects)
- 🚀 [Ver proyectos reales](/proyectos)
- 📚 [React Docs](https://react.dev/)
- 🎓 [Recursos de aprendizaje](#-recursos-útiles)

---

<div align="center">

## 📈 Progreso General

<div align="center">

### 🚀 React Journey

```
████████░░░░░░░░░░░░░░░░░░░░  30%
```

</div>

| 📊 Métrica | 📈 Progreso |
|:-----------|:------------|
| **Conceptos dominados** | `8 / 25` ⚛️ |
| **Proyectos completados** | `3 / 10` 🚀 |
| **Horas de práctica** | `~40h` ⏱️ |
| **Nivel actual** | `Principiante+` 📚 |

### Desglose por Áreas

<table>
<tr><td>

**Fundamentos de React**
```
⚛️ 95% ████████████████████
```
`Componentes, JSX, Props`

</td></tr>
<tr><td>

**Hooks**
```
🪝 40% ████████░░░░░░░░░░░░
```
`useState, useEffect básico`

</td></tr>
<tr><td>

**Routing & Navigation**
```
🧭  0% ░░░░░░░░░░░░░░░░░░░░
```
`Pendiente`

</td></tr>
<tr><td>

**Estado Global**
```
🌐  0% ░░░░░░░░░░░░░░░░░░░░
```
`Context, Redux pendiente`

</td></tr>
<tr><td>

**APIs & Fetch**
```
📡 10% ██░░░░░░░░░░░░░░░░░░
```
`En progreso`

</td></tr>
<tr><td>

**Testing**
```
🧪  0% ░░░░░░░░░░░░░░░░░░░░
```
`Pendiente`

</td></tr>
</table>

---

### ⭐ Si encuentras útil este repositorio, dale una estrella ⭐

**"La práctica constante es la clave del dominio"**

---

**Última actualización:** Marzo 2026

[🔝 Volver arriba](#️-aprendiendo-react)

</div>
