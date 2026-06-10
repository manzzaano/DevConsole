# Ismael Manzano León — Terminal Portfolio

> An interactive terminal emulator with a modern glassmorphism design, UNIX command system, and virtual filesystem — built with Vue 3 + TailwindCSS.

![Portfolio Terminal Demo](https://raw.githubusercontent.com/manzzaano/DevConsole/main/public/DemoPortafolio.gif)

---

## Description

This portfolio replicates a full command-line interface (CLI) experience. Instead of clicking through menus, you navigate a virtual filesystem using real UNIX commands (`ls`, `cat`, `cd`, `pwd`, `clear`) combined with custom portfolio commands (`about`, `projects`, `skills`, `contact`, `cv`, `neofetch`).

Built with a fluid animated glassmorphism background, monospace typography, and Bash/Zsh-inspired syntax coloring.

## Features

- **Terminal UI** — Realistic shell experience with command history (↑/↓ arrows), Tab autocompletion, and ghost text suggestions.
- **UNIX Commands** — Full `ls` / `cat` / `cd` / `pwd` / `clear` support over a virtual filesystem.
- **Virtual Filesystem** — Explore your `~/` home directory with files (`perfil.txt`, `contacto.sh`) and folders (`proyectos/`).
- **Portfolio Commands** — `about`, `projects`, `skills`, `experience`, `education`, `contact`, `cv` open rich modal windows.
- **Glassmorphism Design** — Fluid animated gradient background with `backdrop-filter: blur()` translucent panels and depth shadows.
- **Syntax Highlighting** — Directories in cyan, executables in teal green, binary files in amber — like a real shell.
- **Internationalization (i18n)** — English (`lang en`) and Spanish (`lang es`) with persistent preference.
- **Keyboard Shortcuts** — `Ctrl+L` to clear, `Esc` to close modals / stop demo.
- **Demo Mode** — Type `demo` for an automatic guided tour of all features.
- **Responsive** — Mobile-friendly with on-screen TAB / UP / DWN / CLS buttons.

## Commands

### UNIX-style
| Command | Description |
|---|---|
| `ls` / `ls -l` | List directory contents (long format with descriptions) |
| `cat <file>` | Print file contents inline |
| `cd <dir>` | Change directory (`cd ..`, `cd ~`, `cd proyectos/`) |
| `pwd` | Print current working directory path |
| `clear` | Clear terminal screen |

### Portfolio
| Command | Description |
|---|---|
| `about` | Profile, stats, and bio |
| `projects` | Featured projects with links |
| `skills` | Technical stack and tools |
| `experience` | Work history timeline |
| `education` | Academic record and certifications |
| `contact` | Email, LinkedIn, GitHub channels |
| `cv` | PDF resume viewer |
| `neofetch` | System info as ASCII art |
| `help` | Full command reference |
| `lang <en\|es>` | Switch language |
| `demo` | Auto-guided tour |

## Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API + Async Components)
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/) via Vite plugin
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Typing Effect:** [Typed.js](https://github.com/mattboldt/typed.js/)
- **PDF Rendering:** [vue-pdf-embed](https://github.com/hrynko/vue-pdf-embed)

## Run Locally

```bash
git clone https://github.com/manzzaano/PortafolioTerminal.git
cd PortafolioTerminal
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build & Deploy

```bash
npm run build     # outputs to dist/
npm run deploy    # deploys to GitHub Pages via gh-pages
```
