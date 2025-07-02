const questions = [
  {
    question: "Which platform allows you to buy and sell pre-built scripts or templates for websites and apps?",
    options: ["Fiverr", "Canva", "CodeCanyon", "TikTok"],
    answer: 2
  },
  {
    question: "In YouTube Automation, what is typically outsourced?",
    options: ["Only video uploading", "Scripting, voice-over, video editing, and thumbnails", "Liking and commenting", "Just watching videos"],
    answer: 1
  },
  {
    question: "What is the purpose of 'AI Voice Tools' in content creation?",
    options: ["To create thumbnails", "To generate voice-overs without recording your own voice", "To write descriptions only", "To upload files"],
    answer: 1
  },
  {
    question: "What is the use of platforms like Pictory or HeyGen in YouTube Automation?",
    options: ["Making logos", "Watching movies", "Creating AI-generated videos from text", "Selling products"],
    answer: 2
  },
  {
    question: "Why do many freelancers use platforms like Upwork or Fiverr?",
    options: ["To watch courses", "To invest money", "To offer services and earn online", "To play games"],
    answer: 2
  },
  {
    question: "In Social Media Marketing (SMM), what does a 'Facebook Ad Campaign' help with?",
    options: ["Increasing followers only", "Promoting products/services to targeted audience", "Creating memes", "Sending emails"],
    answer: 1
  },
  {
    question: "Which of the following is commonly used to create websites without coding?",
    options: ["MS Word", "Facebook", "WordPress or CodeCanyon templates", "CapCut"],
    answer: 2
  },
  {
    question: "What is the purpose of 'Monetization' in YouTube?",
    options: ["Getting views", "Subscribing to other channels", "Earning money through ads and views", "Creating playlists"],
    answer: 2
  },
  {
    question: "What does a YouTube Thumbnail do?",
    options: ["Add background music", "Attract viewers to click the video", "Increase subscribers", "None of the above"],
    answer: 1
  },
  {
    question: "What is the benefit of using AI tools like ChatGPT in digital content creation?",
    options: ["Editing raw footage", "Posting directly to YouTube", "Writing scripts, generating ideas, and content", "Playing videos"],
    answer: 2
  },
  {
    question: "What is required for a YouTube channel to apply for monetization via AdSense?",
    options: ["500 subscribers & 500 views", "1000 subscribers & 4000 watch hours", "10000 subscribers only", "Just a Gmail account"],
    answer: 1
  },
  {
    question: "Which of these tools can help automate video editing for faceless YouTube channels?",
    options: ["Adobe Illustrator", "CapCut", "Pictory", "Canva"],
    answer: 2
  },
  {
    question: "What does 'RPM' stand for in YouTube Analytics?",
    options: ["Revenue Per Month", "Revenue Per Mille", "Rate Per Monetization", "Reach Performance Measure"],
    answer: 1
  },
  {
    question: "Which platform is best for finding stock footage for YouTube videos?",
    options: ["Upwork", "Pixabay", "Fiverr", "Facebook"],
    answer: 1
  },
  {
    question: "Which one is a good method for earning on YouTube without showing your face?",
    options: ["Vlogging", "Faceless automation videos", "Daily live streaming", "Reaction videos"],
    answer: 1
  },
  {
    question: "What is the function of 'YouTube Studio'?",
    options: ["Upload movies", "Manage video content & analytics", "Edit thumbnails only", "Live video only"],
    answer: 1
  },
  {
    question: "YouTube Shorts can also be monetized after completing how many views in 90 days?",
    options: ["10K", "100K", "1M", "5M"],
    answer: 2
  },
  {
    question: "Which AI tool is helpful for converting text to realistic voiceovers?",
    options: ["Grammarly", "ElevenLabs", "Zoom", "MetaMask"],
    answer: 1
  },
  {
    question: "What type of content violates YouTube’s monetization policy?",
    options: ["Educational content", "Duplicate or reused content without commentary", "Original animations", "Gaming videos"],
    answer: 1
  },
  {
    question: "What should every monetized YouTube channel connect to receive earnings?",
    options: ["Instagram", "AdSense account", "PayPal", "Google Docs"],
    answer: 1
  },
  {
    question: "What is WordPress commonly used for?",
    options: ["Watching movies", "Coding websites", "Building websites without coding", "Designing logos"],
    answer: 2
  },
  {
    question: "In freelancing, which platform is best known for gigs and services?",
    options: ["Codecanyon", "Fiverr", "Google", "Behance"],
    answer: 1
  },
  {
    question: "What is the primary function of ChatGPT?",
    options: ["Creating animations", "Answering questions and generating content", "Playing music", "Editing videos"],
    answer: 1
  },
  {
    question: "What kind of websites can you buy from Codecanyon?",
    options: ["Blogging tools", "Business card templates", "Ready-made script-based websites", "Hosting platforms"],
    answer: 2
  },
  {
    question: "What does SEO help improve?",
    options: ["Image quality", "Website loading speed", "Search engine ranking", "Color contrast"],
    answer: 2
  }
,
  {
    question: "What is a ‘niche’ in online business or YouTube?",
    options: ["A camera setting", "A topic-focused category", "A type of product", "A video filter"],
    answer: 1
  },
  {
    question: "Which tool helps you design without needing graphic design skills?",
    options: ["Adobe Premiere", "Canva", "YouTube Studio", "Blender"],
    answer: 1
  },
  {
    question: "What is the benefit of using a premade script from Codecanyon?",
    options: ["Saves time & no need to code", "Slows down performance", "Increases errors", "Only for mobile"],
    answer: 0
  },
  {
    question: "What feature does YouTube Studio provide to check video performance?",
    options: ["Analytics", "Live comments", "Likes", "Sharing tools"],
    answer: 0
  },
  {
    question: "What is the purpose of the YouTube Content ID system?",
    options: ["Promote channels", "Detect copyrighted content", "Create subtitles", "Automate uploads"],
    answer: 1
  },
  {
    question: "Which of the following is best for making AI-generated story videos?",
    options: ["MS Word", "Pictory", "VLC Player", "Zoom"],
    answer: 1
  },
  {
    question: "In YouTube monetization, what is the minimum watch time required in the last 12 months?",
    options: ["1,000 hours", "2,000 hours", "4,000 hours", "10,000 hours"],
    answer: 2
  },
  {
    question: "What’s the use of the tool ‘Tome’ or ‘Beautiful.ai’?",
    options: ["Video editing", "Presentation creation using AI", "Logo design", "Translation"],
    answer: 1
  },
  {
    question: "What is the first step when building a no-code website?",
    options: ["Hire a developer", "Buy a domain", "Write PHP code", "Use Adobe Photoshop"],
    answer: 1
  },
  {
    question: "In freelancing, why is Upwork famous?",
    options: ["Free blogging", "Selling videos", "Offering project-based jobs", "Buying software"],
    answer: 2
  },
  {
    question: "Which monetization method is commonly used with blog websites?",
    options: ["YouTube Ads", "Google AdSense", "Facebook Pages", "Fiverr"],
    answer: 1
  },
  {
    question: "What kind of app can you easily launch using Codecanyon scripts?",
    options: ["E-commerce app", "WhatsApp", "Gmail", "Snapchat"],
    answer: 0
  },
  {
    question: "What is 'Keyword Research' mainly used for?",
    options: ["Choosing font styles", "Editing images", "Finding trending search terms", "Compressing files"],
    answer: 2
  },
  {
    question: "In YouTube Automation, what is used for voiceovers if you don’t record your own voice?",
    options: ["Manual typing", "AI voice generator", "Adobe Reader", "Google Drive"],
    answer: 1
  },
  {
    question: "What does an Affiliate Link do?",
    options: ["Redirects to Google", "Gives commission on product sales", "Downloads images", "Uploads videos"],
    answer: 1
  },
  {
    question: "What is the main purpose of YouTube Shorts?",
    options: ["Long videos", "Quick entertainment or information in under 60 seconds", "File sharing", "Video downloads"],
    answer: 1
  },
  {
    question: "What helps improve video ranking on YouTube?",
    options: ["Uploading without title", "Ignoring thumbnails", "Using relevant titles, descriptions, and tags", "Posting once a year"],
    answer: 2
  },
  {
    question: "What is the role of 'Watch Time' on YouTube?",
    options: ["It helps increase mobile data", "It helps boost channel monetization eligibility", "It slows video speed", "It adds subtitles"],
    answer: 1
  },
  {
    question: "What is passive income?",
    options: ["Income from daily job", "Income that stops when you sleep", "Income that continues even when you're not working", "Cash in hand"],
    answer: 2
  },
  {
    question: "What is the benefit of digital skills in 2025?",
    options: ["Only for fun", "Global income opportunities", "Only for developers", "It replaces books"],
    answer: 1
  },
  {
    question: "Which is more valuable in freelancing?",
    options: ["Personal interest only", "Strong digital skills and communication", "Timepass work", "Ignoring client needs"],
    answer: 1
  },
  {
    question: "What do you need to create an online business?",
    options: ["Just friends", "Strategy, product, and platform", "A land plot", "A smartphone only"],
    answer: 1
  },
  {
    question: "What’s the benefit of learning no-code development?",
    options: ["You can create apps without programming knowledge", "Only coders can do it", "It’s only for students", "It’s outdated"],
    answer: 0
  },
  {
    question: "Why do people use email marketing?",
    options: ["For spam", "To sell unused items", "To build customer relationships and grow business", "To reset passwords"],
    answer: 2
  },
  {
    question: "What is the benefit of uploading consistent content online?",
    options: ["It confuses the audience", "It helps grow trust and visibility", "It reduces views", "It hides your channel"],
    answer: 1
  }
,
  {
    question: "What is the main benefit of learning YouTube Automation?",
    options: [
      "Avoid learning anything",
      "Earn without showing your face",
      "Just for watching videos",
      "Build a private channel"
    ],
    answer: 1
  },
  {
    question: "What does 'Monetization' mean on YouTube?",
    options: [
      "Deleting old videos",
      "Getting paid for your video content",
      "Making playlists only",
      "Posting stories"
    ],
    answer: 1
  },
  {
    question: "Why is niche selection important in content creation?",
    options: [
      "Helps target the right audience",
      "Makes your name popular",
      "Reduces workload",
      "Increases editing"
    ],
    answer: 0
  },
  {
    question: "What is a 'thumbnail' in a YouTube video?",
    options: [
      "A short description",
      "A clickable image preview",
      "A type of ad",
      "A comment section"
    ],
    answer: 1
  },
  {
    question: "What increases trust in a freelancing profile?",
    options: [
      "Copying others’ work",
      "Irregular responses",
      "Good reviews and project samples",
      "Long paragraphs"
    ],
    answer: 2
  },
  {
    question: "What is one major benefit of working online?",
    options: [
      "High fuel cost",
      "Freedom to work from anywhere",
      "Need to relocate",
      "Daily office commute"
    ],
    answer: 1
  },
  {
    question: "What do most successful online earners focus on?",
    options: [
      "Watching random content",
      "Learning and applying skills",
      "Playing games only",
      "Chatting online"
    ],
    answer: 1
  },
  {
    question: "What should you do before starting a YouTube channel?",
    options: [
      "Buy ads",
      "Pick a clear content topic/niche",
      "Post 10 videos blindly",
      "Avoid descriptions"
    ],
    answer: 1
  },
  {
    question: "What is the importance of consistency in online work?",
    options: [
      "Builds long-term growth",
      "Confuses the algorithm",
      "Stops monetization",
      "Lowers confidence"
    ],
    answer: 0
  },
  {
    question: "How do digital skills affect your career?",
    options: [
      "No effect",
      "Delay job search",
      "Open more income opportunities",
      "Make studying harder"
    ],
    answer: 2
  },
  {
    question: "What is the most important element of building an online income stream?",
    options: [
      "Waiting for luck",
      "Learning valuable skills",
      "Just watching videos",
      "Sharing memes"
    ],
    answer: 1
  },
  {
    question: "Which type of video is more likely to get monetized on YouTube?",
    options: [
      "Copied content",
      "Original content with good watch time",
      "Private videos only",
      "Silent slideshows"
    ],
    answer: 1
  },
  {
    question: "What should be your first step before freelancing?",
    options: [
      "Create a strong profile",
      "Post memes",
      "Comment on others’ gigs",
      "Buy expensive tools"
    ],
    answer: 0
  },
  {
    question: "What does 'engagement' mean in social media marketing?",
    options: [
      "Sending emails",
      "Posting once a month",
      "Interaction through likes, shares, and comments",
      "Watching videos"
    ],
    answer: 2
  },
  {
    question: "Which statement is true about online skills?",
    options: [
      "They are only for IT professionals",
      "Anyone with basic learning ability can learn them",
      "Only experts benefit from them",
      "Too difficult to start"
    ],
    answer: 1
  },
  {
    question: "What is an online portfolio used for?",
    options: [
      "Playing music",
      "Showcasing your work samples",
      "Posting quotes",
      "Watching ads"
    ],
    answer: 1
  },
  {
    question: "Why is it important to write a clear video title on YouTube?",
    options: [
      "It improves visibility and searchability",
      "It helps confuse viewers",
      "It hides the content",
      "It’s not important"
    ],
    answer: 0
  },
  {
    question: "What makes a client trust you more on freelancing platforms?",
    options: [
      "Fast replies, clear communication, and honesty",
      "Ignoring messages",
      "Copy-paste proposals",
      "No display picture"
    ],
    answer: 0
  },
  {
    question: "How does online learning benefit your long-term career?",
    options: [
      "It adds flexible income options",
      "It replaces all books",
      "It ends studies",
      "No real benefit"
    ],
    answer: 0
  },
  {
    question: "What’s a smart way to stay ahead in the digital world?",
    options: [
      "Rely only on social media",
      "Keep learning new tools and strategies",
      "Avoid change",
      "Use old methods forever"
    ],
    answer: 1
  },
  {
    question: "What makes your content grow on any platform?",
    options: [
      "Consistency and quality",
      "Posting once a year",
      "Buying likes",
      "Ignoring feedback"
    ],
    answer: 0
  },
  {
    question: "What’s the purpose of a call-to-action (CTA) in a video or post?",
    options: [
      "To tell users what to do next",
      "To confuse the audience",
      "To remove interest",
      "To waste time"
    ],
    answer: 0
  },
  {
    question: "What is the benefit of learning digital business skills early?",
    options: [
      "Early start means faster growth",
      "It slows down progress",
      "It wastes effort",
      "It requires no learning"
    ],
    answer: 0
  },
  {
    question: "Which is more valuable when working online?",
    options: [
      "Having 100 tools",
      "Mastering one useful skill",
      "Copying others",
      "Changing paths daily"
    ],
    answer: 1
  },
  {
    question: "What is the benefit of storytelling in videos?",
    options: [
      "It builds connection and keeps attention",
      "It makes people leave",
      "It’s useless",
      "It only works in books"
    ],
    answer: 0
  }

,
  {
    question: "Why do many people fail in freelancing?",
    options: [
      "Lack of skills and patience",
      "Too much effort",
      "Sites don’t work",
      "Luck issues"
    ],
    answer: 0
  },
  {
    question: "Which mindset is most helpful in the digital world?",
    options: [
      "Open to learn and test",
      "Afraid to fail",
      "Waiting for help",
      "Blaming others"
    ],
    answer: 0
  },
  {
    question: "How can you make your digital service stand out?",
    options: [
      "Offer quality with clarity",
      "Use random titles",
      "Avoid communication",
      "Say ‘yes’ to everything"
    ],
    answer: 0
  },
  {
    question: "What does 'watch time' mean on YouTube?",
    options: [
      "How long people watch your videos",
      "How many times you check YouTube",
      "Your upload time",
      "Video length only"
    ],
    answer: 0
  },
  {
    question: "What is one benefit of learning skills through structured training?",
    options: [
      "Step-by-step clarity and faster results",
      "Confusion",
      "Delayed learning",
      "Free trials only"
    ],
    answer: 0
  },
  {
    question: "What is the first step before starting a YouTube channel?",
    options: [
      "Identifying niche and audience",
      "Uploading random videos",
      "Copying trending creators",
      "Ignoring branding"
    ],
    answer: 0
  },
  {
    question: "What does a good video thumbnail do?",
    options: [
      "Attracts viewers to click",
      "Hides the real topic",
      "Makes video boring",
      "Replaces video editing"
    ],
    answer: 0
  },
  {
    question: "Why is content planning important in online work?",
    options: [
      "It saves time and keeps strategy focused",
      "It wastes effort",
      "It slows growth",
      "It’s optional only for experts"
    ],
    answer: 0
  },
  {
    question: "In freelancing, what does ‘niche clarity’ mean?",
    options: [
      "Knowing your specific skill and target market",
      "Trying every type of work",
      "Avoiding specialization",
      "Leaving profile empty"
    ],
    answer: 0
  },
  {
    question: "Which is better for growth in digital business?",
    options: [
      "Learning one skill deeply",
      "Watching random tutorials",
      "Switching platforms daily",
      "No action"
    ],
    answer: 0
  },
  {
    question: "What builds client trust online?",
    options: [
      "Quality, communication & delivery",
      "Fake reviews",
      "Ignoring feedback",
      "Asking for money first"
    ],
    answer: 0
  },
  {
    question: "What is YouTube monetization?",
    options: [
      "Earning money from your video content",
      "Watching other videos",
      "Subscribing to channels",
      "Sharing links only"
    ],
    answer: 0
  },
  {
    question: "What is an online portfolio used for?",
    options: [
      "Showcasing your work to clients",
      "Hiding your skills",
      "Wasting time",
      "Only for big companies"
    ],
    answer: 0
  },
  {
    question: "What makes digital skills powerful?",
    options: [
      "Can be used globally with low cost",
      "Only work offline",
      "Need big investment",
      "Take years to learn"
    ],
    answer: 0
  },
  {
    question: "What does consistency mean in digital growth?",
    options: [
      "Showing up regularly with effort",
      "Posting once a month",
      "Depending on luck",
      "Ignoring feedback"
    ],
    answer: 0
  },
  {
    question: "What is the key to building a strong personal brand online?",
    options: [
      "Trust, consistency, and authenticity",
      "Posting without strategy",
      "Copying others",
      "Avoiding interaction"
    ],
    answer: 0
  },
  {
    question: "How can you attract long-term freelance clients?",
    options: [
      "Deliver quality work on time",
      "Offer lowest prices always",
      "Delay responses",
      "Use copied samples"
    ],
    answer: 0
  },
  {
    question: "What is the benefit of story-based videos on YouTube?",
    options: [
      "Increase retention and viewer engagement",
      "They waste time",
      "They confuse audience",
      "Only work for movies"
    ],
    answer: 0
  },
  {
    question: "Why is learning automation important today?",
    options: [
      "Saves time and increases output",
      "Makes work harder",
      "Has no future",
      "Only for coders"
    ],
    answer: 0
  },
  {
    question: "What mindset helps you succeed in digital business?",
    options: [
      "Growth, patience & practice",
      "Fear and quick results",
      "Complaining",
      "Waiting for others"
    ],
    answer: 0
  },
  {
    question: "What does real skill-building require?",
    options: [
      "Focus, regular practice, and right guidance",
      "Just watching YouTube",
      "Changing tools daily",
      "Skipping basics"
    ],
    answer: 0
  },
  {
    question: "Why is English understanding helpful in tech learning?",
    options: [
      "Most tools and resources are in English",
      "Not useful at all",
      "Only for grammar",
      "Avoided in freelancing"
    ],
    answer: 0
  },
  {
    question: "What is the biggest mistake in freelancing?",
    options: [
      "Starting without clarity or skill",
      "Learning before working",
      "Updating profile",
      "Using samples"
    ],
    answer: 0
  },
  {
    question: "What makes your YouTube channel grow faster?",
    options: [
      "Quality content and consistent uploads",
      "Sub4Sub",
      "Random titles",
      "No niche"
    ],
    answer: 0
  },
  {
    question: "Why are global skills necessary in today’s economy?",
    options: [
      "They help you earn from anywhere",
      "Only for students",
      "Need local offices",
      "Limited to one field"
    ],
    answer: 0
  }
];
