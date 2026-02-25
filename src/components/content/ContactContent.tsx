import { FC } from 'react'
import { personal } from '../../data/portfolio'

const ContactContent: FC = () => {
  const { contact } = personal

  return (
    <div className="contact-content fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">cat ~/DPR/contact.md</span>
      </div>
      <h2 className="section-title">Contact</h2>
      <hr className="section-divider" />

      <p className="contact-message">
        My goal is continuous growth as a web developer, leveraging my skills and experiences
        to make a positive difference. If you're looking for a passionate and dedicated web
        developer to bring your projects to life,{' '}
        <a href={`mailto:${contact.email}?subject=DPR portfolio contact`}>
          let's connect!
        </a>
      </p>

      <ul className="contact-info-list">
        <li className="contact-info-item">
          <span className="contact-info-key">email</span>
          <span className="contact-info-val">
            <a href={`mailto:${contact.email}?subject=DPR portfolio contact`}>
              {contact.email}
            </a>
          </span>
        </li>
        <li className="contact-info-item">
          <span className="contact-info-key">phone</span>
          <span className="contact-info-val">{contact.phone}</span>
        </li>
        <li className="contact-info-item">
          <span className="contact-info-key">github</span>
          <span className="contact-info-val">
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              {contact.githubHandle}
            </a>
          </span>
        </li>
        <li className="contact-info-item">
          <span className="contact-info-key">linkedin</span>
          <span className="contact-info-val">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              {contact.linkedinHandle}
            </a>
          </span>
        </li>
      </ul>

    </div>
  )
}

export default ContactContent
