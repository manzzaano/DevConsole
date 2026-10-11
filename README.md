# DevConsole

Mi portfolio en forma de terminal en el navegador. Cada comando abre una sección de mi perfil: quién soy, proyectos, experiencia, formación, tecnologías, contacto y CV. Está en producción en **[console.leosoftware.dev](https://console.leosoftware.dev)**.

![DevConsole](public/og.png)

Está pensado para perfiles técnicos: la propia terminal es la prueba de cómo trabajo. El perfil completo, con los casos de estudio, está en [leosoftware.dev](https://leosoftware.dev).

## Comandos

| Comando | Muestra |
|---|---|
| `about` | Quién soy y qué busco |
| `projects` | Proyectos, con estado y enlaces |
| `experience` | Dónde he trabajado y qué hice |
| `education` | Formación y certificaciones |
| `skills` | Tecnologías que uso |
| `contact` | Email, LinkedIn y GitHub |
| `cv` | Mi CV, para verlo y descargarlo |
| `neofetch` | Información del sistema y del autor |
| `lang <en\|es>` | Cambiar de idioma |
| `demo` | Recorrido guiado por la consola |
| `help` | Lista de comandos |
| `clear` | Limpiar la pantalla (también `Ctrl+L`) |
| `exit` / `leo/` | Volver a leosoftware.dev |

**Teclado:** `Tab` o `→` autocompletan, `↑` / `↓` recorren el historial y `Esc` cierra una ventana o para la demo.

## Cómo está hecho

- **La lógica, separada de la interfaz.** Todo lo que pasa al escribir un comando está en `src/composables/useTerminal.js`. Los componentes solo pintan lo que reciben, así que la interfaz puede cambiar sin tocar los comandos.
- **Autocompletado** con texto en gris: una búsqueda por prefijo sobre la lista de comandos (`src/constants/commands.js`).
- **Dos idiomas sin recargar.** Los textos están en `public/content.json` y en cada componente de sección; el idioma elegido se recuerda en el navegador.
- **Secciones bajo demanda.** Cada ventana es un componente asíncrono que solo se carga al abrirla.
- **Una ventana real en escritorio:** se arrastra, se redimensiona desde cualquier borde, se maximiza y se minimiza. En móvil, una vista de tarjetas en lugar de la terminal.
- **El fondo**, compartido con leosoftware.dev: un patrón de barras diminutas y la barra de leo/ hecha de partículas en canvas 2D. En móvil queda tenue y quieto, y se detiene cuando la pestaña no se ve.
- **Analítica solo con consentimiento.** Google Analytics se carga únicamente si `VITE_GA_ID` está definida y el visitante la acepta.

## Stack

Vue 3 (Composition API) · Vite 7 · Tailwind CSS 4 · Typed.js (demo) · vue-pdf-embed (CV) · iconos Lucide

## En local

```bash
git clone https://github.com/manzzaano/DevConsole.git
cd DevConsole
npm install
npm run dev        # http://localhost:5173
npm run build      # build de producción en dist/
```

## Despliegue

Se despliega en Vercel con la CLI desde la carpeta del proyecto:

```bash
npx vercel deploy --prod
```

---

Hecho por [Ismael Manzano León](https://leosoftware.dev) · [LinkedIn](https://www.linkedin.com/in/ismael-manzano-leon/)
