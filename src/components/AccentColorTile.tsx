import { FC } from 'react'
import { ACCENTS } from '../data/appearance'

interface AccentColorTileProps {
  focused: boolean
  onClick: () => void
  accent: string
  onAccentChange: (color: string) => void
}

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
