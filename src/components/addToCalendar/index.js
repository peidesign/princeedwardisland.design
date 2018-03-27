import React from "react";
import AddToCalendar from "react-add-to-calendar";
import styles from "./addToCalendar.module.css"

export default () => {
  const event = {
    title: "Sample Event",
    description: "This is the sample event provided as an example only",
    location: "Portland, OR",
    startTime: "2016-09-16T20:15:00-04:00",
    endTime: "2016-09-16T21:45:00-04:00"
  };

  const classes = {
    rootClass: "relative",
    buttonWrapperClass:
      "cursor-pointer inline-block text-purple hover:opacity-75",
    buttonClassClosed: "",
    buttonClassOpen: "",
    dropdownClass: `${styles.dropdown} absolute bg-white border border-purple-pale mt-2 p-4 pin-top rounded text-purple-pale w-64 z-50`
  };

  return (
    <AddToCalendar
      event={event}
      buttonLabel="or add it to your calendar"
      displayItemIcons={false}
      rootClass={classes.rootClass}
      buttonWrapperClass={classes.buttonWrapperClass}
      buttonClassClosed={classes.buttonClassClosed}
      buttonClassOpen={classes.buttonClassOpen}
      dropdownClass={classes.dropdownClass}
    />
  );
};
