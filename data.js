const discussionPosts = [
    {
        id: 101,

        author: {
            name: "Maya Rodriguez",
            username: "mayaCodes",
            image: "./images/profiles/maya-rodriguez.png"
        },

        title: "Should AI Be Used in Classrooms?",

        message: "AI can be a useful learning tool when students use it to ask questions, review difficult ideas, or get feedback. The challenge is making sure it supports learning instead of replacing the thinking students should be doing themselves.",

        categories: [
            "Technology",
            "Education",
            "Artificial Intelligence"
        ],

        articleImage: "./images/articles/ai-classroom.png",

        postedDate: "August 24, 2026",

        likes: 18,
        views: 164,
        replies: 11
    },

    {
        id: 102,

        author: {
            name: "Jordan Lee",
            username: "jordanBuilds",
            image: "./images/profiles/jordan-lee.png"
        },

        title: "Is a Smart Home Actually Worth It?",

        message: "Smart lights, thermostats, cameras, and voice assistants can make a home more convenient, but every connected device also adds another account, network connection, and possible security concern.",

        categories: [
            "Technology",
            "Home",
            "Smart Home"
        ],

        articleImage: "./images/articles/smart-home.png",

        postedDate: "August 24, 2026",

        likes: 12,
        views: 138,
        replies: 7
    },

    {
        id: 103,

        author: {
            name: "Sofia Patel",
            username: "sofiaCreates",
            image: "./images/profiles/sofia-patel.png"
        },

        title: "Can Technology Make Gardening Easier?",

        message: "I have seen automatic watering systems, soil sensors, and apps that track plant health. I like the idea of using technology in a garden, but I wonder whether it makes a simple hobby more complicated than it needs to be.",

        categories: [
            "Garden",
            "Technology",
            "Automation"
        ],

        articleImage: "./images/articles/smart-garden.png",

        postedDate: "August 25, 2026",

        likes: 21,
        views: 193,
        replies: 9
    },

    {
        id: 104,

        author: {
            name: "Marcus Chen",
            username: "marcusDebugs",
            image: "./images/profiles/marcus-chen.png"
        },

        title: "Why Does Debugging Sometimes Take Longer Than Coding?",

        message: "Writing the first version of a feature can happen quickly, but finding one incorrect value or unexpected condition can take much longer. Debugging seems less about typing code and more about figuring out where your assumptions were wrong.",

        categories: [
            "Programming",
            "Debugging",
            "Technology"
        ],

        articleImage: "./images/articles/debugging-code.png",

        postedDate: "August 25, 2026",

        likes: 30,
        views: 247,
        replies: 14
    },

    {
        id: 105,

        author: {
            name: "Aaliyah Brooks",
            username: "aaliyahDesigns",
            image: "./images/profiles/aaliyah-brooks.png"
        },

        title: "What Makes a Website Feel Professional?",

        message: "A website can technically work and still feel unfinished. Consistent spacing, readable text, strong navigation, responsive layouts, and small details seem to make a huge difference in whether a site feels professional.",

        categories: [
            "Web Development",
            "Design",
            "Technology"
        ],

        articleImage: "./images/articles/professional-website.png",

        postedDate: "August 25, 2026",

        likes: 26,
        views: 219,
        replies: 10
    },

    {
        id: 106,

        author: {
            name: "Noah Williams",
            username: "noahMakes",
            image: "./images/profiles/noah-williams.png"
        },

        title: "Would You Rather Repair Something or Replace It?",

        message: "A lot of electronics and household products are easier to replace than repair now. Repairing something can save money and reduce waste, but replacement parts, tools, and documentation are not always easy to find.",

        categories: [
            "Home",
            "DIY",
            "Technology"
        ],

        articleImage: "./images/articles/repair-vs-replace.png",

        postedDate: "August 26, 2026",

        likes: 17,
        views: 151,
        replies: 8
    },

    {
        id: 107,

        author: {
            name: "Maya Rodriguez",
            username: "mayaCodes",
            image: "./images/profiles/maya-rodriguez.png"
        },

        title: "Should Password Managers Be Normal for Everyone?",

        message: "People are told to use long and unique passwords for every account, but remembering all of them is unrealistic. Password managers seem like a practical solution, although trusting one application with so many credentials can make people nervous.",

        categories: [
            "Cybersecurity",
            "Technology",
            "Privacy"
        ],

        articleImage: "./images/articles/password-manager.png",

        postedDate: "August 26, 2026",

        likes: 34,
        views: 305,
        replies: 16
    },

    {
        id: 108,

        author: {
            name: "Jordan Lee",
            username: "jordanBuilds",
            image: "./images/profiles/jordan-lee.png"
        },

        title: "Is Building Your Own Computer Still Worth It?",

        message: "Building a computer lets you choose every component and understand how the system fits together, but prebuilt computers can be convenient and sometimes cost less when parts are expensive.",

        categories: [
            "Hardware",
            "Computers",
            "Technology"
        ],

        articleImage: "./images/articles/custom-pc.png",

        postedDate: "August 26, 2026",

        likes: 28,
        views: 276,
        replies: 13
    },

    {
        id: 109,

        author: {
            name: "Sofia Patel",
            username: "sofiaCreates",
            image: "./images/profiles/sofia-patel.png"
        },

        title: "Could a Small Garden Help a Neighborhood?",

        message: "Community gardens can provide food, create shared spaces, and teach people how to grow plants. The difficult part seems to be organizing the land, water, maintenance, and responsibility so the space stays useful over time.",

        categories: [
            "Garden",
            "Community",
            "Sustainability"
        ],

        articleImage: "./images/articles/community-garden.png",

        postedDate: "August 26, 2026",

        likes: 23,
        views: 187,
        replies: 12
    },

    {
        id: 110,

        author: {
            name: "Marcus Chen",
            username: "marcusDebugs",
            image: "./images/profiles/marcus-chen.png"
        },

        title: "Do Developers Really Need to Comment Their Code?",

        message: "Comments can help explain difficult decisions, but too many comments can make code harder to read. I think the best comments explain why something was done instead of repeating what the code already says.",

        categories: [
            "Programming",
            "Best Practices",
            "Software Development"
        ],

        articleImage: "./images/articles/code-comments.png",

        postedDate: "August 26, 2026",

        likes: 19,
        views: 173,
        replies: 11
    },

    {
        id: 111,

        author: {
            name: "Aaliyah Brooks",
            username: "aaliyahDesigns",
            image: "./images/profiles/aaliyah-brooks.png"
        },

        title: "How Much Technology Belongs in the Kitchen?",

        message: "Smart ovens, connected refrigerators, digital recipe displays, and automatic appliances can make cooking easier. At the same time, adding software to simple appliances creates more things that can eventually stop working.",

        categories: [
            "Home",
            "Food",
            "Technology"
        ],

        articleImage: "./images/articles/smart-kitchen.png",

        postedDate: "August 26, 2026",

        likes: 15,
        views: 142,
        replies: 6
    }
];