export default {
        "routes" : [ 
            {
                "name" : "Progress Dashboard",
                "routes" : {
                    "/progressDashboard" : true
                },
                "selected" : true
            }, 
            {
                "name" : "On-Boarding & Supports Completion",
                "routes" : {
                    "/onBoarding" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Observations Progress",
                "routes" : {
                    "/observationProgress" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Observation Schedule",
                "routes" : {
                    "/observationSchedule" : true
                },
                "selected" : true
            }, 
            {
                "name" : "PA & D Training",
                "routes" : {
                    "/paTraining" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Teaching & Leading Seminars",
                "routes" : {
                    "/teachingSeminars" : true
                },
                "selected" : true
            }, 
            {
                "name" : "1 on 1 sessions",
                "routes" : {
                    "/sessions" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Residency Stewardship",
                "routes" : {
                    "/residencyStewardship" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Coaches",
                "routes" : {
                    "/coach" : true,
                    "/coach/create" : true,
                    "/coach/edit" : true,
                    "/coach/delete" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Fellows",
                "routes" : {
                    "/fellow" : true,
                    "/fellow/create" : true,
                    "/fellow/edit" : true,
                    "/fellow/delete" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Tasks",
                "routes" : {
                    "/task" : {
                        "types" : {
                            "sessions" : true,
                            "onBoarding" : true,
                            "paTraining" : true,
                            "teachingSeminars" : true,
                            "residencyStewardship" : true
                        },
                        "selected" : true
                    },
                    "/task/create" : {
                        "types" : {
                            "sessions" : true,
                            "onBoarding" : true,
                            "paTraining" : true,
                            "teachingSeminars" : true,
                            "residencyStewardship" : true
                        },
                        "selected" : true
                    },
                    "/task/edit" : {
                        "types" : {
                            "sessions" : true,
                            "onBoarding" : true,
                            "paTraining" : true,
                            "teachingSeminars" : true,
                            "residencyStewardship" : true
                        },
                        "selected" : true
                    },
                    "/task/delete" : {
                        "types" : {
                            "sessions" : true,
                            "onBoarding" : true,
                            "paTraining" : true,
                            "teachingSeminars" : true,
                            "residencyStewardship" : true
                        },
                        "selected" : true
                    }
                },
                "selected" : true
            }, 
            {
                "name" : "Cohorts",
                "routes" : {
                    "/cohorts" : true,
                    "/cohorts/create" : true,
                    "/cohorts/edit" : true,
                    "/cohorts/delete" : true
                },
                "selected" : true
            }, 
            {
                "name" : "Roles",
                "routes" : {
                    "/roles" : true,
                    "/roles/create" : true,
                    "/roles/delete" : true,
                    "/roles/edit" : true
                },
                "selected" : true
            }
        ],
        "name" : "Admin",
        "lastUpdatedBy" : "server",
        "__v" : 0
    }