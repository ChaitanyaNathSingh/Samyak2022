const rubricData = {
    PFSD: {
        review1: [
            {
                id: 1,
                question: 'Checking the status of the Project development to date.'
            },{
                id: 2,
                question: 'Front-end implementation [usage of bootstrap, static files, ...]'
            },{
                id: 3,
                question: 'Is Session Management Implemented.',
            },{
                id: 4,
                question: 'Different webpages creation and Restrictions given based on roles.'
            }
        ],
        review2: [
            {
                id: 1,
                question: 'Project implementation in Django Framework (MANDATORY)'
            }, {
                id: 2,
                question: 'Multiple webpages and navigation.'
            },{
                id: 3,
                question: 'Module Implementations'
            },{
                id: 4,
                question: 's multiple dashboard creating according to type of login (MANDATORY)'
            }
        ],
        review3: [
            {
                id: 1,
                question: 'Page Restrictions, Sessions Concept Usage'
            },{
                id: 2,
                question: 'Deployment free web Hosting Domains'
            },{
                id: 3,
                question: 'Backend DB Connectivity (MANDATORY) [In all aspects]'
            }
        ],
        review4: [
            {
                id: 1,
                question: 'Implementation of Authentication',
            },{
                id: 2,
                question: 'Testing and Validation of both the front end and backend is done?'
            },{
                id: 3,
                question: 'Whether the Project is deployed, or any process is done (Heroku etc.,)'
            },{
                id: 4,
                question: 'Project Ready to Showcase after deployment through internet.'
            }
        ]
    },
    MSWD: {
        review1: [
            {
                id: 1,
                question: 'Checking the status of the Project development to date.'
            },{
                id: 2,
                question: 'Front-end implementation [usage of bootstrap, static files, ...]'
            }, {
                id: 3,
                question: 'Backend development concepts implemented [Yes/No]'
            }
        ],
        review2: [
            {
                id:1,
                question: 'Implementation of Backend using Express JS'
            }, {
                id: 2,
                question: 'Testing the endpoints/routes are tested using Postman?'
            },{
                id: 3,
                question: 'Verifying Project related Database & Collections (with Primary key, reference key concepts) are designed in MongoDB Atlas (MANDATORY)'
            },{
                id: 4,
                question: 'Connectivity and CRUD Operations tested'
            }, {
                id: 5,
                question: 'Any additional packages (middle-wear, static, MVC Structure) are followed?'
            }
        ],
        review3: [
            {
                id: 1,
                question: 'Checking front-End design and validations'
            }, {
                id: 2,
                question: 'Used any Boot Strap or Material UI used?'
            },{
                id: 3,
                question: 'State Management like Hooks, RedUx, etc., are Used?'
            }, {
                id: 4,
                question: 'Implementation of Routes and Restricted/Protected Routes'
            }, {
                id: 5,
                question: 'Axios or any third-party packages'
            }
        ],
        review4: [
            {
                id: 1,
                question: 'Implementation of Authentication'
            }, {
                id: 2,
                question: 'JWT or any session management implemented?'
            },{
                id: 3,
                question: 'Testing and Validation of both the front end and backend is done?'
            }, {
                id: 4,
                question: 'Git or any Version Control Systems are used?'
            },{
                id: 5,
                question: 'Whether the Project is deployed, or any process is done (Heroku etc.,)'
            }
        ]
    }
}

export default rubricData;