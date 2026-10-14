import {
  createIcons, Award, Box, CheckCircle2, Code2, Cpu, Download,
  ExternalLink, Layers, Loader2, ShieldCheck, Terminal, X,
} from "lucide";

// Only the icons the console uses, bundled, instead of the whole library from a CDN
export function renderIcons() {
  createIcons({
    icons: { Award, Box, CheckCircle2, Code2, Cpu, Download, ExternalLink, Layers, Loader2, ShieldCheck, Terminal, X },
  });
}
