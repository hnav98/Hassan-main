import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Sonar Software": {
      jobTitle: "Technical Consultant @",
      duration: "OCT 2022 - PRESENT",
      desc: [
        "Serve as the primary technical liaison between clients and the Sonar team, advising on best practices and ensuring efficient communication to enhance client experience and satisfaction.",
        "Facilitate the migration of client data from previous billing software, including serviceable addresses, accounts, account services, inventory, IPs, and models, utilizing an internal tool for data export and import.",
        "Assist clients in setting up integrations with systems such as DHCP, RADIUS, Calix, Preseem, LTE, Poller (monitoring), and the customer portal, ensuring seamless operational continuity."
      ]
    },
    "Sonar Software - Tier 2" : {
      jobTitle: "Support Agent @",
      duration: "JUNE 2022 - OCT 2022",
      desc: [
        "Assisting Tier 1 Agents with tickets & calls on ongoing issues including Billing, Networking (DHCP, RADIUS, Mikrotik), API (GraphQL, Postman, Linux), Reporting (Looker, MySQL, FCC), Webhooks, etc.",
        "Use external software’s to meet client needs: Postman, Putty, GNS3, Winbox, GraphQL, Looker Reporting, etc.",
        "Manage personal ticket workload to meet prescribed metrics and expected clarity and quality of documentation.",
        "The ongoing identification of process, tool, and platform improvements and the submission of those ideas through the requested processes of each department to ensure efficient and effective communication for proper vetting. ie. Bug-submitters channel, Q&C Resource Request Form."
      ]
    },
    "Sonar Software - Tier 1": {
      jobTitle: "Support Agent @",
      duration: "JUNE 2021 - MAY 2022",
      desc: [
        "Communicate clearly and precisely with customers in written and verbal form, maintaining accurate and timely records in ticketing and call log system.",
        "Comprehend technical interoperability with all products used within Sonar.",
        "Provide support to end users for login issues, system error messages, server issues.",
        "Attain proficiency in the primary functions and technical workings for Sonar Software including its integrations, API, and web hooks."
      ]
    },
    Oracle: {
      jobTitle: "IAM Analyst @",
      duration: "JAN 2020 - APR 2021",
      desc: [
        "Integrating Okta with third party enterprise applications like Salesforce using Federated SSO",
        "Identity and Access Management (IAM): Integrated AAA (Authentication, Authorization and Accounting)/Multi-Factor authentication with internal Lines of Business; migrated from local LDAP to AAA",
        "Web App Integration, OIDC as sign-on method, generating tokens and metadata files, retrieving client id and redirect Uri’s to get authorization code flow."
      ]
    },
    "A3logics": {
      jobTitle: "IT Support Specialist @",
      duration: "JAN 2019 - DECEMBER 2019",
      desc: [
        "Assigned/unassigned access to applications for users in the okta environment",
        "Enabled user lifecycle management for SAML applications and managed users and groups",
        "Administered applications such as Slack, G Suite, confluence, and many more",
        "Responded to requests by FreshService ticketing system to meet SLA’s targets"
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
