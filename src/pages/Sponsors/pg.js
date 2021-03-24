import React from "react";

import PGHeader from "../../assets/sponsor-files/pg/pg-header.png";
import testimonials from "../../assets/sponsor-files/pg/testimonials";

const bio = ({ name, picture, major, role, bio }) => (
  <div className="pg-bio-container">
    <img src={picture} alt="bio-pic" />
    <p className="pg-bio-name">{name}</p>
    <p className="pg-bio-major">{major}</p>
    <p className="pg-bio-role">{role}</p>
    <p className="pg-bio-testimonial">{bio}</p>
  </div>
);

const PG = () => (
  <div className="page-container">
    <h1>P&G</h1>
    <img className="pg-header-image" src={PGHeader} alt="pg-header" />
    <div className="pg-text-container">
      <p>
        Day 1. It’s something everyone experiences when they join a new company,
        whether they’re a{" "}
        <a
          href="https://www.pgcareers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          student, a recent graduate or a seasoned professional
        </a>
        . P&G’s Day 1 starts with you doing something that matters – making an
        impact on the world, P&G brands, and your career.
      </p>
      <p>
        Our{" "}
        <a
          href="https://us.pg.com/brands/"
          target="_blank"
          rel="noopener noreferrer"
        >
          brands
        </a>{" "}
        are trusted in millions of living rooms, kitchens, laundry rooms, and
        bathrooms—and have been passed down from generation to generation. Over
        the course of 181 years, they’ve challenged convention, led innovation,
        and helped shape culture.
      </p>
      <p>
        But no matter how much we grow, we always keep ourselves grounded in our
        deep-rooted{" "}
        <a
          href="https://us.pg.com/policies-and-practices/purpose-values-and-principles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          purpose, values, and principles
        </a>
        .
      </p>
      <p>
        We’ve done it for over 66,000 days, and we don’t plan on stopping
        anytime soon.
      </p>
      <p>
        These PVPs help us to create a company and a world where equality and
        inclusion is achievable for all; where respect and inclusion are the
        cornerstones of our culture; where equal access and opportunity to
        learn, grow, succeed and thrive are available to everyone.
      </p>
      <p>
        We believe in the power of our differences and the impact we can make
        when we come together united by shared values and purpose.{" "}
        <a
          href="https://us.pg.com/equality-and-inclusion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          We are committed to doing the work to make this a reality.
        </a>
      </p>
      <p>
        Additionally, in 2010 we declared a set of goals and commitments to
        reduce our environmental footprint across climate, water and waste.
        Since then, our business has continued to grow, while our teams have
        developed smarter, more efficient ways to operate. As we close out 2020,
        we are proud to report that{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://assets.ctfassets.net/oggad6svuzkv/37yCNHV3rqNO1hCPTMfHiZ/a6e70aad6053a9f055889fa7b5d73f68/2020_Goals_Overview.pdf"
        >
          14 out of 16 goals we set back in 2010 have been achieved
        </a>
        .
      </p>
      <p>
        At P&G we hire for a variety of roles (such as IT, R&D, Manufacturing,
        and Product Supply) that cover every engineering program at University
        of Illinois. The recruiting process typically starts at the beginning of
        the School year in August and continues through December. We encourage
        all interested candidates to apply to roles posted on
        <a
          href="https://www.pgcareers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.pgcareers.com/
        </a>{" "}
        in early September and come talk to use at the Illinois Engineering
        Career Fair in the Fall.
      </p>
      <p>Here are testimonials from some of our Illinois Alumni:</p>
    </div>
    <br />
    <div className="pg-bios">{testimonials.map((t) => bio(t))}</div>
  </div>
);

export default PG;
