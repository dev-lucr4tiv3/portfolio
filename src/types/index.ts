export interface DiscordPresence {
  active: boolean;
  status?: 'online' | 'idle' | 'dnd' | 'offline';
  activity?: {
    name: string;
    details?: string;
    state?: string;
    assets?: {
      large_image?: string;
      large_text?: string;
      small_image?: string;
      small_text?: string;
    };
  };
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
  codeSnippet: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}