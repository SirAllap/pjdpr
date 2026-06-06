import { FC } from 'react'

interface AccentColorTileProps {
  focused: boolean
  onClick: () => void
  accent: string
  onAccentChange: (color: string) => void
}

// Matches dleer's accent color palette exactly
export const ACCENTS = [
  '#f43f5e', '#ec4899', '#d946ef',
  '#a855f7', '#8b5cf6', '#6366f1',
  '#3b82f6', '#0ea5e9', '#06b6d4',
  '#14b8a6', '#10b981', '#22c55e',
  '#84cc16', '#f59e0b', '#f97316',
]

const AccentColorTile: FC<AccentColorTileProps> = ({
  focused,
  onClick,
  accent,
  onAccentChange,
}) => {
  return (
    <div
      className={`tile clickable${focused ? ' focused' : ' blurred'}`}
      onClick={onClick}
    >
      <div className="accent-tile-inner">
        <span className="accent-tile-label">accent</span>
        <div className="accent-grid">
          {ACCENTS.map((c) => (
            <button
              key={c}
              className={`accent-swatch${accent === c ? ' active' : ''}`}
              style={{ background: c }}
              onClick={(e) => { e.stopPropagation(); onAccentChange(c) }}
              title={c}
              aria-label={`Accent color ${c}`}
              aria-pressed={accent === c}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccentColorTile
