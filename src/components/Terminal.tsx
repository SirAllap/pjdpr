import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { personal, projects } from '../data/portfolio'
import { Theme } from './ThemeTile'
import { useFocusTrap } from '../lib/useFocusTrap'

type Section = 'about' | 'projects' | 'experience' | 'contact'

interface TerminalActions {
  navigate: (s: Section) => void
  selectProject: (id: string) => void
  setTheme: (t: Theme) => void
  openCv: () => void
  matrix: () => void
}

const REPO = 'https://github.com/SirAllap/pjdpr'

const MAN: Record<string, string> = {
  help: 'help — list available commands',
  ls: 'ls [work] — list sections, or projects with `ls work`',
  cat: 'cat <section> — open about | experience | work | contact',
  open: 'open <target> — github | linkedin | cv | email | <project-id>',
  theme: 'theme <dark|dim|light> — switch the colour theme',
  whoami: 'whoami — a one-line bio',
  neofetch: 'neofetch — system-info style summary',
  history: 'history — show the commands you have run',
  repo: 'repo — open the source code of this site',
  matrix: 'matrix — there is no spoon',
  date: 'date — current date & time',
  echo: 'echo <text> — print text',
  clear: 'clear — clear the screen',
  exit: 'exit — close the terminal',
}

interface TerminalProps {
  open: boolean
  onClose: () => void
  actions: TerminalActions
}

interface Line { type: 'in' | 'out' | 'err'; text: string }

const COMMANDS = ['help', 'ls', 'cat', 'open', 'theme', 'whoami', 'neofetch', 'history', 'man', 'repo', 'matrix', 'pwd', 'date', 'echo', 'clear', 'exit']

const ARG_OPTIONS: Record<string, string[]> = {
  cat: ['about', 'experience', 'work', 'contact'],
  theme: ['dark', 'dim', 'light'],
  man: COMMANDS,
}

// Returns the full suggested input string for the current text, or '' if none.
// Commands get a trailing space; argument completions don't.
function complete(input: string): string {
  if (!input || /\s$/.test(input)) return ''
  const parts = input.split(/\s+/)
  if (parts.length <= 1) {
    const m = COMMANDS.find((c) => c !== parts[0] && c.startsWith(parts[0]))
    return m ? m + ' ' : ''
  }
  const cmd = parts[0].toLowerCase()
  const opts = cmd === 'open'
    ? ['github', 'linkedin', 'cv', 'email', ...projects.map((p) => p.id)]
    : ARG_OPTIONS[cmd] ?? []
  const partial = parts[parts.length - 1]
  if (!partial) return ''
  const m = opts.find((o) => o !== partial && o.startsWith(partial))
  return m ? [...parts.slice(0, -1), m].join(' ') : ''
}

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
    { type: 'out', text: 'dpr-sh v1.0.0 — interactive portfolio shell' },
    { type: 'out', text: "type 'help' for commands · 'cat about' to begin · ⌘/Ctrl-K for the palette" },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const windowRef = useRef<HTMLDivElement>(null)
  useFocusTrap(windowRef, open)

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
      case 'history':
        print(...(history.length ? history.map((h, i) => ({ type: 'out' as const, text: `  ${i + 1}  ${h}` })) : [{ type: 'out' as const, text: '(empty)' }]))
        break
      case 'man':
        print({ type: arg && MAN[arg] ? 'out' : 'err', text: MAN[arg] ?? `man: no entry for '${arg || '?'}'` })
        break
      case 'repo':
      case 'source': window.open(REPO, '_blank', 'noopener'); print({ type: 'out', text: 'opening source…' }); break
      case 'pwd': print({ type: 'out', text: '/home/david/DPR' }); break
      case 'matrix': print({ type: 'out', text: 'there is no spoon…' }); actions.matrix(); break
      case 'date': print({ type: 'out', text: new Date().toString() }); break
      case 'echo': print({ type: 'out', text: arg }); break
      case 'sudo': print({ type: 'err', text: "nice try — you don't have permission for that 😏" }); break
      case 'clear': setLines([]); break
      case 'exit':
      case 'quit': onClose(); break
      default: print({ type: 'err', text: `command not found: ${name} — type 'help'` })
    }
  }

  // Inline (fish-style) autocomplete suggestion
  const suggestion = complete(input)
  const ghost = suggestion.startsWith(input) ? suggestion.slice(input.length) : ''
  const acceptSuggestion = () => {
    if (!ghost) return
    setInput(suggestion)
    requestAnimationFrame(() => {
      inputRef.current?.setSelectionRange(suggestion.length, suggestion.length)
    })
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
      acceptSuggestion()
    } else if (e.key === 'ArrowRight') {
      const el = inputRef.current
      const atEnd = el && el.selectionStart === input.length && el.selectionEnd === input.length
      if (ghost && atEnd) { e.preventDefault(); acceptSuggestion() }
    } else if (e.key === 'Escape') { onClose() }
  }

  return (
    <div className={`term-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="term-backdrop" onClick={onClose} />
      <div className="term-window" role="dialog" aria-modal="true" aria-label="Terminal" ref={windowRef} tabIndex={-1}>
        <div className="term-titlebar">
          <span className="term-id">
            <span className="term-arch" aria-hidden="true" />
            <span className="term-user">david</span>
            <span className="term-at">@</span>
            <span className="term-host">arch</span>
            <span className="term-cwd">:~</span>
          </span>
          <span className="term-shell">zsh</span>
          <button className="term-x" onClick={onClose} aria-label="Close terminal">✕</button>
        </div>
        <div className="term-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {lines.map((l, i) => (
            <div key={i} className={`term-line term-${l.type}`}>
              {l.type === 'in'
                ? <><span className="term-cwd2">~</span><span className="term-prompt">❯</span> {l.text}</>
                : l.text}
            </div>
          ))}
          <div className="term-inputline">
            <span className="term-cwd2">~</span>
            <span className="term-prompt">❯</span>
            <span className="term-input-wrap">
              <input
                ref={inputRef}
                className="term-input"
                value={input}
                onChange={(e) => setInput(e.target.value.toLowerCase())}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                inputMode="text"
                aria-label="Terminal command input"
              />
              {ghost && (
                <span className="term-ghost" aria-hidden="true">
                  <span className="gh-typed">{input}</span>{ghost}
                  <span className="gh-key">↹ tab</span>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal
