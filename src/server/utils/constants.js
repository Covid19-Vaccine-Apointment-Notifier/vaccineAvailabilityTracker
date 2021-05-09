export const secret = "ManTheBay-secret-key";

export const sidebarOptions = [
    {
        name:"Progress Dashboard",
        route: "/progressdashboard"
    },
    {
        name: "On-Boarding & Supports Completion",
        route: "/onBoarding"
    },
    {
        name: "Observations Progress",
        route: "/observationProgress"
    },
    {
        name: "Observation Schedule",
        route: "/observationSchedule"
    },
    {
        name: "PA & D Training",
        route: "/paTraining"
    },
    {
        name: "Teaching & Leading Seminars",
        route: "/teachingSeminars"
    },
    {
        name: "1 on 1 sessions",
        route: "/sessions"
    },
    {
        name: "Residency Stewardship",
        route: "/residencyStewardship"
    },
    {
        name: "Coaches",
        route: "/coach"
    },
    {
        name: "Fellows",
        route: "/fellow"
    },
    {
        name: "Key Contacts",
        route: "/keyContacts"
    },
    {
        name: "Task",
        route: "/task"
    }
]

export const progressTableHeading = ["Last Name","First Name","On Boarding & Supports Completion","Residency Stewardship","Personal Awareness & Development","1-on-1 Coaching","Progress Monitoring"]

export const keyContactsColumns = [
    { title: 'Name', field: 'name' },
    { title: 'Organization', field: 'organization' },
    { title: 'Primary Contact', field: 'primaryContact' },
    {
      title: 'Details (#,email, fax)',
      field: 'primaryDetails',
      type: 'email'
    },
    { title: 'Secondary Contact', field: 'secondaryContact'},
    { title: 'Details (#,email, fax)', field: 'secondaryDetails'}
  ]