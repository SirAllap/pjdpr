import { FC } from 'react'

interface WallpaperTileProps {
  focused: boolean
  onClick: () => void
  wallpaper: number
  onWallpaperChange: (i: number) => void
}

export interface Wallpaper {
  label: string
  image: string | null  // null = no wallpaper
}

export const WALLPAPERS: Wallpaper[] = [
  { label: 'void',        image: null },
  // tokyo-night
  { label: 'purple girl', image: '/images/purple-girl.webp' },
  { label: 'anime girl',  image: '/images/cat_anime-girl.webp' },
  { label: 'shiny pur',   image: '/images/shiny_purple.webp' },
  { label: 'pixel city',  image: '/images/pixel_big_city.webp' },
  // nord
  { label: 'cool rocks',  image: '/images/cool_rocks.webp' },
  { label: "let's go",    image: '/images/lets_go_home.webp' },
  { label: 'gradient',    image: '/images/gradient-pb.webp' },
  // solarized
  { label: 'pastel win',  image: '/images/pastel-window.webp' },
  { label: 'kyoto',       image: '/images/yellow_kyoto.webp' },
  { label: 'colorful',    image: '/images/ign_colorful.webp' },
]

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
          >
            ‹
          </button>
          <span className="wallpaper-idx">
            {current.label}
          </span>
          <button
            className="wallpaper-nav-btn"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default WallpaperTile
