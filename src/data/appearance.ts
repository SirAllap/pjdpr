// ─── Appearance data: themes, accent colours, wallpapers ───────────────────────

export type Theme = 'dark' | 'dim' | 'light'

export const THEMES: { icon: string; label: string; value: Theme }[] = [
  { icon: '☀️', label: 'light', value: 'light' },
  { icon: '❄️', label: 'dim',   value: 'dim'   },
  { icon: '🌙', label: 'dark',  value: 'dark'  },
]

// Accent colour palette
export const ACCENTS = [
  '#f43f5e', '#ec4899', '#d946ef',
  '#a855f7', '#8b5cf6', '#6366f1',
  '#3b82f6', '#0ea5e9', '#06b6d4',
  '#14b8a6', '#10b981', '#22c55e',
  '#84cc16', '#f59e0b', '#f97316',
]

export interface Wallpaper {
  label: string
  image: string | null // null = no wallpaper
}

const LW = 'https://raw.githubusercontent.com/whoisYoges/lwalpapers/PicturesOnly/wallpapers'

export const WALLPAPERS: Wallpaper[] = [
  { label: 'void',   image: null },
  { label: 'b-015',  image: `${LW}/b-015.jpg` },
  { label: 'b-060',  image: `${LW}/b-060.jpg` },
  { label: 'b-120',  image: `${LW}/b-120.jpg` },
  { label: 'b-180',  image: `${LW}/b-180.jpg` },
  { label: 'b-240',  image: `${LW}/b-240.jpg` },
  { label: 'b-300',  image: `${LW}/b-300.jpg` },
  { label: 'b-380',  image: `${LW}/b-380.jpg` },
  { label: 'b-450',  image: `${LW}/b-450.jpg` },
  { label: 'b-520',  image: `${LW}/b-520.jpg` },
  { label: 'b-600',  image: `${LW}/b-600.jpg` },
  { label: 'b-680',  image: `${LW}/b-680.jpg` },
  { label: 'b-760',  image: `${LW}/b-760.jpg` },
  { label: 'b-840',  image: `${LW}/b-840.jpg` },
]
