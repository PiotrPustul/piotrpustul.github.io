const About = () => {
  return (
    <>
      <div className="main-section__heading">
        <h2>About me</h2>
      </div>
      <div className="main-section__context">
        <div className="main-section__about-container">
          <h3>Intro</h3>
          <p>
            I am a novice Programmer who does not lack enthusiasm. I enjoy
            challenges, solving problems and working in a team. Throughout my
            career, I learned how to work under pressure and how to solve
            problems effectively. I am a fast learner keen to grow and develop
            my career further. My greatest pleasure is creating applications in
            React. I usually style these applications using Sass and while
            keeping in mind the basic principle of mobile first.
          </p>
        </div>
        <div className="main-section__about-container">
          <h3>Education</h3>
          <ul>
            <li>
              <span>Coders Lab IT School - Javascript Developer</span> <br />
              Warsaw Poland, December 2019 - June 2020
              <br />
              Group workshop simulating the everyday work of a programmer with
              simultaneous preparation for activities in the Scrum methodology.
            </li>
            <li>
              <span>
                Below honours Degree Level Qualifications: Construction
                Technician
              </span>
              <br />
              High School - Czestochowa Poland, September 2007 - June 2011
            </li>
          </ul>
        </div>
        <div className="main-section__about-container">
          <h3>Work Experience</h3>
          <p>
            I learned how to work, discuss and solve problems in a team, use
            different project management tools such as <span> ClickUp</span>,
            <span> Zendesk</span>, <span> Jira</span>, <span> Toggl Track</span>
            I created and developed various projects using <span> HTML</span>,
            <span> SCSS</span>,<span> JavaScript</span>,<span> JQuery</span>,
            <span> React</span>,<span> Redux</span>,<span> PHP</span>,
            <span> Twig</span>,<span> Joomla</span>,<span> Drupal</span>. Being
            close to clients, I learned how to develop relationships, offer
            technical guidance and solutions to understand their needs.
          </p>
          <ul>
            <li>
              <a href="https://www.3bweb.com/">
                <span>3B Digital</span>
              </a>
              <br />
              Web Developer, September 2021 - September 2022
              <ul>
                <li>
                  Scopes, plans, develops, tests new features for existing
                  projects, and participates in the full life-cycle of new
                  projects
                </li>
                <li>
                  Participates in deployment processes (development to test, to
                  staging, to production)
                </li>
                <li>
                  Offers technical guidance, communication, and solutions to
                  submitted tasks
                </li>
                <li>
                  Assists in implementation services, and solution testing, and
                  participates in solution design
                </li>
                <li>
                  Sticking to the team's designated plan, discussing and solving
                  problems together
                </li>
                <li>
                  Creation and development of various projects using HTML, SCSS,
                  JavaScript, JQuery, React, Redux, PHP, Twig, Drupal
                </li>
                <li>
                  Implementing projects based on mockups provided by the Graphic
                  Designers team
                </li>
              </ul>
            </li>
            <li>
              <a href="https://hellofair.io/">
                <span>Fair</span>
              </a>
              <br />
              Web Developer, May 2021 - July 2021
              <ul>
                <li>
                  Work on constructing the layout of the company's website
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <span>Freelancer</span> <br />
              </a>
              Web Developer, September 2020 - April 2021
              <ul>
                <li>
                  Development of own projects based on JavaScript/React
                  technology with the use of HTML, CSS/SCSS
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.youngs.co.uk/">
                <span>Young & Co Brewery </span>
                <br />
              </a>
              Pub Assistant Manager, November 2018 - May 2021
              <ul>
                <li>
                  Organisation and division of labour within the team have
                  resulted in better service and attitude to customers
                </li>
                <li>Monitor and coordinate store inventory</li>
                <li>Supervise and motivate staff to perform their best</li>
                <li>Ensuring the smooth running of the computer system</li>
                <li>Train and assist a team in using the system</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-section__about-container">
          <h3>I Like</h3>
          <ul>
            <li>Dance</li>
            <li>Gym</li>
            <li>Swim</li>
            <li>Meditation</li>
            <li>Books & Audiobooks</li>
            <li>Travel</li>
            <li>Music</li>
            <li>Learn new things</li>
          </ul>
        </div>
        <div className="main-section__about-container">
          <h3>Location</h3>
          <p>Wimbledon, London, United Kingdom</p>
        </div>
      </div>
    </>
  );
};

export default About;
