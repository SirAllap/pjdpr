import { personal, experience, projects } from '../data/portfolio'

// Builds a real, selectable-text PDF résumé from the portfolio data and
// downloads it directly (no print dialog). jsPDF is imported lazily so it
// only loads when someone actually downloads.
export async function downloadCv(): Promise<void> {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })

  const M = 48
  const W = doc.internal.pageSize.getWidth()
  const H = doc.internal.pageSize.getHeight()
  const right = W - M
  const cw = right - M
  const accent: [number, number, number] = [124, 75, 191]
  let y = M

  const ensure = (space: number) => { if (y + space > H - M) { doc.addPage(); y = M } }

  const wrapped = (str: string, size: number, gray: number, x = M, width = cw) => {
    doc.setFont('helvetica', 'normal').setFontSize(size).setTextColor(gray)
    for (const ln of doc.splitTextToSize(str, width)) {
      ensure(size * 1.35)
      doc.text(ln, x, y)
      y += size * 1.35
    }
  }

  const h2 = (label: string) => {
    ensure(34)
    y += 10
    doc.setFont('helvetica', 'bold').setFontSize(10.5).setTextColor(...accent)
    doc.text(label.toUpperCase(), M, y)
    y += 5
    doc.setDrawColor(225).setLineWidth(0.6).line(M, y, right, y)
    y += 14
  }

  // ── Header ──
  doc.setFont('helvetica', 'bold').setFontSize(22).setTextColor(20)
  doc.text(personal.name, M, y + 8); y += 26
  doc.setFont('helvetica', 'normal').setFontSize(11).setTextColor(...accent)
  doc.text(personal.role, M, y); y += 15
  doc.setFontSize(8.5).setTextColor(95)
  doc.text(
    `${personal.location}   ·   ${personal.contact.email}   ·   github.com/${personal.contact.githubHandle}   ·   linkedin.com/in/${personal.contact.linkedinHandle}`,
    M, y,
  )
  y += 8
  doc.setDrawColor(40).setLineWidth(1).line(M, y, right, y); y += 6

  // ── Summary ──
  h2('Summary')
  wrapped(personal.summary, 10, 55)

  // ── Experience ──
  h2('Experience')
  for (const e of experience.filter((x) => x.type === 'work')) {
    ensure(46)
    doc.setFont('helvetica', 'bold').setFontSize(10.5).setTextColor(20)
    doc.text(`${e.title} — ${e.company}`, M, y)
    doc.setFont('helvetica', 'normal').setFontSize(8.5).setTextColor(120)
    doc.text(e.date, right, y, { align: 'right' }); y += 13
    doc.setFontSize(9).setTextColor(110)
    doc.text(e.location, M, y); y += 13
    wrapped(e.description, 9, 70); y += 6
  }

  // ── Selected projects ──
  h2('Selected projects')
  for (const p of projects.filter((x) => x.featured || x.githubUrl || x.liveUrl).slice(0, 4)) {
    ensure(40)
    doc.setFont('helvetica', 'bold').setFontSize(10).setTextColor(20)
    doc.text(p.title, M, y)
    doc.setFont('helvetica', 'normal').setFontSize(8).setTextColor(125)
    doc.text(p.tech.slice(0, 4).map((t) => t.name).join(' · '), right, y, { align: 'right' }); y += 13
    wrapped(p.description, 9, 70); y += 6
  }

  // ── Skills ──
  h2('Skills')
  wrapped(personal.skills.join('  ·  '), 9.5, 55)

  // ── Education & languages ──
  h2('Education & languages')
  for (const e of experience.filter((x) => x.type === 'education')) {
    ensure(26)
    doc.setFont('helvetica', 'bold').setFontSize(10).setTextColor(20)
    doc.text(e.title, M, y)
    doc.setFont('helvetica', 'normal').setFontSize(8.5).setTextColor(120)
    doc.text(e.date, right, y, { align: 'right' }); y += 12
    doc.setFontSize(9).setTextColor(110)
    doc.text(`${e.company} — ${e.location}`, M, y); y += 14
  }
  wrapped(
    personal.languages.map((l) => `${l.name} (${l.level})`).join('   ·   '),
    9.5, 55,
  )

  doc.save('David_Pallares_Robaina_CV.pdf')
}
