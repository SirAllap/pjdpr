import { FC, useEffect, useState } from 'react'
import './App.css'
import BlobBackground from './components/BlobBackground'
import Polybar from './components/Polybar'
import NeofetchTile from './components/NeofetchTile'
import NavigationTile from './components/NavigationTile'
import ContentViewer from './components/ContentViewer'
import ThemeTile, { Theme } from './components/ThemeTile'
import AccentColorTile from './components/AccentColorTile'
import WallpaperTile, { WALLPAPERS } from './components/WallpaperTile'
import SettingsDrawer from './components/SettingsDrawer'
import CvModal from './components/CvModal'
import Terminal from './components/Terminal'
import ScrollTop from './components/ScrollTop'
import { track } from './lib/analytics'

// ─── Types ────────────────────────────────────────────────────────────────────
type Section  = 'about' | 'projects' | 'experience' | 'contact'
type TileId   = 'neofetch' | 'navigation' | 'content' | 'theme' | 'accent' | 'wallpaper'
type ActiveItem =
  | { type: 'section'; section: Section }
  | { type: 'project'; id: string }

// ─── Helpers ──────────────────────────────────────────────────────────────────
function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

function load<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key)
    return v !== null ? (JSON.parse(v) as T) : fallback
  } catch {
    return fallback
  }
}

// ─── Tile order for Tab cycling ──────────────────────────────────────────────
const TILE_ORDER: TileId[] = ['content', 'navigation', 'neofetch', 'theme', 'accent', 'wallpaper']

// ─── App ──────────────────────────────────────────────────────────────────────
const App: FC = () => {
  const [focusedTile, setFocusedTile] = useState<TileId>('content')
  const [activeItem, setActiveItem]   = useState<ActiveItem>({
    type: 'section',
    section: 'about',
  })
  const [theme,     setTheme]     = useState<Theme>(() => load<Theme>('pjdpr-theme', 'dark'))
  const [accent,    setAccent]    = useState<string>(() => load<string>('pjdpr-accent', '#bb9af7'))
  const [wallpaper, setWallpaper] = useState<number>(() => load<number>('pjdpr-wallpaper', 0))
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  // ── apply theme class to <html> ───────────────────────────────────────────
  useEffect(() => {
    document.documentElement.className = `theme-${theme}`
    localStorage.setItem('pjdpr-theme', JSON.stringify(theme))
  }, [theme])

  // ── apply accent color CSS vars ───────────────────────────────────────────
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--accent-rgb', hexToRgb(accent))
    localStorage.setItem('pjdpr-accent', JSON.stringify(accent))
  }, [accent])

  // ── persist wallpaper ────────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem('pjdpr-wallpaper', JSON.stringify(wallpaper))
  }, [wallpaper])

  // ── init: apply all persisted values immediately ──────────────────────────
  useEffect(() => {
    document.documentElement.className = `theme-${theme}`
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--accent-rgb', hexToRgb(accent))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── open CV from anywhere (Contact / About dispatch this event) ────────────
  useEffect(() => {
    const handler = () => { setCvOpen(true); track('cv_open') }
    window.addEventListener('pjdpr:open-cv', handler)
    return () => window.removeEventListener('pjdpr:open-cv', handler)
  }, [])

  // ── keyboard: backtick toggles the terminal ───────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName.toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      if (e.key === '`') { e.preventDefault(); setTerminalOpen((v) => !v) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ── keyboard: Tab / Shift+Tab cycle tiles ─────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName.toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      if (e.key === 'Tab') {
        e.preventDefault()
        setFocusedTile((prev) => {
          const idx = TILE_ORDER.indexOf(prev)
          return e.shiftKey
            ? TILE_ORDER[(idx - 1 + TILE_ORDER.length) % TILE_ORDER.length]
            : TILE_ORDER[(idx + 1) % TILE_ORDER.length]
        })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ── helpers ───────────────────────────────────────────────────────────────
  const selectSection = (section: Section) => {
    setActiveItem({ type: 'section', section })
    setFocusedTile('content')
    track('nav_section', { section })
  }

  const selectProject = (id: string) => {
    setActiveItem({ type: 'project', id })
    setFocusedTile('content')
    track('project_view', { id })
  }

  const openCv = () => { setCvOpen(true); track('cv_open') }
  const openTerminal = () => { setTerminalOpen((v) => !v); track('terminal_open') }

  const polybarSection: Section =
    activeItem.type === 'section'
      ? activeItem.section
      : 'projects'

  // ── render ────────────────────────────────────────────────────────────────
  const wallpaperImage = WALLPAPERS[wallpaper]?.image ?? null

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      {/* Wallpaper image layer (behind blobs) */}
      {wallpaperImage && (
        <div
          className="wallpaper-bg"
          style={{ backgroundImage: `url(${wallpaperImage})` }}
        />
      )}
      <BlobBackground />

      <Polybar
        activeSection={polybarSection}
        onNavigate={selectSection}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenTerminal={openTerminal}
      />

      <div className="tile-grid">
        {/* ─── LEFT COLUMN ─── */}
        <div className="left-col">
          <NeofetchTile
            focused={focusedTile === 'neofetch'}
            onClick={() => setFocusedTile('neofetch')}
            theme={theme}
          />

          <div className="bottom-row">
            {/* small control tiles */}
            <div className="small-tiles-col">
              <ThemeTile
                focused={focusedTile === 'theme'}
                onClick={() => setFocusedTile('theme')}
                theme={theme}
                onThemeChange={setTheme}
              />
              <AccentColorTile
                focused={focusedTile === 'accent'}
                onClick={() => setFocusedTile('accent')}
                accent={accent}
                onAccentChange={setAccent}
              />
              <WallpaperTile
                focused={focusedTile === 'wallpaper'}
                onClick={() => setFocusedTile('wallpaper')}
                wallpaper={wallpaper}
                onWallpaperChange={setWallpaper}
              />
            </div>

            <NavigationTile
              focused={focusedTile === 'navigation'}
              onClick={() => setFocusedTile('navigation')}
              activeItem={activeItem}
              onSelectSection={selectSection}
              onSelectProject={selectProject}
            />
          </div>
        </div>

        {/* ─── RIGHT COLUMN ─── */}
        <div className="right-col" id="main-content" tabIndex={-1}>
          <ContentViewer
            focused={focusedTile === 'content'}
            onClick={() => setFocusedTile('content')}
            activeItem={activeItem}
            onSelectProject={selectProject}
            onSelectSection={selectSection}
          />
        </div>
      </div>

      <SettingsDrawer
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        theme={theme}
        onThemeChange={setTheme}
        accent={accent}
        onAccentChange={setAccent}
        wallpaper={wallpaper}
        onWallpaperChange={setWallpaper}
      />

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />

      <Terminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        actions={{
          navigate: selectSection,
          selectProject,
          setTheme,
          openCv,
        }}
      />

      <ScrollTop />
    </div>
  )
}

export default App
