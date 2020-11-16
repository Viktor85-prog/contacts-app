import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import styles from "./Contacts.module.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useContacts } from "./useContacts";
// import ContactsTable from "./ContactsTable/ContactsTable";
import Typography from "@material-ui/core/Typography";
import ContactsTableContainer from "./ContactsTable/ContactsTableContainer";

let Contacts = () => {
  const contacts = useContacts();

  return (
    <Container className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={styles.container}>
            <Typography variant="h4" component="h1">
              Contacts
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <ContactsTableContainer data={contacts} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
