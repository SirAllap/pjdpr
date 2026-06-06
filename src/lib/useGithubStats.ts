import { useEffect, useState } from 'react'

export interface GhStats {
  stars: number
  language: string | null
  pushedAt: string
}

function parseRepo(url: string | null): string | null {
  if (!url) return null
  const m = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git|\/)?$/)
  return m ? m[1] : null
}

// Fetches public repo stats from the GitHub API (stars / language / last push),
// caches per-repo in sessionStorage, and fails silently (rate limit / offline).
export function useGithubStats(githubUrl: string | null): GhStats | null {
  const [stats, setStats] = useState<GhStats | null>(null)

  useEffect(() => {
    const repo = parseRepo(githubUrl)
    if (!repo) return

    const key = `gh:${repo}`
    const cached = sessionStorage.getItem(key)
    if (cached) {
      try { setStats(JSON.parse(cached)); return } catch { /* refetch */ }
    }

    let cancelled = false
    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('gh'))))
      .then((d) => {
        if (cancelled) return
        const s: GhStats = {
          stars: d.stargazers_count ?? 0,
          language: d.language ?? null,
          pushedAt: d.pushed_at ?? '',
        }
        setStats(s)
        try { sessionStorage.setItem(key, JSON.stringify(s)) } catch { /* ignore */ }
      })
      .catch(() => { /* graceful: no stats */ })

    return () => { cancelled = true }
  }, [githubUrl])

  return stats
}

export function relativeTime(iso: string): string {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  const day = 86_400_000
  if (diff < day) return 'today'
  if (diff < 30 * day) return `${Math.round(diff / day)}d ago`
  if (diff < 365 * day) return `${Math.round(diff / (30 * day))}mo ago`
  return `${Math.round(diff / (365 * day))}y ago`
}
