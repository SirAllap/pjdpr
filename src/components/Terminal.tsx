import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { personal, projects } from '../data/portfolio'
import { Theme } from './ThemeTile'

type Section = 'about' | 'projects' | 'experience' | 'contact'

interface TerminalActions {
  navigate: (s: Section) => void
  selectProject: (id: string) => void
  setTheme: (t: Theme) => void
  openCv: () => void
}

interface TerminalProps {
  open: boolean
  onClose: () => void
  actions: TerminalActions
}

interface Line { type: 'in' | 'out' | 'err'; text: string }

const COMMANDS = ['help', 'ls', 'cat', 'open', 'theme', 'whoami', 'neofetch', 'date', 'echo', 'clear', 'exit']

const HELP: string[] = [
  'available commands:',
  '  help              show this help',
  '  ls [work]         list sections (or projects)',
  '  cat <section>     open about | experience | work | contact',
  '  open <target>     github | linkedin | cv | email | <project-id>',
  '  theme <name>      dark | dim | light',
  '  whoami            a quick bio',
  '  neofetch          system info',
  '  date              current date & time',
  '  echo <text>       print text',
  '  clear             clear the screen',
  '  exit              close the terminal',
]

const Terminal: FC<TerminalProps> = ({ open, onClose, actions }) => {
  const [lines, setLines] = useState<Line[]>([
    { type: 'out', text: "welcome to dpr-sh — type 'help' to get started." },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 60) }, [open])
  useEffect(() => { bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight }) }, [lines, open])

  const print = (...out: Line[]) => setLines((l) => [...l, ...out])

  const run = (raw: string) => {
    const cmd = raw.trim()
    print({ type: 'in', text: cmd })
    if (!cmd) return
    setHistory((h) => [...h, cmd])
    setHistIdx(-1)
    const [name, ...args] = cmd.split(/\s+/)
    const arg = args.join(' ')

    switch (name.toLowerCase()) {
      case 'help':
        print(...HELP.map((text) => ({ type: 'out' as const, text })))
        break
      case 'ls':
        if (/work|projects/i.test(arg)) print(...projects.map((p) => ({ type: 'out' as const, text: `  ${p.id}` })))
        else print({ type: 'out', text: 'about   work   experience   contact' })
        break
      case 'cat': {
        const map: Record<string, Section> = {
          about: 'about', experience: 'experience',
          work: 'projects', projects: 'projects', contact: 'contact',
        }
        const s = map[arg.toLowerCase()]
        if (s) { print({ type: 'out', text: `opening ${arg}…` }); actions.navigate(s); onClose() }
        else print({ type: 'err', text: `cat: ${arg || '?'}: no such section` })
        break
      }
      case 'about': actions.navigate('about'); onClose(); break
      case 'experience': actions.navigate('experience'); onClose(); break
      case 'work':
      case 'projects': actions.navigate('projects'); onClose(); break
      case 'contact': actions.navigate('contact'); onClose(); break
      case 'cv':
      case 'resume': actions.openCv(); onClose(); break
      case 'open': {
        const a = arg.toLowerCase()
        if (a === 'github') window.open(personal.contact.github, '_blank', 'noopener')
        else if (a === 'linkedin') window.open(personal.contact.linkedin, '_blank', 'noopener')
        else if (a === 'cv' || a === 'resume') { actions.openCv(); onClose() }
        else if (a === 'email') window.location.href = `mailto:${personal.contact.email}`
        else if (projects.some((p) => p.id === a)) { actions.selectProject(a); onClose() }
        else print({ type: 'err', text: `open: ${arg || '?'}: unknown target` })
        break
      }
      case 'theme':
        if (arg === 'dark' || arg === 'dim' || arg === 'light') {
          actions.setTheme(arg); print({ type: 'out', text: `theme → ${arg}` })
        } else print({ type: 'err', text: 'usage: theme <dark|dim|light>' })
        break
      case 'whoami':
        print({ type: 'out', text: `${personal.name} — ${personal.role}` }, { type: 'out', text: personal.summary })
        break
      case 'neofetch':
        print(
          { type: 'out', text: 'david@DPR' },
          { type: 'out', text: `role      ${personal.role}` },
          { type: 'out', text: `location  ${personal.location}` },
          { type: 'out', text: 'editor    neovim + tmux' },
          { type: 'out', text: 'shell     zsh' },
          { type: 'out', text: 'os        GNU/Linux x86_64' },
        )
        break
      case 'date': print({ type: 'out', text: new Date().toString() }); break
      case 'echo': print({ type: 'out', text: arg }); break
      case 'sudo': print({ type: 'err', text: "nice try — you don't have permission for that 😏" }); break
      case 'clear': setLines([]); break
      case 'exit':
      case 'quit': onClose(); break
      default: print({ type: 'err', text: `command not found: ${name} — type 'help'` })
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { run(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length) {
        const i = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1)
        setHistIdx(i); setInput(history[i] ?? '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx >= 0) {
        const i = histIdx + 1
        if (i >= history.length) { setHistIdx(-1); setInput('') }
        else { setHistIdx(i); setInput(history[i]) }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const m = COMMANDS.filter((c) => c.startsWith(input.trim()))
      if (m.length === 1) setInput(m[0] + ' ')
    } else if (e.key === 'Escape') { onClose() }
  }

  return (
    <div className={`term-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="term-backdrop" onClick={onClose} />
      <div className="term-window" role="dialog" aria-modal="true" aria-label="Terminal">
        <div className="term-titlebar">
          <span className="term-dots"><i /><i /><i /></span>
          <span className="term-title">david@DPR: ~</span>
          <button className="term-x" onClick={onClose} aria-label="Close terminal">✕</button>
        </div>
        <div className="term-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {lines.map((l, i) => (
            <div key={i} className={`term-line term-${l.type}`}>
              {l.type === 'in'
                ? <><span className="term-prompt">❯</span> {l.text}</>
                : l.text}
            </div>
          ))}
          <div className="term-inputline">
            <span className="term-prompt">❯</span>
            <input
              ref={inputRef}
              className="term-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal command input"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal
