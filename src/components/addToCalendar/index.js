import React from "react";
import AddToCalendar from "react-add-to-calendar";
import styles from "./addToCalendar.module.css";

export default ({ event }) => {
  const classes = {
    rootClass: "relative",
    buttonWrapperClass:
      "cursor-pointer inline-block text-purple hover:opacity-75",
    buttonClassClosed: "",
    buttonClassOpen: "",
    dropdownClass: `${
      styles.dropdown
    } absolute bg-white border border-purple-pale mt-2 p-4 pin-top rounded text-purple-pale w-64 z-50`
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
