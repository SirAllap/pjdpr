import { FC } from 'react'
import { personal } from '../data/portfolio'
import { Theme } from './ThemeTile'

interface NeofetchTileProps {
  focused: boolean
  onClick: () => void
  theme: Theme
}

// Block-letter DPR in dleer-portfolio style (box-drawing characters)
const ASCII = `██████╗ ██████╗ ██████╗
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔═══╝ ██╔══██╗
██████╔╝██║     ██║  ██║
╚═════╝ ╚═╝     ╚═╝  ╚═╝`

const INFO_ROWS: Array<{ key: string; val: string; link?: string }> = [
  { key: 'user',     val: personal.name },
  { key: 'role',     val: personal.role },
  { key: 'location', val: 'Seville, Spain' },
  { key: 'company',  val: 'Smith.ai (Backend)' },
  { key: 'editor',   val: 'neovim + tmux' },
  { key: 'shell',    val: 'zsh' },
  { key: 'os',       val: 'GNU/Linux x86_64' },
  { key: 'github',   val: personal.contact.githubHandle,   link: personal.contact.github   },
  { key: 'linkedin', val: personal.contact.linkedinHandle, link: personal.contact.linkedin },
]

// Theme palette dots — order: bg, error, success, warning, accent, info, primary, text.
// Each entry matches the active theme so the swatch row mirrors the real palette.
const DOT_PALETTES: Record<Theme, string[]> = {
  dark: ['#1a1b26', '#f7768e', '#9ece6a', '#e0af68', '#bb9af7', '#7dcfff', '#7aa2f7', '#c0caf5'],
  dim:  ['#2e3440', '#bf616a', '#a3be8c', '#ebcb8b', '#b48ead', '#5e81ac', '#81a1c1', '#d8dee9'],
  light: ['#fdf6e3', '#dc322f', '#859900', '#b58900', '#6c71c4', '#2aa198', '#268bd2', '#073642'],
}

const NeofetchTile: FC<NeofetchTileProps> = ({ focused, onClick, theme }) => {
  const DOT_COLORS = DOT_PALETTES[theme] ?? DOT_PALETTES.dark
  return (
    <div
      className={`tile neofetch-tile clickable${focused ? ' focused' : ' blurred'}`}
      onClick={onClick}
    >
      <div className="tile-inner scrollable">
        <div className="neofetch-layout">
          {/* DPR block-letter ASCII art */}
          <pre className="neofetch-ascii">{ASCII}</pre>

          {/* Info */}
          <div className="neofetch-info">
            <div className="neofetch-username">
              <span className="neo-user">david</span>
              <span className="neo-at">@</span>
              <span className="neo-host">DPR</span>
            </div>
            <hr className="neofetch-divider" />
            {INFO_ROWS.map(({ key, val, link }) => (
              <div className="neofetch-row" key={key}>
                <span className="neo-key">{key}</span>
                {link ? (
                  <a
                    className="neo-val neo-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {val}
                  </a>
                ) : (
                  <span className="neo-val">{val}</span>
                )}
              </div>
            ))}
            <div className="neofetch-colors">
              {DOT_COLORS.map((c) => (
                <span
                  key={c}
                  className="neofetch-color-dot"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeofetchTile
