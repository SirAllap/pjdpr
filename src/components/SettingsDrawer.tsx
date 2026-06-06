import { FC, useEffect } from 'react'
import { Theme, THEMES } from './ThemeTile'
import { ACCENTS } from './AccentColorTile'
import { WALLPAPERS } from './WallpaperTile'

interface SettingsDrawerProps {
  open: boolean
  onClose: () => void
  theme: Theme
  onThemeChange: (t: Theme) => void
  accent: string
  onAccentChange: (c: string) => void
  wallpaper: number
  onWallpaperChange: (i: number) => void
}

const SettingsDrawer: FC<SettingsDrawerProps> = ({
  open,
  onClose,
  theme,
  onThemeChange,
  accent,
  onAccentChange,
  wallpaper,
  onWallpaperChange,
}) => {
  const current = WALLPAPERS[wallpaper]
  const prev = () => onWallpaperChange((wallpaper - 1 + WALLPAPERS.length) % WALLPAPERS.length)
  const next = () => onWallpaperChange((wallpaper + 1) % WALLPAPERS.length)

  // Close on Escape; lock background scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return (
    <div
      className={`settings-overlay${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Appearance settings"
      aria-hidden={!open}
    >
      <div className="settings-backdrop" onClick={onClose} />

      <aside className="settings-panel">
        <div className="settings-header">
          <span className="settings-title">
            <span className="settings-prompt">$</span> appearance
          </span>
          <button className="settings-close" onClick={onClose} aria-label="Close settings">
            ✕
          </button>
        </div>

        {/* Theme */}
        <section className="settings-group">
          <span className="settings-label">theme</span>
          <div className="settings-theme-row">
            {THEMES.map(({ icon, label, value }) => (
              <button
                key={value}
                className={`settings-theme-btn${theme === value ? ' active' : ''}`}
                onClick={() => onThemeChange(value)}
                aria-pressed={theme === value}
              >
                <span className="settings-theme-icon">{icon}</span>
                <span className="settings-theme-name">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Accent */}
        <section className="settings-group">
          <span className="settings-label">accent</span>
          <div className="settings-accent-grid">
            {ACCENTS.map((c) => (
              <button
                key={c}
                className={`settings-swatch${accent === c ? ' active' : ''}`}
                style={{ background: c }}
                onClick={() => onAccentChange(c)}
                aria-label={`Accent color ${c}`}
                aria-pressed={accent === c}
              />
            ))}
          </div>
        </section>

        {/* Wallpaper */}
        <section className="settings-group">
          <span className="settings-label">wallpaper</span>
          <div
            className="settings-wallpaper-preview"
            style={
              current.image
                ? { backgroundImage: `url(${current.image})` }
                : undefined
            }
          >
            {!current.image && <span className="settings-wallpaper-none">none</span>}
          </div>
          <div className="settings-wallpaper-nav">
            <button className="settings-wp-btn" onClick={prev} aria-label="Previous wallpaper">‹</button>
            <span className="settings-wallpaper-idx">{current.label}</span>
            <button className="settings-wp-btn" onClick={next} aria-label="Next wallpaper">›</button>
          </div>
        </section>
      </aside>
    </div>
  )
}

export default SettingsDrawer
