import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";
import Link from "next/link";

const Qualifications = () => {
  //   // Tabs
  //   const tabs = document.querySelectorAll("[data-target]"),
  //     tabsContents = document.querySelectorAll("[data-content]");

  //   tabs.forEach((tab) => {
  //     tab.addEventListener("click", () => {
  //       const target = document.querySelector(tab.dataset.target);

  //       tabsContents.forEach((tabsContent) => {
  //         tabsContent.classList.remove("qualification_active");
  //       });
  //       target.classList.add("qualification_active");

  //       tabs.forEach((tab) => {
  //         tab.classList.remove("qualification_active");
  //       });
  //       tab.classList.add("qualification_active");
  //     });
  //   });

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Where I am from...</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <UilGraduationCap
              size="18"
              color="#6563FF"
              className="qualification__icon"
            />
            Education
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#work"
          >
            <UilBriefcaseAlt
              size="18"
              color="#6563FF"
              className="qualification__icon"
            />
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BComm in Business Informatics
                </h3>
                <span className="qualification__subtitle">UNISA</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  (Current)
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BTech: IT(Multimedia)</h3>
                <span className="qualification__subtitle">
                  Tshwane University of Technology
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2009 - 2011
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">NDip: IT(Multimedia)</h3>
                <span className="qualification__subtitle">
                  Tshwane University of Technology
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2006 - 2009
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">O'Level Certificate</h3>
                <span className="qualification__subtitle">
                  Salesian High School
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2004
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content" data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">Velocity Cubed</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2021- (Current)
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">Conclude</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2021 - 2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">Platinum Life</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">
                  Cobol Dev/Web Applications Dev
                </h3>
                <span className="qualification__subtitle">Standard Bank</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt
                    size="18"
                    color="#757575"
                    className="qualification__icon"
                  />
                  2012 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
