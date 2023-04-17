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
              Tôi có hơn 1 năm kinh nghiệm trong vị trí Web Developer. Ngoài
              công việc chuyên môn tôi có niềm đam mê với đá bóng.
            </p>
            <ul>
              <li>Ha Noi, Viet Nam</li>
              <li>duclapulga@gmail.com</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h3>Education</h3>
            <h4>Đại học Điện Lực</h4>
            <p className="working-time">2018-2023</p>
            <ul>
              <li>Chuyên ngành: Công nghệ phần mềm</li>
              <li>GPA: 3.3</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          
          <div className="resume__detail">
            <h4>Monkey - Dự án Tutoring</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">09/2021 - 9/2022</p>
            <ul>
              <li>Phát triển tính năng và vận hành hệ thống cho dự án Hoc10</li>
              <li>
                Cùng team đưa ra những giải pháp giải quyết các vấn đề người
                dùng theo mô hình Agile Scrum
                  <li>Team gồm 8 thành viên</li>
                <ul>
                  <li>Phát triển version 2 của website Hoc10</li>
                  <li>
                    Phát triển tính năng luyện tập, luyện thi cho học sinh
                  </li>
                  <li>
                    Phát triển tính năng tập huấn, upload và chia sẻ slide bài
                    giảng cho giáo viên
                  </li>
                  <li>
                    Phát triển tính năng báo cáo chi tiết sách, game, luyện tập,
                    luyện thi, ngân hàng câu hỏi
                  </li>
              <li>
                Làm game tương tác trên sách giáo khoa điện tử
              </li>
                  <li>
                    Phát triển tính năng báo lỗi trên sách, bài luyện tập, bài
                    luyện thi, tập huấn
                  </li>
                  <li>
                    Phát triển phần Blog, checking hành vi người dùng bằng
                    GOOGLE-TAG-MANAGER
                  </li>
              <li>Maintain fix bug hệ thống</li>
                </ul>
              </li>
              <li>
                Giải nhì cuộc thi sáng tạo công nghệ <strong>We Share</strong>{" "}
                do Monkey tổ chức
                <ul>
                  <li>
                    Lên ý tưởng cùng team, tìm hiểu công nghệ sử dụng, trực tiếp
                    xây dựng và phát triển game nối, đoán từ, chọn đáp án đúng.
                    Dùng công nghệ real-time (Server Sent Events vs WebSockets)
                    để tạo cuộc thi cho học sinh.
                  </li>
                </ul>
              </li>
              <li>
                Website phát triển:{" "}
                <span>
                  <a href="https://hoc10.vn/" target="_blank" rel="noreferrer">
                    Hoc10
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="resume__detail">
            <h4>Monkey - Dự án Tutoring</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">09/2022 - Current</p>
            <ul>
              <li>Phát triển tính năng và vận hành hệ thống cho dự án Tutoring</li>
              <li>
                
                  <li>Team gồm 4 thành viên</li>
                <ul>
                  <li>
                  Xây dựng CRM cho việc quản lí các tài liệu cho các buổi học.
                  </li>
                  <li>
                  Xây dựng CRM cho việc quản lí giáo viên, học sinh, lớp học.
                  </li>
                  <li>
                 Xây dựng website phụ huynh - học sinh để phụ huynh có thể kiểm tra được các thông tin, tiến độ học tập của con em mình
                  </li>
                
              <li>Maintain fix bug hệ thống</li>
                </ul>
              </li>
              
              <li>
                Website phát triển:{" "}
                <span>
                  <a href="https://monkey.edu.vn/phu-huynh/dang-nhap" target="_blank" rel="noreferrer">
                    Tutoring
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="resume__detail">
            <h4>Monkey - Dự án Monkey</h4>
            <p className="font-italic">Frontend Developer</p>
            <p className="working-time">01/2023 - Current</p>
            <ul>
              <li>Xây dựng giao diện cho website Monkey</li>
              <li>
              
                  <li>
                Cập nhật bảng giá các khóa học của Monkey
                  </li>
                
              <li>Maintain fix bug hệ thống</li>
              </li>
              
              <li>
                Website phát triển:{" "}
                <span>
                  <a href="https://monkey.edu.vn/" target="_blank" rel="noreferrer">
                    Monkey
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
