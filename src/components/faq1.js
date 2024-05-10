import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  heading2: 'Still have a question?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq1Question: 'What are scheduled automation tools?',
  heading1: 'FAQs',
  faq2Question:
    'How can scheduled automation tools help save costs in cloud services?',
  faq2Answer:
    'By automating repetitive tasks and optimizing resource usage, scheduled automation tools can help reduce manual labor and minimize unnecessary expenses in cloud services.',
  faq4Answer:
    'Yes, many scheduled automation tools offer customization options that allow users to tailor automated workflows to meet their unique requirements and preferences.',
  action1: 'Contact',
  faq1Answer:
    'Scheduled automation tools are software programs that allow users to schedule and automate tasks in cloud services at specific times or intervals.',
  faq3Question: 'Are scheduled automation tools easy to use?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq4Question:
    'Can scheduled automation tools be customized for specific needs?',
  faq5Question: 'What are some common features of scheduled automation tools?',
  faq5Answer:
    'Common features of scheduled automation tools include task scheduling, workflow automation, integration with cloud services, monitoring and reporting capabilities, and scalability to accommodate varying workloads.',
  faq3Answer:
    'Yes, scheduled automation tools are designed to be user-friendly and intuitive, making it easy for users to set up and manage automated tasks without extensive technical knowledge.',
}

FAQ1.propTypes = {
  heading2: PropTypes.string,
  content2: PropTypes.string,
  faq1Question: PropTypes.string,
  heading1: PropTypes.string,
  faq2Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  action1: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
}

export default FAQ1
