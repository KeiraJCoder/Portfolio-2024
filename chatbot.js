const funFacts = [
    "I worked in Africa for two months as a Veterinary Assistant on a game reserve.",
    "I have travelled and worked in five continents so far and plan to visit all seven.",
    "I once played guitar and sang in a band called 'Unknown'. Music has always been a huge part of my life.",
    "I have a degree in Counselling Skills with Psychology.",
    "My all-time favourite book series is The Gunslinger by Stephen King.",
    "I care for an incredible range of pets, including a dog, three cats, seven tarantulas, one snake, and four fish.",
    "I have written a trilogy of books called Memoirs of a Vampyr's Daughter. Two are currently published.",
    "I am fascinated by 3D game building and love exploring the creative potential of game engines.",
    "I lived in Thailand for over a month after my surgery and fell in love with the culture and food.",
    "I am deeply inspired by Thai Buddhist art.",
    "One of my hobbies is creating bioactive tanks filled with plants, springtails, and tiny creatures.",
    "I once designed a website that translated text into Elvish from The Lord of the Rings.",
    "I grew up in East London, a proper Cockney, and now live near Chester.",
    "I enjoy gaming and love titles like Skyrim, Fallout, and Cyberpunk 2077 for their immersive storytelling.",
    "I used to sketch as a hobby and find it a great way to relax and express creativity.",
    "I love exploring historical sites and megaliths because it fuels my imagination and inspires my creativity.",
    "I am an Emo kid at heart and still love bands like My Chemical Romance.",
    "I believe that kindness and empathy are as essential in life as technical skills.",
    "My favourite Doctor is Ten.",
    "I have lived in America, Africa, Australia, and Thailand for periods of time.",
    "I am allergic to dust due to years of exposure to urticating hairs from my tarantulas.",
    "I have drilled into the horn of a rhino.",
    "I have given a zebra a haircut.",
    "I have wrestled a crocodile.",
    "I love musical theatre."
];

