import React from "react";
import moment from "moment"
import AddToCalendar from "../components/addToCalendar";
import Button from "../components/button";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Link from "../components/link";
import SEO from "../components/SEO"
import Shapes from "../components/shapes";

export default ({ data }) => {
  const siteMetadata = data.site.siteMetadata
  const upcomingEvent = {
    title: "P.E.I Design 2019 - Q2: Design Thinking & Narrative Design",
    description:
      "This month we cover an Introduction to Design Thinking from Veteran Affairs Canada's first Service Designer Farzad Sedghipour , and a look into the world of Narrative Design from the founder of Minotaur Creative, Summerside native Brendan Henry.",
    startTime: "2019-05-22T19:00:00-04:00",
    endTime: "2010-15-22T21:00:00-04:00",
    url: "https://www.meetup.com/peidesign/events/258483261/"
  };
  
  const startDate = moment(upcomingEvent.startTime).format("MMMM DD, YYYY")

  const heroCta = (
    <div>
      <p className="text-2xl">Our next meetup is {startDate}</p>
      <Button
        href={upcomingEvent.url}
        external={true}
        style="shadow"
        className="mt-4 mb-4"
      >
        Learn more
      </Button>
      <AddToCalendar event={upcomingEvent} />
    </div>
  );

  return (
    <div>
      <SEO siteMetadata={siteMetadata} />
      <Shapes className="max-w-2xl" />
      <Hero
        className="relative"
        siteMetadata={siteMetadata}
        headline="Your #1 source for design on P.E.I"
        textline="P.E.I Design is the #1 location for learning, teaching, and
              networking for design thinkers."
        cta={heroCta}
      />
      <div className="bg-purple pt-16 pr-4 pb-16 pl-4 relative text-white w-100">
        <div className="sm:flex sm:flex-row m-auto max-w-2xl">
          <div className="flex flex-col sm:pl-2 sm:w-1/2">
            <h2 className="text-white">💬 Join the conversation on Slack</h2>
            <p className="mt-4 opacity-75">
              Discuss design, find jobs, and meet new people.
            </p>
            <div className="mt-auto">
              <Button
                href="http://bit.ly/peislack"
                external={true}
                className="mt-4 sm:mb-4 mb-16 flex-none"
                style="inverted"
                color="white"
              >
                Join today
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:pr-2 sm:w-1/2">
            <h2 className="text-white">💌 Get the latest in our newsletter</h2>
            <p className="mt-4 opacity-75">
              Subscribe to our monthly newsletter for local and worldwide news
              on all aspects of design!
            </p>
            <div className="mt-auto">
              <Button
                href="https://www.getrevue.co/profile/peidesign"
                external={true}
                className="mt-4 mb-4 flex-none"
                style="inverted"
                color="white"
              >
                Register now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer siteMetadata={siteMetadata} />
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        copyright
        menu
        social {
          image
          twitter
          facebook
        }
      }
    }
  }
`;
