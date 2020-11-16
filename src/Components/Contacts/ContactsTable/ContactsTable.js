import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { CopyToClipboardText } from "../../CopyToClipboardText/CopyToClipboardText";

const ContactsTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table
        //   className={classes.table}
        aria-label="contacts table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar
                  alt={contact.name.first}
                  src={contact.picture.thumbnail}
                />
              </TableCell>
              <TableCell>
                {contact.name.title}. {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell>
                {contact.dob.date} <br />
                {contact.dob.age} years
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.phone} />
              </TableCell>
              <TableCell>
                /{contact.location.country}/ <br />{" "}
                {contact.location.street.number}, {contact.location.street.name}
                , {contact.location.city}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ContactsTable;
