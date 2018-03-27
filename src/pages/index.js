import React from "react";
import moment from "moment"
import AddToCalendar from "../components/addToCalendar";
import Button from "../components/button";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Link from "../components/link";
import Shapes from "../components/shapes";

export default ({ data }) => {
  const upcomingEvent = {
    title: "Introduction to Human-centered Design",
    description:
      "For the first official meetup on human-centered design, we have a keynote speaker covering the basics of human-centered design, and a short workshop on executing human-centered design principles for your own projects!",
    location: "Atlantic Technology Centre, 90 University Avenue, Charlottetown",
    startTime: "2018-04-24T20:19:00-04:00",
    endTime: "2018-04-24T21:30:00-04:00"
  };
  
  const startDate = moment(upcomingEvent.startTime).format("MMMM DD, YYYY")

  const heroCta = (
    <div>
      <p className="text-2xl">Our next meetup is {startDate}</p>
      <Button
        href="https://www.meetup.com/pei-designers/"
        external={true}
        style="shadow"
        className="mt-4 mb-4"
      >
        RSVP today!
      </Button>
      <p className="text-sm">
        <AddToCalendar />
      </p>
    </div>
  );

  return (
    <div>
      <Shapes className="max-w-2xl" />
      <Hero
        className="relative"
        siteMetadata={data.siteMetadata}
        headline="Where designers of all kinds collide."
        textline="PEI Design is the #1 location for learning, growing, and
              networking for designers."
        cta={heroCta}
      />
      <div className="bg-purple pt-16 pr-4 pb-16 pl-4 relative text-white w-100">
        <div className="sm:flex sm:flex-row m-auto max-w-2xl">
          <div className="sm:w-1/2 flex flex-col">
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
          <div className="sm:w-1/2 flex flex-col">
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
      <Footer siteMetadata={data.siteMetadata} />
    </div>
  );
};

export const query = graphql`
  query metaData {
    site {
      siteMetadata {
        title
        description
        siteURL
        menu
      }
    }
  }
`;
