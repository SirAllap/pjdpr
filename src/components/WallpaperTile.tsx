import { FC } from 'react'
import { WALLPAPERS } from '../data/appearance'

interface WallpaperTileProps {
  focused: boolean
  onClick: () => void
  wallpaper: number
  onWallpaperChange: (i: number) => void
}

const WallpaperTile: FC<WallpaperTileProps> = ({
  focused,
  onClick,
  wallpaper,
  onWallpaperChange,
}) => {
  const prev = () => onWallpaperChange((wallpaper - 1 + WALLPAPERS.length) % WALLPAPERS.length)
  const next = () => onWallpaperChange((wallpaper + 1) % WALLPAPERS.length)
  const current = WALLPAPERS[wallpaper]

  return (
    <div
      className={`tile clickable${focused ? ' focused' : ' blurred'}`}
      onClick={onClick}
      style={{ flex: 1, minHeight: 0 }}
    >
      <div className="wallpaper-tile-inner">
        <span className="wallpaper-label">wallpaper</span>
        <div
          className="wallpaper-preview active"
          style={
            current.image
              ? { backgroundImage: `url(${current.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { background: 'rgba(var(--surface-rgb), 0.40)' }
          }
        >
          {!current.image && (
            <span style={{ fontSize: '0.60rem', color: 'var(--text-muted)', position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              none
            </span>
          )}
        </div>
        <div className="wallpaper-nav">
          <button
            className="wallpaper-nav-btn"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous wallpaper"
          >
            ‹
          </button>
          <span className="wallpaper-idx">
            {current.label}
          </span>
          <button
            className="wallpaper-nav-btn"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next wallpaper"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default WallpaperTile
