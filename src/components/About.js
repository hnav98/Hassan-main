import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Technical Consultant</b> at
        <a href="https://www.sonar.software/"> Sonar Software</a>, working in 
        the Client Services department under the Technical Services team. At the same time, I am undertaking a
        certification for  <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Cloud Practioner.</a> I studied Computer Programming at Sheridan College.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play video games and sports. And I try to workout daily.
      </p>
    );

    const tech_stack = [
      "Python",
      "HTML",
      "Linux",
      "CSS",
      "React.js",
      "Javascript",
      "GraphQL",
      "SQL",
      "AWS",
      "Microsoft Azure"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Hassan Naveed" src={"/assets/hassan.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
