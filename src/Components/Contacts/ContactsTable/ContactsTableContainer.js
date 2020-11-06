import React from "react";
import ContactsTable from "./ContactsTable";

const ContactsTableContainer = (props) => {
  // debugger;
  console.log(props.data);
  // return (
  // <div>
  // gy
  // {(() => {
  if (props.data.isLoading) {
    return <div> ... loading</div>;
  }

  if (props.data.isError) {
    return <div> ...error</div>;
  }
  // })()}
  else return <ContactsTable data={props.data.data} />;
  // </div>
  // );
};
export default ContactsTableContainer;