const portfolioKnowledge = [
    {
        keywords: ["fun fact", "fun", "fact", "tell me something fun"],
        answer: getRandomFunFact
    },
    {
        keywords: ["about", "developer", "keira", "who"],
        answer: "I am Keira Jarvis, an AI-focused Technical Instructor. I teach across social media marketing, networking, data, software development, AI, and cybersecurity."
    },
    {
        keywords: ["colour", "color"],
        answer: "My favourite colour is purple."
    },
    {
        keywords: ["skills", "proficient", "technologies", "technical skills"],
        answer: "I work across software development, data, networking, cybersecurity, AI, social media marketing, prompt engineering, Power Automate, and technical education."
    },
    {
        keywords: ["portfolio", "projects", "work", "work examples"],
        answer: "Please explore the Projects section to see examples of my work, including a Pokedex, Cybersecurity Website, Doctor Who Recommender, and Author Website."
    },
    {
        keywords: ["experience", "teaching", "career", "training", "learners"],
        answer: "I have several years of experience delivering technical training, supporting learners, creating resources, and building structured learning workflows."
    },
    {
        keywords: ["contact", "email", "reach", "linkedin", "github"],
        answer: "You can contact me through the contact form on this site, LinkedIn, GitHub, or by email at KeiraJCoder@hotmail.com."
    },
    {
        keywords: ["teaching philosophy", "teaching style", "approach", "instruction", "educator"],
        answer: "My teaching style focuses on clear structure, practical examples, learner confidence, and breaking complex topics into manageable steps."
    },
    {
        keywords: ["languages", "programming", "coding"],
        answer: "I work with JavaScript, HTML, CSS, React, Node.js, APIs, MySQL, SQL, and Python."
    },
    {
        keywords: ["specialise", "specialisation", "specialization", "specialty", "focus", "area"],
        answer: "My current focus is technical instruction, AI-enhanced learning, workflow automation, and practical digital skills across multiple technical areas."
    },
    {
        keywords: ["tools", "software", "development"],
        answer: "I use tools such as Git, GitHub, VS Code, Power Automate, AI tools, and development environments to support technical teaching and project work."
    },
    {
        keywords: ["certifications", "awards", "achievements"],
        answer: "I was shortlisted for Tech Diversity, Equity, and Inclusion Advocate of the Year in 2023 and have continued building my work around inclusive technical education."
    },
    {
        keywords: ["mentorship", "students", "support"],
        answer: "I enjoy mentoring learners and helping them build confidence in problem solving, technical thinking, debugging, and professional development."
    },
    {
        keywords: ["future goals", "aspirations", "plans"],
        answer: "My future goals include developing stronger AI-enhanced learning systems, improving automation workflows, and continuing to grow as a technical educator."
    },
    {
        keywords: ["frameworks", "libraries"],
        answer: "I have experience with React, Node.js, Express, and frontend development libraries for building dynamic web applications."
    },
    {
        keywords: ["problem solving", "debugging", "critical thinking"],
        answer: "Problem solving and debugging are central to my teaching approach. I help learners understand how to think through issues logically and independently."
    },
    {
        keywords: ["soft skills", "communication", "teamwork"],
        answer: "Alongside technical skills, I value communication, empathy, teamwork, clarity, and learner-centred support."
    },
    {
        keywords: ["agile", "workflow", "methodology"],
        answer: "I use structured workflows and Agile principles to support practical delivery, project planning, and iterative improvement."
    },
    {
        keywords: ["databases", "sql", "data management", "data"],
        answer: "I teach and support data skills including spreadsheets, data management, SQL, MySQL, and practical data analysis."
    },
    {
        keywords: ["cyber", "cybersecurity", "security"],
        answer: "I teach cybersecurity awareness, safe digital practice, authentication, secure behaviour, and practical technical security concepts."
    },
    {
        keywords: ["networking", "networks", "packet tracer"],
        answer: "I teach networking concepts including devices, connectivity, troubleshooting, and practical technical support skills."
    },
    {
        keywords: ["social media", "marketing", "campaign"],
        answer: "I teach social media marketing, campaign planning, digital graphics, platform choice, audience targeting, and review of campaign materials."
    },
    {
        keywords: ["ai", "automation", "workflow", "chatgpt", "prompt"],
        answer: "I use AI and automation to support feedback, learner guidance, debugging, workflow design, admin reduction, and more scalable technical education."
    },
    {
        keywords: ["hobbies", "interests", "outside work"],
        answer: "Outside of work, I enjoy reading fantasy novels, gaming, animals, bioactive tanks, writing, historical sites, and learning new technologies."
    },
    {
        keywords: ["accessibility", "inclusive design"],
        answer: "I care strongly about accessibility and inclusive design, especially in teaching resources, learner support, and web experiences."
    },
    {
        keywords: ["career highlights", "proudest achievements"],
        answer: "One of my proudest achievements is helping learners build confidence with technical subjects that initially felt intimidating or out of reach."
    },
    {
        keywords: ["open source", "collaborations"],
        answer: "I would like to contribute more to open source and collaborative technical education projects."
    },
    {
        keywords: ["testing", "quality assurance", "qa"],
        answer: "I support learners with testing, debugging, quality checks, evidence gathering, and improving the reliability of their work."
    },
    {
        keywords: ["cabbage"],
        answer: "Cabbage reminds me of my childhood dinners. I am unsure whether that is a good thing."
    },
    {
        keywords: ["from", "originally", "hometown", "living"],
        answer: "I am originally from East London, a proper Cockney, and now live near Chester."
    },
    {
        keywords: ["music", "song", "songs"],
        answer: "I am absolutely an Emo kid at heart. I used to play guitar and sing in a band called Unknown."
    },
    {
        keywords: ["c#", "c sharp"],
        answer: "I have been learning C# as part of my wider technical development."
    },
    {
        keywords: ["dei", "edi", "equality", "diversity", "trans"],
        answer: "I care deeply about equality, diversity, inclusion, and creating safer, more supportive routes into tech."
    },
    {
        keywords: ["work environment", "preferred workplace", "remote"],
        answer: "I work well in collaborative, supportive environments where innovation, structure, and continuous learning are encouraged."
    },
    {
        keywords: ["reading", "books", "favourite books"],
        answer: "I love fantasy and dark fiction, especially books by Philip Pullman, Raymond E. Feist, Christopher Paolini, and Stephen King."
    },
    {
        keywords: ["travel", "places", "visited"],
        answer: "I enjoy travelling and have lived or spent time in places including America, Africa, Australia, and Thailand."
    },
    {
        keywords: ["pets", "animals", "favourite animal"],
        answer: "I love animals and have a particular fondness for cats. I have also cared for dogs, tarantulas, a snake, fish, and bioactive ecosystems."
    },
    {
        keywords: ["challenges", "overcoming obstacles"],
        answer: "One of my biggest challenges was transitioning into tech and rebuilding my career. It taught me resilience, empathy, and adaptability."
    },
    {
        keywords: ["work-life balance", "self-care"],
        answer: "I believe in maintaining a healthy work-life balance by setting boundaries and keeping space for creativity, hobbies, and recovery."
    },
    {
        keywords: ["gaming", "video games", "favourites", "favorites"],
        answer: "I love gaming and especially enjoy Skyrim, Fallout, Red Dead Redemption, and story-rich open world games."
    },
    {
        keywords: ["coffee", "tea", "drinks"],
        answer: "I do not drink hot drinks. Absolute heathen behaviour, I know."
    },
    {
        keywords: ["life philosophy", "values", "beliefs"],
        answer: "I value kindness, continuous learning, clarity, creativity, and creating opportunities for others to succeed."
    },
    {
        keywords: ["frankie", "relationship", "wife", "family", "love"],
        answer: "My nearly-wife is called Frankie. We have been together since 2016. She also works in tech as a software tester."
    },
    {
        keywords: ["author", "memoirs", "vampyr", "daughter", "vampyrs", "published"],
        answer: "I have written a trilogy of books called Memoirs of a Vampyr's Daughter. Two are currently published."
    }
];

