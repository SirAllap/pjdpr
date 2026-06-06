import { FC, useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi'
import { personal } from '../../data/portfolio'

const ContactContent: FC = () => {
  const { contact } = personal
  const [copied, setCopied] = useState(false)

  // Email is assembled / used only on interaction — no static mailto: in the
  // markup, so naive scrapers can't harvest it from the page source.
  const email = contact.email

  const sendEmail = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Portfolio contact')}`
  }

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
      } else {
        const ta = document.createElement('textarea')
        ta.value = email
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <div className="contact-content fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">./contact.sh</span>
        <span className="cursor-blink" />
      </div>
      <h2 className="section-title">Contact</h2>
      <hr className="section-divider" />

      <p className="contact-lead">
        Open to backend &amp; full-stack work — freelance or full-time. The fastest
        way to reach me is below.
      </p>

      <div className="contact-channels">
        {/* Email — primary, no harvestable mailto in the markup */}
        <div className="contact-channel">
          <span className="cc-icon"><FiMail /></span>
          <button className="cc-main" onClick={sendEmail} aria-label="Send me an email">
            <span className="cc-label">email</span>
            <span className="cc-value">{email}</span>
          </button>
          <button
            className={`cc-copy${copied ? ' copied' : ''}`}
            onClick={copyEmail}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
          >
            {copied ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        <a
          className="contact-channel"
          href={contact.github}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <span className="cc-icon"><FiGithub /></span>
          <span className="cc-main">
            <span className="cc-label">github</span>
            <span className="cc-value">{contact.githubHandle}</span>
          </span>
          <span className="cc-ext">↗</span>
        </a>

        <a
          className="contact-channel"
          href={contact.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <span className="cc-icon"><FiLinkedin /></span>
          <span className="cc-main">
            <span className="cc-label">linkedin</span>
            <span className="cc-value">{contact.linkedinHandle}</span>
          </span>
          <span className="cc-ext">↗</span>
        </a>
      </div>
    </div>
  )
}

export default ContactContent
