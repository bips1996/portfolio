"use client";

import { Command } from "cmdk";
import { FileText, FolderGit2, Mail, MoveUpRight, User } from "lucide-react";
import { useMemo } from "react";
import { navItems, socialLinks } from "@/lib/content/portfolio-data";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

export function CommandPalette({
  open,
  onOpenChange,
  onNavigate,
}: CommandPaletteProps) {
  const items = useMemo(
    () => [
      ...navItems.map((item) => ({
        id: item.id,
        label: `Go to ${item.label}`,
        action: () => onNavigate(item.id),
        icon: MoveUpRight,
      })),
      {
        id: "resume",
        label: "Open Resume",
        action: () => window.open(socialLinks.resume, "_blank", "noopener,noreferrer"),
        icon: FileText,
      },
      {
        id: "github",
        label: "Open GitHub",
        action: () => window.open(socialLinks.github, "_blank", "noopener,noreferrer"),
        icon: FolderGit2,
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        action: () => window.open(socialLinks.linkedin, "_blank", "noopener,noreferrer"),
        icon: User,
      },
      {
        id: "email",
        label: "Email Biplaba",
        action: () => window.open(socialLinks.email, "_self"),
        icon: Mail,
      },
    ],
    [onNavigate],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/25 px-4 pt-24 backdrop-blur-sm transition-colors duration-300"
      onClick={() => onOpenChange(false)}
      role="dialog"
      aria-modal="true"
    >
      <Command
        className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card p-2 text-card-foreground shadow-2xl shadow-black/40 ring-1 ring-border/60 transition-colors duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        <Command.Input
          placeholder="Type a command or search…"
          className="w-full rounded-md border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground outline-none ring-0 transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:bg-background"
        />
        <Command.List className="mt-3 max-h-80 overflow-y-auto">
          <Command.Empty className="px-3 py-6 text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          <Command.Group heading="Navigation" className="text-xs text-muted-foreground">
            {items.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={() => {
                  item.action();
                  onOpenChange(false);
                }}
                className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors data-[selected=true]:bg-primary/12 data-[selected=true]:text-foreground"
              >
                <item.icon className="h-4 w-4 shrink-0 text-primary/90" />
                <span>{item.label}</span>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
