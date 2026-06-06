import { FC, useState, useEffect, useRef } from 'react'
import { projects } from '../data/portfolio'

type Section = 'about' | 'projects' | 'experience' | 'contact'
type ActiveItem = { type: 'section'; section: Section } | { type: 'project'; id: string }

interface NavigationTileProps {
  focused: boolean
  onClick: () => void
  activeItem: ActiveItem
  onSelectSection: (s: Section) => void
  onSelectProject: (id: string) => void
}

type EntryKind = 'section' | 'project' | 'folder'
interface NavEntry {
  kind: EntryKind
  id: string
  label: string
  indent: string
  icon?: string
}

const NavigationTile: FC<NavigationTileProps> = ({
  focused,
  onClick,
  activeItem,
  onSelectSection,
  onSelectProject,
}) => {
  const [workOpen, setWorkOpen] = useState(true)
  const [navIdx,   setNavIdx]   = useState(-1)

  // ── Build flat navigable list ─────────────────────────────────────────────
  const buildEntries = (open: boolean): NavEntry[] => [
    { kind: 'section', id: 'about',      label: 'about.md',      indent: '├─', icon: '📄' },
    { kind: 'folder',  id: '_work',      label: 'work/',         indent: '├─' },
    ...(open
      ? projects.map((p, i) => ({
          kind: 'project' as EntryKind,
          id: p.id,
          label: `${p.id}.md`,
          indent: i === projects.length - 1 ? '  └─' : '  ├─',
          icon: '📝',
        }))
      : []),
    { kind: 'section', id: 'experience', label: 'experience.md', indent: '├─', icon: '📄' },
    { kind: 'section', id: 'contact',    label: 'contact.md',    indent: '└─', icon: '📄' },
  ]

  const entries = buildEntries(workOpen)

  // Keep a ref so keyboard handler always sees latest entries + actions
  const entriesRef = useRef(entries)
  entriesRef.current = entries

  const actionRef = useRef<(e: NavEntry) => void>(() => {})
  actionRef.current = (e: NavEntry) => {
    if (e.kind === 'section') onSelectSection(e.id as Section)
    else if (e.kind === 'project') onSelectProject(e.id)
    else setWorkOpen((o) => !o)
  }

  // ── Keyboard navigation when this tile is focused ─────────────────────────
  useEffect(() => {
    if (!focused) {
      setNavIdx(-1)
      return
    }
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName.toLowerCase()
      if (tag === 'input' || tag === 'textarea') return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setNavIdx((i) => Math.min(i + 1, entriesRef.current.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setNavIdx((i) => (i <= 0 ? 0 : i - 1))
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setNavIdx((i) => {
          const entry = entriesRef.current[i]
          if (entry) actionRef.current(entry)
          return i
        })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [focused])

  // ── Helpers ───────────────────────────────────────────────────────────────
  const isActive = (e: NavEntry) =>
    (e.kind === 'section' && activeItem.type === 'section' && activeItem.section === e.id) ||
    (e.kind === 'project' && activeItem.type === 'project' && activeItem.id === e.id)

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      className={`tile nav-tile clickable${focused ? ' focused' : ' blurred'}`}
      onClick={onClick}
    >
      <div className="tile-inner scrollable">
        <div className="tree-header">~/DPR</div>

        {entries.map((entry, idx) => (
          <div
            key={`${entry.kind}-${entry.id}`}
            className={[
              'tree-item',
              entry.kind === 'folder' ? 'folder' : '',
              isActive(entry) ? 'active' : '',
              navIdx === idx ? 'kbd-cursor' : '',
            ].filter(Boolean).join(' ')}
            onClick={(e) => { e.stopPropagation(); actionRef.current(entry) }}
          >
            <span className="tree-branch">{entry.indent}</span>
            {entry.kind === 'folder' ? (
              <span className="tree-arrow">{workOpen ? '▾' : '▸'}</span>
            ) : (
              <span className="tree-icon">{entry.icon}</span>
            )}
            <span>{entry.label}</span>
          </div>
        ))}

        {/* Keyboard hint bar */}
        <div className="nav-keyhint">
          <span>
            <kbd className="nav-keyhint-key">↑↓</kbd> nav
          </span>
          <span>
            <kbd className="nav-keyhint-key">↵</kbd> open
          </span>
          <span>
            <kbd className="nav-keyhint-key">tab</kbd> switch
          </span>
          <span>
            <kbd className="nav-keyhint-key">`</kbd> terminal
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavigationTile
