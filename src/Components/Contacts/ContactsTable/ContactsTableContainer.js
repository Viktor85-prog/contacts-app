import React from "react";
import ContactsTable from "./ContactsTable";
import Preloader from "../../common/Preloader/Preloader";

const ContactsTableContainer = (props) => {
  if (props.data.isLoading) {
    return <Preloader className="preloader" />;
  }
  if (props.data.isError) {
    return <div> ...error</div>;
  } else return <ContactsTable data={props.data.data} />;
};
export default ContactsTableContainer;
