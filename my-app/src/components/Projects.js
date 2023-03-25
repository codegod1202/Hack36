import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./img1.png";
import projImg2 from "./img2.png";
import projImg3 from "./img3.png";
import projImg4 from "./img4.png";
import projImg5 from "./img5.png";
import projImg6 from "./img6.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sadness",
      description: "Sadness is literally the very definition and being of sorrow and gloom. She was hardly ever used because Joy is the dominant emotion and didn't want Riley to ever be sad. Because of this, Joy treated Sadness poorly. Secretly however, Sadness yearned to earn her place among the other emotions, even though the others did not believe Sadness had a purpose in the mind and almost always prevented her from trying.",
      imgUrl: projImg1,
    },
    {
      title: "Joy",
      description: "Joy is, as her name states, the very essence of happiness and perkiness and as such, she loves to look on the bright side of things. She is the oldest of all of the emotions. She values Riley's happiness to the point where she does not want any of the other emotions to influence Riley. She does not want Riley to be sad at all, even when she needs to be. Because of this, Joy is the least flexible and most controlling of the five emotions.",
      imgUrl: projImg2,
    },
    {
      title: "Fear",
      description: "Fear is always the most prepared, ready to make lists of everything that could possibly go wrong. He often represents the voice of caution, though he is prone to overreact. Like the other Emotions, Fear took the backseat during Riley's childhood as Joy prevailed in her life. He was the closest to being Joy's second-in-command. After Riley's move to San Francisco, all the Emotions are confused and Fear is suddenly more present in Riley's life.",
      imgUrl: projImg3,
    },
    {
      title: "Anger",
      description: "Anger is one of the many emotions controlling Riley Andersen's mind. He lives in her brain and works with the other emotions. When the leader, Joy and another emotion, Sadness, literally get lost in Riley's mind, he and the others have to keep Riley's head on straight until they get home. Next to Joy, he may be the most abrasive to Sadness. Anger is introduced when Mr. Andersen tells a young Riley she can't have dessert if she doesn't eat her broccoli.",
      imgUrl: projImg4,
    },
    {
      title: "Disgust",
      description: "Disgust is one of the five emotions controlling Riley's mind and helping her. When their leader, Joy another emotion, Sadness, literally get lost in Riley's mind, she and the other emotions have to keep Riley's head on straight until Joy and Sadness get home. However, things go wrong sooner or later, they even decide to make Riley run away. She possibly belittles Sadness to a neutral degree due to her superficial teen attitudes. ",
      imgUrl: projImg5,
    },
    {
      title: "Bring your inside out!",
      description: "Letting out emotions and feelings always helps. We are here for you.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>MENTAL HEALTH</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}