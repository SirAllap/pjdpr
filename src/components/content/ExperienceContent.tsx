import { FC } from 'react'
import { MdOutlineWork } from 'react-icons/md'
import { TbSchool } from 'react-icons/tb'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experience } from '../../data/portfolio'

const ExperienceContent: FC = () => {
  return (
    <div className="exp-content fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">cat ~/DPR/experience.md</span>
      </div>
      <h2 className="section-title">Experience</h2>
      <hr className="section-divider" />

      <VerticalTimeline layout="1-column-left" animate={false}>
        {experience.map((entry) => {
          const isWork = entry.type === 'work'
          const iconBg = entry.isCurrent ? '#bead8e' : '#8c56d2'

          return (
            <VerticalTimelineElement
              key={entry.id}
              contentStyle={{
                background: 'rgba(31, 35, 53, 0.65)',
                color: 'rgba(255,255,255,0.87)',
                border: '1px solid rgba(140,86,210,0.25)',
                borderRadius: 0,
                boxShadow: 'none',
                padding: '14px 16px',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(140,86,210,0.25)',
              }}
              date={entry.date}
              dateClassName="exp-entry-date"
              iconStyle={{
                background: iconBg,
                color: '#fff',
                boxShadow: `0 0 0 3px ${iconBg}55`,
                width: 30,
                height: 30,
                marginLeft: -15,
                marginTop: 6,
              }}
              icon={
                isWork
                  ? <MdOutlineWork style={{ fill: '#fff' }} />
                  : <TbSchool style={{ fill: '#fff' }} />
              }
            >
              <h3 className="exp-entry-title vertical-timeline-element-title">
                <span className="exp-entry-mark">✤</span> {entry.title}
              </h3>
              <div className="exp-entry-company">
                <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              </div>
              <h4 className="exp-entry-location vertical-timeline-element-subtitle">
                {entry.location}
              </h4>
              <p className="exp-entry-desc">{entry.description}</p>
              {entry.isCurrent && (
                <span className="exp-current-badge">[current]</span>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default ExperienceContent
