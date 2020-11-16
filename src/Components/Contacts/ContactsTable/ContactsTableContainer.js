import React from "react";
import ContactsTable from "./ContactsTable";

const ContactsTableContainer = (props) => {
  if (props.data.isLoading) {
    return <div> ... loading</div>;
  }
  if (props.data.isError) {
    return <div> ...error</div>;
  } else return <ContactsTable data={props.data.data} />;
};
export default ContactsTableContainer;
