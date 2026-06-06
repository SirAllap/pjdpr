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
