import React from "react";
import { hadSkills } from "../../../content/portfolios/portfolios-data";

import Card from "../../ui/card/Card";
import SkillIcons from "../../ui/skill-icon/SkillIcons";
import "./Introduction.scss";

const Introduction = () => {
  const skills = hadSkills();

  return (
    <div className="introduction">
      <div className="intro-box one">
        <Card customClassName="intro-card">
          <div>
            <span>babyazalea's</span>
            <br />
            <span>home</span>
          </div>
        </Card>
      </div>
      <div className="intro-box two">
        <Card customClassName="intro-card">
          <div>
            <span>홈페이지 사용법</span>
            <span>README</span>
          </div>
        </Card>
      </div>
      <div className="intro-box three">
        <Card customClassName="intro-card">
          <div className="portfolio-nav-skills-part">
            <SkillIcons
              skills={skills}
              customClassName="portfolios-nav-skills"
            />
          </div>
          <div className="portfolio-nav-text-part">
            <span>포트폴리오</span>
            <span>SIDE PROJECT</span>
          </div>
        </Card>
      </div>
      <div className="intro-box four">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box five">
        <Card customClassName="intro-card">
          <div className="resume-wrapper">
            <div className="resume-title">
              <span>RESUME</span>
            </div>
            <div className="resume-visual">
              <div className="blah-blah">
                <div className="picture-frame"></div>
                <span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
                <span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
                <span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
                <span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
                <span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
                <span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
                <span>
                  as opposed to using 'Content here, content here', making it
                  look like readable English.
                </span>
                <span>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text,
                </span>
                <span>
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy.
                </span>
                <span>
                  Various versions have evolved over the years, sometimes by
                  accident,
                </span>
                <span>
                  sometimes on purpose (injected humour and the like).
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="intro-box six">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box seven">
        <Card customClassName="intro-card"></Card>
      </div>
      <div className="intro-box eight">
        <Card customClassName="intro-card"></Card>
      </div>
    </div>
  );
};

export default Introduction;
