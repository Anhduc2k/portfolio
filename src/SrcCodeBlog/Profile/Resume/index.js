import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

export default function Resume() {
  return (
    <ContainerResume>
      <Title content="Resume" id="resume" />
      <div className="row px-0">
        <div className="col-12 col-md-6">
          <div className="resume__detail">
            <h3>Sumary</h3>
            <h4>Lê Bá Anh Đức</h4>
            <p>
              I started working as a Web Developer in September 2022. Besides my
              professional work, I have a passion for soccer (football).
            </p>
            <ul>
              <li>Ha Noi, Viet Nam</li>
              <li>duclapulga@gmail.com</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h3>Education</h3>
            <h4>Electric Power University</h4>
            <p className="working-time">2018-2023</p>
            <ul>
              <li>Field of expertise: Software Engineering</li>
              <li>Graduated with honors</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="resume__detail">
            <h4>Monkey - Project Hoc10</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">09/2021 - 9/2022</p>
            <ul>
              <li>
                Developing features and maintaining system operations for the
                Hoc10 project
              </li>
              <li>
                Collaborated with the team to devise solutions for user issues
                using the Agile Scrum framework
                <li>The team consists of 8 members</li>
                <ul>
                  <li>Developing version 2 of the Hoc10 website</li>
                  <li>
                    Developing practice and exam preparation features for
                    students
                  </li>
                  <li>
                    Developing features for teacher training, uploading, and
                    sharing lecture slides with teachers
                  </li>
                  <li>
                    Developing detailed reporting features for books, games,
                    practice, test preparation, and question warehouse
                  </li>
                  <li>Creating interactive games for electronic textbooks</li>
                  <li>
                    Developing a feature for reporting errors in textbooks,
                    practice exercises, test materials, and training materials
                  </li>
                  <li>
                    Developing the Blog section and tracking user behavior using
                    Google Tag Manager
                  </li>
                  <li>Maintain, fix bug</li>
                </ul>
              </li>
              <li>
                Won second place in the <strong>We Share</strong> technology
                innovation competition organized by Monkey
                <ul>
                  <li>
                    Collaborated with the team to brainstorm ideas, researched
                    the technology stack, and directly designed, developed, and
                    built interactive games like word connections, guessing
                    words, and multiple-choice questions. Utilized real-time
                    technologies like Server Sent Events or WebSockets to create
                    competitive events for students
                  </li>
                </ul>
              </li>
              <li>
                Website:{" "}
                <span>
                  <a href="https://hoc10.vn/" target="_blank" rel="noreferrer">
                    Hoc10
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="resume__detail">
            <h4>Monkey - Project Tutoring</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">09/2022 - Current</p>
            <ul>
              <li>
                Developing features and managing system operations for the
                Tutoring project
              </li>
              <li>
                <li>The team consists of 4 members</li>
                <ul>
                  <li>
                    Building a CRM system for managing documents used in
                    teaching sessions
                  </li>
                  <li>
                    Building a CRM system for managing teachers, students, and
                    classes
                  </li>
                  <li>
                    Developing a website for parents and students, allowing
                    parents to monitor their children's academic information and
                    progress
                  </li>
                  <li>Feature multiple languages</li>
                  <li>Maintain, fix bug</li>
                </ul>
              </li>

              <li>
                Website:{" "}
                <span>
                  <a
                    href="https://monkey.edu.vn/phu-huynh/dang-nhap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tutoring
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="resume__detail">
            <h4>Monkey - Project Monkey</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">01/2023 - Current</p>
            <ul>
              <li>Designing the user interface for the Monkey website</li>
              <li>
                <li>Updating the price list for Monkey's courses</li>

                <li>Maintain, fix bug</li>
              </li>

              <li>
                Website:{" "}
                <span>
                  <a
                    href="https://monkey.edu.vn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Monkey
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="resume__detail">
            <h4>Monkey - Project AI Speaking</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">06/2023 - Current</p>
            <ul>
              <li>Create base project</li>
              <li>
                <li>
                  Developing a feature to record audio for pronunciation
                  assessment and scoring
                </li>
                <li>
                  Generating both summary and detailed reports for each syllable
                  of the students
                </li>
                <li>SEO, Tracking user with Clevertap</li>
                <li>Maintain, fix bug</li>
              </li>

              <li>
                Website:{" "}
                <span>
                  <a
                    href="https://monkey.edu.vn/kiem-tra-phat-am-tieng-anh-mien-phi-cho-be"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Monkey AI Speaking
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerResume>
  );
}

const ContainerResume = styled.div`
  margin: 3rem;
  li {
    list-style: square !important;
  }
  .resume__detail {
    padding-left: 15px;
    border-left: 2px solid #0d6efd;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #1f5297;
    }
  }
  .working-time {
    background-color: #9e9ef1;
    font-style: italic;
    width: max-content;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
  }
  @media (max-width: 577px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;
