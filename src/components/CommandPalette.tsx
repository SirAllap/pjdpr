import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { personal, projects } from '../data/portfolio'
import { Theme } from '../data/appearance'
import { useFocusTrap } from '../lib/useFocusTrap'

type Section = 'about' | 'projects' | 'experience' | 'contact'

interface PaletteActions {
  navigate: (s: Section) => void
  selectProject: (id: string) => void
  setTheme: (t: Theme) => void
  openCv: () => void
  openTerminal: () => void
}

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  actions: PaletteActions
}

interface Cmd { id: string; label: string; hint: string; run: () => void }

const CommandPalette: FC<CommandPaletteProps> = ({ open, onClose, actions }) => {
  const [query, setQuery] = useState('')
  const [idx, setIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  useFocusTrap(panelRef, open)

  const commands: Cmd[] = useMemo(() => {
    const run = (fn: () => void) => () => { fn(); onClose() }
    return [
      { id: 'about', label: 'Go to About', hint: 'section', run: run(() => actions.navigate('about')) },
      { id: 'work', label: 'Go to Work', hint: 'section', run: run(() => actions.navigate('projects')) },
      { id: 'experience', label: 'Go to Experience', hint: 'section', run: run(() => actions.navigate('experience')) },
      { id: 'contact', label: 'Go to Contact', hint: 'section', run: run(() => actions.navigate('contact')) },
      { id: 'cv', label: 'Open résumé / CV', hint: 'action', run: run(actions.openCv) },
      { id: 'terminal', label: 'Open terminal', hint: 'action', run: run(actions.openTerminal) },
      { id: 'theme-dark', label: 'Theme: dark', hint: 'theme', run: run(() => actions.setTheme('dark')) },
      { id: 'theme-dim', label: 'Theme: dim', hint: 'theme', run: run(() => actions.setTheme('dim')) },
      { id: 'theme-light', label: 'Theme: light', hint: 'theme', run: run(() => actions.setTheme('light')) },
      { id: 'github', label: 'Open GitHub', hint: 'link', run: run(() => window.open(personal.contact.github, '_blank', 'noopener')) },
      { id: 'linkedin', label: 'Open LinkedIn', hint: 'link', run: run(() => window.open(personal.contact.linkedin, '_blank', 'noopener')) },
      ...projects.map((p) => ({
        id: `p-${p.id}`, label: `Project: ${p.title}`, hint: 'project',
        run: run(() => actions.selectProject(p.id)),
      })),
    ]
  }, [actions, onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => (c.label + ' ' + c.hint).toLowerCase().includes(q))
  }, [query, commands])

  useEffect(() => { setIdx(0) }, [query])
  useEffect(() => { if (open) { setQuery(''); setTimeout(() => inputRef.current?.focus(), 50) } }, [open])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); results[idx]?.run() }
    else if (e.key === 'Escape') { onClose() }
  }

  return (
    <div className={`palette-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="palette-backdrop" onClick={onClose} />
      <div className="palette" ref={panelRef} role="dialog" aria-modal="true" aria-label="Command palette" tabIndex={-1}>
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Type a command or search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Command palette search"
          spellCheck={false}
        />
        <ul className="palette-list">
          {results.length === 0 && <li className="palette-empty">no matches</li>}
          {results.map((c, i) => (
            <li key={c.id}>
              <button
                className={`palette-item${i === idx ? ' active' : ''}`}
                onMouseEnter={() => setIdx(i)}
                onClick={c.run}
              >
                <span>{c.label}</span>
                <span className="palette-hint">{c.hint}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="palette-foot">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> run</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
