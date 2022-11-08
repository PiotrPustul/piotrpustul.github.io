import rsm from "../images/rsm.png";
import bob from "../images/bob.png";
import bada from "../images/bada.png";
import royal from "../images/royal.png";

const myProjects = [
  {
    id: 1,
    name: "RSM International",
    workedSince: "January, 2022",
    link: "https://www.rsm.global/",
    imgSrc: rsm,
    imgAlt: "RSM Global",
    description: (
      <p>
        Built for the <span> RSM International. </span> Using the same base
        code, 100 sites were deployed, one per firm allowing, language and
        configuration. <br />
        Built using Drupal 9, PHP, Twig, Pantheon, SASS, Bootstrap, Javascript
        ES6 and HTML5.
      </p>
    ),
  },
  {
    id: 2,
    name: "The British Antique Dealers Association",
    workedSince: "September, 2021",
    link: "https://www.bada.org/",
    imgSrc: bada,
    imgAlt: "Bada",
    description: (
      <p>
        Support and implementation of new features to an existing site for the
        <span> The British Antique Dealers Association. </span> <br />
        Maintaining the site with Drupal 9, PHP, Twig, Pantheon, SASS,
        Bootstrap, Javascript ES6 and HTML5.
      </p>
    ),
  },
  {
    id: 3,
    name: "Bob Harris",
    workedSince: "September, 2021",
    link: "https://archive.bobharris.org/",
    imgSrc: bob,
    imgAlt: "Archive Bob Harris",
    description: (
      <p>
        Support and implementation of new features to an existing site for a
        music presenter
        <span> Bob Harris. </span> <br />
        Maintaining the site with React, NodeJS, Express, SASS, Bootstrap,
        Javascript ES6 and HTML5.
      </p>
    ),
  },
  {
    id: 4,
    name: "Royal Albert Hall",
    workedSince: "September, 2021",
    link: "https://memories.royalalberthall.com/",
    imgSrc: royal,
    imgAlt: "Memories Royal Albert Hall",
    description: (
      <p>
        Support and implementation of new features to an existing site for the
        <span> Royal Albert Hall. </span> <br />
        Maintaining the site with Drupal 7, PHP, Pantheon, SASS, Bootstrap,
        Javascript ES6 and HTML5.
      </p>
    ),
  },
];

export default myProjects;
