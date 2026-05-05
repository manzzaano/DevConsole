export const virtualFS = {
  "~": {
    type: "dir",
    children: {
      "perfil.txt": {
        type: "file",
        modal: "about",
        description: "Información personal y bio",
        summary: {
          en: "Ismael Manzano — Software Engineer. Backend specialist working at Entreredes. Use 'about' for full profile.",
          es: "Ismael Manzano — Software Engineer. Especialista backend en Entreredes. Usa 'about' para perfil completo.",
        },
      },
      "habilidades.txt": {
        type: "file",
        modal: "skills",
        description: "Stack técnico y herramientas",
        summary: {
          en: "Java, Kotlin, C#, JavaScript, PHP, Python, SQL, HTML/CSS. Frameworks: Spring Boot, .NET, Laravel, Vue, React. Use 'skills' for full breakdown.",
          es: "Java, Kotlin, C#, JavaScript, PHP, Python, SQL, HTML/CSS. Frameworks: Spring Boot, .NET, Laravel, Vue, React. Usa 'skills' para desglose completo.",
        },
      },
      "experiencia.txt": {
        type: "file",
        modal: "experience",
        description: "Historial profesional",
        summary: {
          en: "Entreredes (2026–Present), Savia BL (2025), Cojali S.L. (2025), Kitchen ops. Use 'experience' for full timeline.",
          es: "Entreredes (2026–Actualidad), Savia BL (2025), Cojali S.L. (2025), Cocina. Usa 'experience' para historial completo.",
        },
      },
      "educacion.txt": {
        type: "file",
        modal: "education",
        description: "Formación académica",
        summary: {
          en: "HND Multiplatform App Dev (2024–2026). IES Maestre de Calatrava & IES Gregorio Prieto. Use 'education' for details.",
          es: "Grado Superior DAM (2024–2026). IES Maestre de Calatrava & IES Gregorio Prieto. Usa 'education' para detalles.",
        },
      },
      "contacto.sh": {
        type: "file",
        executable: true,
        modal: "contact",
        description: "Canales de comunicación",
        summary: {
          en: "Email, LinkedIn, GitHub. Use 'contact' to open communication channels.",
          es: "Email, LinkedIn, GitHub. Usa 'contact' para abrir canales de comunicación.",
        },
      },
      "cv.pdf": {
        type: "file",
        binary: true,
        modal: "cv",
        description: "Curriculum Vitae (PDF)",
        summary: {
          en: "Ismael Manzano CV (PDF). Use 'cv' to view it in the document viewer.",
          es: "CV de Ismael Manzano (PDF). Usa 'cv' para verlo en el visor de documentos.",
        },
      },
      "proyectos": {
        type: "dir",
        children: {
          "regicide.txt": {
            type: "file",
            description: "Juego de cartas en Java + JavaFX",
            summary: {
              en: "Card game developed in Java with JavaFX. JSON persistence, CSV stats, design patterns. Use 'projects' to see all projects.",
              es: "Juego de cartas en Java con JavaFX. Persistencia JSON, estadísticas CSV, patrones de diseño. Usa 'projects' para ver todos.",
            },
          },
          "pokedex.txt": {
            type: "file",
            description: "Explorador Pokémon con React + Vite",
            summary: {
              en: "Dynamic Pokémon explorer built with React and Vite. Consumes PokéAPI with async rendering. Use 'projects' to see all projects.",
              es: "Explorador Pokémon dinámico con React y Vite. Consume PokéAPI con renderizado asíncrono. Usa 'projects' para ver todos.",
            },
          },
          "terminal.txt": {
            type: "file",
            description: "Este portafolio en Vue 3 + Tailwind",
            summary: {
              en: "This very portfolio. Interactive terminal interface with Vue 3 and real command system. Use 'projects' to see all projects.",
              es: "Este mismo portafolio. Interfaz terminal interactiva con Vue 3 y sistema de comandos real. Usa 'projects' para ver todos.",
            },
          },
        },
      },
    },
  },
};

export function resolvePath(currentPath) {
  const parts = currentPath.replace(/^~\/?/, "").split("/").filter(Boolean);
  let node = virtualFS["~"];
  for (const part of parts) {
    if (!node || node.type !== "dir" || !node.children[part]) return null;
    node = node.children[part];
  }
  return node;
}

export function getPromptPath(path) {
  if (path === "~") return "~";
  if (path.startsWith("~/")) return path;
  return "~/" + path;
}
