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
    title: "A Practical Guide to Usability Testing",
    description:
      "You'll learn what usability testing is, why it's valuable, and where it fits in the design process. You'll also gain a basic understanding of how to prepare for and conduct usability testing, and leave with resources you can start using right away.",
    location: "Atlantic Technology Centre, 176 Great George St, 4th floor, Charlottetown, PE C1A 4K9",
    startTime: "2018-11-27T19:00:00-04:00",
    endTime: "2018-11-27T21:00:00-04:00",
    url: "https://www.meetup.com/peidesign/events/256607855/"
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
