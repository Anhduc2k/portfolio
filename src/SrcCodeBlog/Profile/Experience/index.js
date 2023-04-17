import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const dataWorking = [
  {
    logoCompany:
      "https://static.topcv.vn/company_logos/psMPv0ZZb1sUc3hhsagvRqgOCH9gTQ43_1633421799____d70425d87c547f71d6df274b8a328f62.png",
    location: "Front-end Developer",
    companyName: "Monkey (Early Start)",
    workingTime: "09/2021 - Current",
  },
];
export default function Experience() {
  return (
    <Working>
      <Title content="Experience" id="experience" />
      <div className="row">
        {dataWorking.map((item, index) => (
          <div
            key={index}
            className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex container__working"
          >
            <img
              src={item.logoCompany}
              alt="logo-cong-ty"
              width="150"
              className="logo-company"
            />
            <ul>
              <li>{item.location}</li>
              <li>
                <strong>{item.companyName}</strong>
              </li>
              <li className="working-time">{item.workingTime}</li>
            </ul>
          </div>
        ))}
      </div>
    </Working>
  );
}

const Working = styled.div`
  padding: 3rem;
  .container__working {
    align-items: center;
  }
  ul {
    line-height: 30px;
    margin-bottom: 0;
    .working-time {
      background-color: #9e9ef1;
      font-style: italic;
      width: max-content;
      padding-left: 5px;
      padding-right: 5px;
      font-size: 12px;
    }
  }
  @media (max-width: 577px) {
    padding-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    .logo-company {
      width: 100px;
    }
    ul {
      padding-left: 1rem;
      li {
        font-size: 13px;
      }
    }
  }
  .container__working:first-child {
    padding-bottom: 20px;
  }
`;