function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

function getElement(id) {
    return document.getElementById(id);
}

function clearResponse() {
    const responseContainer = getElement("response");

    if (responseContainer) {
        responseContainer.innerHTML = "";
    }
}

function createMessage(message, sender = "bot") {
    const responseContainer = getElement("response");

    if (!responseContainer) {
        return;
    }

    responseContainer.classList.add("active");

    const messageElement = document.createElement("div");

    messageElement.className =
        sender === "user"
            ? "user-message"
            : "bot-message";

    messageElement.textContent = message;

    responseContainer.innerHTML = "";
    responseContainer.appendChild(messageElement);

    responseContainer.scrollTop = 0;
}

function showIntroMessage() {
    clearResponse();

    createMessage(
        "Hi, I am Keira's portfolio assistant. Ask me about her technical instruction work, AI contributions, projects, skills, books, pets, hobbies, or how to contact her.",
        "bot"
    );
}

function findAnswer(question) {
    const lowerCaseQuestion = question.toLowerCase();

    const match = portfolioKnowledge.find(item =>
        item.keywords.some(keyword => lowerCaseQuestion.includes(keyword))
    );

    if (!match) {
        return null;
    }

    return typeof match.answer === "function" ? match.answer() : match.answer;
}

async function askPortfolioAI(question) {
    const localAnswer = findAnswer(question);

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question,
                localContext: portfolioKnowledge.map(item => ({
                    keywords: item.keywords,
                    answer: typeof item.answer === "function" ? "Random fun fact available." : item.answer
                }))
            })
        });

        if (!response.ok) {
            throw new Error("AI endpoint unavailable");
        }

        const data = await response.json();

        return data.answer || localAnswer || getFallbackMessage();
    } catch (error) {
        return localAnswer || getFallbackMessage();
    }
}

function getFallbackMessage() {
    return "I do not have a full AI connection yet, but I can still answer questions about Keira's portfolio, technical instruction work, AI workflows, projects, skills, hobbies, and contact details.";
}

async function handleQuestion(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
        return;
    }

    clearResponse();

    const responseContainer = getElement("response");

    const thinkingMessage = document.createElement("div");
    thinkingMessage.className = "bot-message";
    thinkingMessage.textContent = "Thinking...";

    if (responseContainer) {
        responseContainer.appendChild(thinkingMessage);
        responseContainer.scrollTop = 0;
    }

    const answer = await askPortfolioAI(cleanQuestion);

    clearResponse();

    createMessage(answer, "bot");
}

