import { FC } from 'react'

export type Theme = 'dark' | 'dim' | 'light'

interface ThemeTileProps {
  focused: boolean
  onClick: () => void
  theme: Theme
  onThemeChange: (t: Theme) => void
}

const THEMES: { icon: string; label: string; value: Theme }[] = [
  { icon: '☀️', label: 'light', value: 'light' },
  { icon: '❄️', label: 'dim',   value: 'dim'   },
  { icon: '🌙', label: 'dark',  value: 'dark'  },
]

const ThemeTile: FC<ThemeTileProps> = ({ focused, onClick, theme, onThemeChange }) => {
  return (
    <div
      className={`tile clickable${focused ? ' focused' : ' blurred'}`}
      onClick={onClick}
      style={{ flexShrink: 0, height: '56px' }}
    >
      <div className="theme-tile-inner">
        {THEMES.map(({ icon, label, value }) => (
          <button
            key={value}
            className={`theme-btn${theme === value ? ' active' : ''}`}
            onClick={(e) => { e.stopPropagation(); onThemeChange(value) }}
            title={label}
            aria-label={`${label} theme`}
            aria-pressed={theme === value}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeTile
