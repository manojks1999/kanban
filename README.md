# kanban


boards

get http://localhost:3000/api/v1/boards

response: {

    "icon": "📃",

    "title": "Untitled",

    "description": "Add description here",

    "position": 0,

    "_id": "6550b71e7577362c6072025a",

    "__v": 0,

    "id": "6550b71e7577362c6072025a"

}







put http://localhost:3000/api/v1/boards	

{

   "boards": [{

           "id": "6550b71e7577362c6072025a"

       }, {}]

}



get http://localhost:3000/api/v1/boards/6550b71e7577362c6072025a

{

    "_id": "6550b71e7577362c6072025a",

    "icon": "📃",

    "title": "Untitled",

    "description": "Add description here",

    "position": 1,

    "__v": 0,

    "sections": [],

    "id": "6550b71e7577362c6072025a"

}



delete http://localhost:3000/api/v1/boards/6550b71e7577362c6072025a

"deleted"









SECTIONS:



post http://localhost:3000/api/v1/boards/6550c2a8d1d0d349c166368b/sections

{

    "board": "6550c2a8d1d0d349c166368b",

    "title": "",

    "_id": "6550c313d1d0d349c166368d",

    "__v": 0,

    "tasks": [],

    "id": "6550c313d1d0d349c166368d"

}





TASKS:



post http://localhost:3000/api/v1/boards/6550c2a8d1d0d349c166368b/tasks

{

   "sectionId": "6550c313d1d0d349c166368d"

}



{

    "section": {

        "_id": "6550c313d1d0d349c166368d",

        "board": "6550c2a8d1d0d349c166368b",

        "title": "",

        "__v": 0,

        "id": "6550c313d1d0d349c166368d"

    },

    "title": "",

    "content": "",

    "position": 0,

    "_id": "6550c4a3d1d0d349c1663692",

    "__v": 0,

    "id": "6550c4a3d1d0d349c1663692"

}





put http://localhost:3000/api/v1/boards/6550c2a8d1d0d349c166368b/tasks/update-position



{



   "resourceList":[

       {

            "id": "6550c4a3d1d0d349c1663692"

        }

   ],

   "resourceSectionId": "6550c313d1d0d349c166368d",

   "destinationSectionId": "6550c313d1d0d349c166368d",

    "destinationList": [

        {

            "id": "6550c4a3d1d0d349c1663692"

        }

    ]

}





delete http://localhost:3000/api/v1/boards/6550c2a8d1d0d349c166368b/6550c4a3d1d0d349c1663692







"mongodb+srv://lixem50447:78esoYyDX9EGyM0T@cluster0.rbwjid7.mongodb.net/?retryWrites=true&w=majority"