function sendQuestion() {
    const userInput = getElement("user-input");

    if (!userInput) {
        return;
    }

    const question = userInput.value.trim();

    if (!question) {
        return;
    }

    userInput.value = "";
    handleQuestion(question);
}

function generateEmailForm(initialQuery = "") {
    const responseContainer = getElement("response");

    if (!responseContainer) {
        return;
    }

    responseContainer.innerHTML = "";

    const message = document.createElement("p");
    message.textContent = "I could not find a full answer to that. You can send Keira your question directly below.";
    responseContainer.appendChild(message);

    const form = document.createElement("form");
    form.id = "email-form";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Your email address";
    emailInput.required = true;
    form.appendChild(emailInput);

    const queryTextarea = document.createElement("textarea");
    queryTextarea.placeholder = "Your question";
    queryTextarea.value = initialQuery;
    queryTextarea.required = true;
    form.appendChild(queryTextarea);

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Send";
    submitButton.addEventListener("click", () => {
        submitEmailForm(emailInput.value, queryTextarea.value);
    });

    form.appendChild(submitButton);
    responseContainer.appendChild(form);
}

function submitEmailForm(email, query) {
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!query.trim()) {
        alert("Please enter a question before submitting.");
        return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", query);

    fetch("https://formspree.io/f/mnnayngl", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
        .then(() => {
            alert("Your question has been sent. Keira will get back to you shortly.");
            resetChatbot();
        })
        .catch(() => {
            alert("Your question has been sent. Keira will get back to you shortly.");
            resetChatbot();
        });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetChatbot() {
    const userInput = getElement("user-input");
    const optionsContainer = getElement("options");
    const inputContainer = getElement("input-container");
    const hint = getElement("hint");

    clearResponse();

    if (userInput) {
        userInput.value = "";
    }

    if (optionsContainer) {
        optionsContainer.style.display = "flex";
    }

    if (inputContainer) {
        inputContainer.classList.remove("show-input");
    }

    if (hint) {
        hint.style.display = "none";
    }
}

function handleOtherQuestions() {
    const inputContainer = getElement("input-container");
    const hint = getElement("hint");

    clearResponse();

    createMessage(
        "Ask me something specific about Keira, her work, projects, AI experience, teaching style, or background.",
        "bot"
    );

    if (inputContainer) {
        inputContainer.classList.add("show-input");
    }

    if (hint) {
        hint.style.display = "block";
    }
}

function handleQuickQuestion(event) {
    const buttonText = event.target.textContent.trim();

    if (buttonText.toLowerCase().includes("other")) {
        handleOtherQuestions();
        return;
    }

    handleQuestion(buttonText);
}

function toggleChatbot() {
    const chatbot = getElement("chatbot");
    const openChatbotButton = getElement("open-chatbot");

    if (!chatbot || !openChatbotButton) {
        return;
    }

    const isHidden = chatbot.style.display === "none" || chatbot.style.display === "";

    if (isHidden) {
        chatbot.style.display = "flex";
        openChatbotButton.style.display = "none";
        resetChatbot();
        showIntroMessage();
    } else {
        chatbot.style.display = "none";
        openChatbotButton.style.display = "block";
        resetChatbot();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = getElement("submit-button");
    const userInput = getElement("user-input");
    const openChatbotButton = getElement("open-chatbot");
    const minimiseButton = getElement("minimize-button");
    const optionButtons = document.querySelectorAll("#options button");

    optionButtons.forEach(button => {
        button.addEventListener("click", handleQuickQuestion);
    });

    if (submitButton) {
        submitButton.addEventListener("click", sendQuestion);
    }

    if (userInput) {
        userInput.addEventListener("keyup", event => {
            if (event.key === "Enter") {
                sendQuestion();
            }
        });
    }

    if (openChatbotButton) {
        openChatbotButton.addEventListener("click", toggleChatbot);
    }

    if (minimiseButton) {
        minimiseButton.addEventListener("click", toggleChatbot);
    }
});