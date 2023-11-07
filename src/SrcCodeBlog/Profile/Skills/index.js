import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const dataSkills = [
  {
    img: "fa fa-object-group",
    title: "Font-end",
    knowledgeDetail: " HTML, Css, Js, Bootstrap, MUI, Responsive...",
  },
  {
    img: "fa fa-fire",
    title: "Framework",
    knowledgeDetail: "Reactjs, Nextjs, Angular",
  },
  {
    img: "fa fa-graduation-cap",
    title: "Library",
    knowledgeDetail: "React-router, Redux, React Hooks, React-hook-form, React-query, Storybook ...",
  },
  {
    img: "fa fa-bookmark-o",
    title: "Other skills",
    knowledgeDetail: "SEO, GTM, Clevertap, Typescript, Restful Api",
  },
];

export default function Skills() {
  return (
    <ContainerSkill>
      <Title content="Skills" id="skills" />
      <div>
        <P className="pb-1">
        I have over 2 years of experience in the Web Developer position. I am proficient in working with frameworks such as
          <strong> Reactjs, Nextjs, Angular</strong>
        </P>
        <div className="row">
          {dataSkills.map((item, index) => (
            <div
              className="col-6 col-md-3 col-lg-3 col-xl-3 detail__skills"
              key={index}
            >
              <div className="skill">
                <i className={item.img} aria-hidden />
                <p className="pb-0">
                  <strong>{item.title}</strong>
                </p>
                <p className="knowledge pb-0">{item.knowledgeDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="row">
        {knowledge.map((knowledges, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          >
            {knowledges.map((item, index) => (
              <div key={`_${index}`}>
                <p className="language">
                  <strong>{item.title}</strong>
                </p>
                <ContainerProgressbar
                  learned={item.learned}
                  className="container__progressbar"
                >
                  <div className="progressbar">{item.learned}%</div>
                </ContainerProgressbar>
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </ContainerSkill>
  );
}

const P = styled.p`
  color: #333;
  font-size: 1em;
`;

const ContainerSkill = styled.div`
  margin: 3rem;
  margin-bottom: 0;
  i {
    color: green;
  }
  .detail__skills {
    .skill {
      box-shadow: 5px 5px 20px 2px var(--gray);
      border-radius: 10px;
      padding: 10px;
      padding-top: 10px;
      line-height: 30px;
      min-height: 232px;
    }
  }
  .language {
    padding-top: 20px;
  }
  @media (max-width: 577px) {
    margin-left: 1rem;
    margin-right: 1rem;
    .language {
      padding-top: 15px;
    }
  }
`;
