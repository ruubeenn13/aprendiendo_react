# ⚛️ Aprendiendo React

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-En%20Desarrollo-yellow?style=for-the-badge)

**Mi viaje de aprendizaje en React desde cero**

[📚 Proyectos](#-proyectos) • [🎯 Objetivos](#-objetivos-de-aprendizaje) • [🛠️ Tech Stack](#-tech-stack) • [📖 Recursos](#-recursos-útiles)

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

### 🔄 En Progreso
- [ ] Hooks (useState, useEffect, useContext)
- [ ] Manejo de eventos
- [ ] Renderizado condicional
- [ ] Listas y keys
- [ ] Forms y validación
- [ ] React Router
- [ ] Estado global (Context API / Redux)
- [ ] Fetch y APIs
- [ ] Optimización y performance
- [ ] Testing con Jest y React Testing Library
- [ ] Deployment

---

## 📂 Estructura del Repositorio

```
aprendiendo_react/
│
├── 01-fundamentos/           # Conceptos básicos de React
│   ├── componentes/          # Ejemplos de componentes
│   ├── props/                # Trabajo con props
│   └── jsx/                  # Sintaxis JSX
│
├── 02-hooks/                 # Hooks de React
│   ├── useState/             # State management
│   ├── useEffect/            # Side effects
│   └── custom-hooks/         # Custom hooks
│
├── 03-routing/               # React Router
│   └── navegacion-spa/       # Single Page Application
│
├── 04-estado-global/         # Gestión de estado
│   ├── context-api/          # Context API
│   └── redux/                # Redux Toolkit
│
├── 05-api-integration/       # Consumo de APIs
│   ├── fetch/                # Fetch API
│   └── axios/                # Axios
│
├── proyectos/                # 🚀 Proyectos completos
│   ├── todo-app/             # Lista de tareas
│   ├── weather-app/          # App del clima
│   └── ecommerce/            # E-commerce básico
│
└── README.md                 # Este archivo
```

---

## 🚀 Proyectos

A medida que aprendo, iré construyendo proyectos para aplicar los conocimientos adquiridos.

### 📋 Proyectos Planeados

| Proyecto | Descripción | Conceptos | Estado |
|----------|-------------|-----------|--------|
| **Todo App** | Lista de tareas interactiva | State, Events, LocalStorage | 🔄 En progreso |
| **Weather App** | Consulta del clima con API | Fetch, useEffect, APIs | 📝 Planeado |
| **Pokedex** | Galería de pokémon | APIs, Routing, Cards | 📝 Planeado |
| **E-commerce** | Tienda online básica | State Management, Router | 📝 Planeado |
| **Blog** | Blog personal con admin | CRUD, Auth, Firebase | 📝 Planeado |

> 🔔 **Esta sección se actualizará** conforme complete nuevos proyectos

---

## 🛠️ Tech Stack

### Tecnologías Principales
- **React** 18+ - Librería principal
- **Vite** - Build tool y dev server
- **JavaScript ES6+** - Lenguaje de programación

### Herramientas de Desarrollo
- **VS Code** - Editor de código
- **ESLint** - Linter para calidad de código
- **Prettier** - Formateador de código
- **Git & GitHub** - Control de versiones

### Librerías Adicionales (según proyecto)
- **React Router** - Navegación SPA
- **Axios** - Cliente HTTP
- **Styled Components** / **Tailwind CSS** - Estilos
- **React Hook Form** - Manejo de formularios
- **Jest** - Testing

---

## 🚀 Inicio Rápido

### Prerequisitos
```bash
node --version  # >= 16.x
npm --version   # >= 8.x
```

### Clonar el Repositorio
```bash
git clone https://github.com/ruubeenn13/aprendiendo_react.git
cd aprendiendo_react
```

### Ejecutar un Proyecto
```bash
# Navegar al proyecto específico
cd proyectos/todo-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador: http://localhost:5173
```

---

## 📚 Recursos Útiles

### Documentación Oficial
- [React Docs](https://react.dev/) - Documentación oficial de React
- [Vite Guide](https://vitejs.dev/) - Guía de Vite

### Tutoriales y Cursos
- [React Official Tutorial](https://react.dev/learn) - Tutorial interactivo oficial
- [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react) - Curso gratuito
- [Scrimba React](https://scrimba.com/learn/learnreact) - Curso interactivo

### Blogs y Artículos
- [Overreacted](https://overreacted.io/) - Blog de Dan Abramov
- [Kent C. Dodds](https://kentcdodds.com/blog) - Artículos avanzados

### Comunidades
- [r/reactjs](https://www.reddit.com/r/reactjs/) - Subreddit de React
- [Reactiflux](https://www.reactiflux.com/) - Discord de React
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs) - Q&A

---

## 📖 Conceptos Aprendidos

### 🔹 Fundamentos
```jsx
// Componente funcional básico
function Saludo({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}

// Props
<Saludo nombre="Rubén" />
```

### 🔹 Hooks
```jsx
// useState - Manejo de estado
const [contador, setContador] = useState(0);

// useEffect - Side effects
useEffect(() => {
  document.title = `Contador: ${contador}`;
}, [contador]);
```

### 🔹 Renderizado Condicional
```jsx
// Operador ternario
{isLoggedIn ? <Dashboard /> : <Login />}

// &&
{showMessage && <Message />}
```

### 🔹 Listas
```jsx
// Map para renderizar listas
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}
```

---

## 🎓 Progreso de Aprendizaje

### Semana 1-2: Fundamentos
- ✅ Crear primer componente
- ✅ Entender JSX
- ✅ Pasar props
- ✅ Composición de componentes

### Semana 3-4: Estado y Eventos
- 🔄 useState hook
- 🔄 Manejo de eventos
- 📝 Formularios controlados

### Semana 5-6: Ciclo de Vida
- 📝 useEffect hook
- 📝 Fetch de datos
- 📝 Cleanup functions

### Semana 7-8: Proyectos
- 📝 Todo App
- 📝 Weather App
- 📝 Pokedex

> 📊 **Actualizado:** Se irá actualizando conforme avance

---

## 🤔 Desafíos Encontrados

### 🔴 Problema 1: Re-renderizados innecesarios
**Solución aprendida:** Uso de `React.memo()` y `useMemo()` para optimizar

### 🔴 Problema 2: Manejo de estado asíncrono
**Solución aprendida:** Uso correcto de `useEffect` con dependencias

### 🔴 Problema 3: Props drilling
**Solución aprendida:** Context API para compartir estado entre componentes

> 💡 Esta sección documenta los retos que encuentro y cómo los resuelvo

---

## 💡 Notas y Tips

### ✨ Mejores Prácticas Aprendidas

1. **Componentes pequeños y reutilizables**
   ```jsx
   // ✅ BUENO
   <Button onClick={handleClick}>Guardar</Button>
   
   // ❌ MALO
   <button style={{...muchosCSSinline}} onClick={...}>...</button>
   ```

2. **Nombres descriptivos**
   ```jsx
   // ✅ BUENO
   const [isLoading, setIsLoading] = useState(false);
   
   // ❌ MALO
   const [flag, setFlag] = useState(false);
   ```

3. **Extraer lógica compleja**
   ```jsx
   // ✅ BUENO - Custom Hook
   const useAuth = () => {
     // lógica de autenticación
   }
   ```

4. **Evitar mutaciones directas del estado**
   ```jsx
   // ✅ BUENO
   setUsers([...users, newUser]);
   
   // ❌ MALO
   users.push(newUser);
   ```

---

## 🔧 Configuración del Entorno

### Mi Setup de Desarrollo

**VS Code Extensions:**
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier
- Auto Rename Tag
- Bracket Pair Colorizer

**Configuración de Prettier:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

**Scripts comunes:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx"
  }
}
```

---

## 📊 Estadísticas del Repositorio

![GitHub last commit](https://img.shields.io/github/last-commit/ruubeenn13/aprendiendo_react?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/ruubeenn13/aprendiendo_react?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/ruubeenn13/aprendiendo_react?style=flat-square)

---

## 🎯 Objetivos 2025

- [ ] Completar 10 proyectos de React
- [ ] Dominar todos los hooks principales
- [ ] Aprender TypeScript con React
- [ ] Construir un proyecto full-stack (MERN)
- [ ] Contribuir a un proyecto open source de React
- [ ] Crear mi primer paquete npm

---

## 🤝 Contribuciones

Aunque este es principalmente un repositorio de aprendizaje personal, **las sugerencias son bienvenidas**:

- 💡 Ideas de proyectos
- 📚 Recursos útiles
- 🐛 Correcciones de errores en el código
- 💬 Feedback constructivo

Abre un **Issue** o envía un **Pull Request** si quieres colaborar.

---

## 📬 Contacto

**Rubén Juan**

- GitHub: [@ruubeenn13](https://github.com/ruubeenn13)
- Repositorio: [aprendiendo_react](https://github.com/ruubeenn13/aprendiendo_react)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar el código para aprender.

---

## 🙏 Agradecimientos

- A la comunidad de React por los recursos increíbles
- A todos los creadores de contenido educativo
- A los desarrolladores que comparten su conocimiento

---

## 📝 Diario de Aprendizaje

### 🗓️ Enero 2025
- ✅ Configuré mi primer proyecto con Vite
- ✅ Creé mis primeros componentes
- ✅ Aprendí sobre props y composición

### 🗓️ Febrero 2025
- 🔄 Trabajando con useState
- 🔄 Practicando eventos en React

> Esta sección se actualizará mensualmente

---

## 🚀 Siguiente Paso

**Actualmente aprendiendo:** useState y manejo de eventos

**Próximo tema:** useEffect y ciclo de vida de componentes

**Proyecto actual:** Todo App con LocalStorage

---

<div align="center">

### ⭐ Si encuentras útil este repositorio, dale una estrella ⭐

**"El viaje de mil millas comienza con un solo paso"**

---

### 📈 Progreso General

![Progreso](https://progress-bar.dev/25/?title=React%20Mastery&width=400&color=61dafb)

**Última actualización:** Enero 2025

[🔝 Volver arriba](#️-aprendiendo-react)

</div>
