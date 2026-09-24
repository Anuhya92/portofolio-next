import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiPostman,
} from "react-icons/si";
import type { IconType } from "react-icons";

const toolIcons: { name: string; Icon: IconType; color: string }[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#E8ECF4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#E8ECF4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
];

export default function Tools() {
  return (
    <div className="mt-14">
      <h3 className="text-center font-mono text-sm text-ink/50">
        Tools &amp; Technologies
      </h3>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {toolIcons.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-line bg-surface px-3 py-5 transition-colors hover:border-cyan/50"
          >
            <Icon size={28} color={color} />
            <span className="font-mono text-[11px] text-ink/60">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
