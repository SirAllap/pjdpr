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

          return (
            <VerticalTimelineElement
              key={entry.id}
              contentStyle={{
                borderRadius: 0,
                boxShadow: 'none',
                padding: '14px 16px',
              }}
              date={entry.date}
              dateClassName="exp-entry-date"
              iconClassName={entry.isCurrent ? 'exp-icon-current' : 'exp-icon-past'}
              iconStyle={{
                width: 30,
                height: 30,
                marginLeft: -15,
                marginTop: 6,
              }}
              icon={
                isWork
                  ? <MdOutlineWork />
                  : <TbSchool />
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
