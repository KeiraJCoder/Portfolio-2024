const funFacts = [
    "I once wrestled a crocodile.",

    "I have drilled into the horn of a rhino as part of wildlife veterinary work.",

    "I have given a zebra a haircut.",

    "I have measured my hand against the paw of a sleeping Lion",

    "I have done anti-poaching training",

    "I have hand fed Monkeys",

    "I have swum with Hawksbill Turtles and Southern Stringrays",

    "I have scuba dived with 4 different types of Shark",

    "I have tube fed a baby Giraffe",

    "I have tube fed a baby Penguin",

    "I worked on a wildlife reserve in Africa surrounded by Rhinos, Crocodiles, Zebras, Giraffes, Elephant and Antelope.",

    "I have travelled and worked across five continents so far.",

    "Before moving into tech education, I worked in animal care, wildlife rehabilitation, veterinary support, youth work, and mental health support.",

    "I have worked with police dogs earlier in my career.",

    "I once fronted a band called 'Unknown' as lead singer and guitarist.",

    "I have published a full fantasy trilogy called Memoirs of a Vampyr's Daughter, available through my author website.",

    "I built a website that translated text into Elvish from The Lord of the Rings.",

    "I have a degree in Counselling Skills with Psychology.",

    "I am obsessed with bioactive ecosystems and miniature self-sustaining habitats.",

    "I keep tarantulas, Snakes, Fish, Cats, and a Dog.",

    "My favourite Doctor is Ten, although Twelve is dangerously close.",

    "I was born and grew up in East London and now live in North Wales.",

    "My favourite game worlds are Skyrim, Fallout, Red Dead Redemption 2, and Cyberpunk 2077.",

    "I prefer dark fantasy over traditional fantasy.",

    "I enjoy historical sites, castles, ruins, and old architecture.",

    "Purple somehow became both my favourite colour and my accidental personal brand.",

    "I have taught learners from complete beginners through to Level 4 apprenticeships.",

    "I love musical theatre far more than most people expect.",

    "One of my favourite things is helping learners realise they are more capable than they thought they were.",

    "I turned a technical portfolio into an interactive AI-assisted experience because a static portfolio felt boring.",

    "Alongside technical education, I have also worked as an actor and voice artist across stage, television, and commercial work.",

    "I appeared as an extra in a major motion picture due for release in autumn 2026.",

    "I can perform a wide range of accents including Cockney, RP, Welsh, Scottish, Australian, Irish, and multiple American variations.",

    "I can switch between male, female, and androgynous vocal ranges for character work.",

    "I once starred alongside Ronan Keating on Capital FM.",

    "I played Danny in Grease, which involved singing, dancing, and acting all at once.",

    "I have performed in productions including Sweeney Todd, Jekyll and Hyde, Oliver Twist, and Grease.",

    "I can do impressions ranging from Brian Blessed and Gandalf to Frank Spencer and Professor McGonagall.",

    "I have voice acting experience with animated, dramatic, comedic, and character-based performances.",

    "I somehow ended up combining technical education, fantasy writing, wildlife work, AI systems, and acting into one career path.",

    "My acting and voice work has helped shape how I present, teach, and engage learners during live delivery.",

    "I have appeared in television productions, commercials, stage productions, and major film work.",

    "I have a naturally adaptable voice, which makes both teaching and character performance surprisingly useful crossover skills.",

    "I enjoy character-driven storytelling whether that is through acting, writing, frontend projects, or technical teaching.",
    
    "I have ridden a Camel, an Elephant and in a 2 person Helicopter",

    "I was a photographer at Chester Zoo for a while",

    "I once got the number 1 spot for 'Emo Music' in the UK",

    "I have had my photography displayed in art galleries around the world"
];

const portfolioKnowledge = [
    {
        keywords: ["about", "developer", "keira", "who"],
        answer: "Keira Jarvis is an AI-focused Technical Instructor specialising in technical education, AI-assisted workflows, software development, cybersecurity, networking, data, and digital skills. Her work combines structured teaching, learner support, accessibility, and practical automation."
    },
    {
        keywords: ["skills", "proficient", "technologies", "technical skills"],
        answer: "Keira works across JavaScript, HTML, CSS, React, Node.js, APIs, MySQL, SQL, Python, Git, GitHub, Power Automate, prompt engineering, AI-assisted workflows, and technical education."
    },
    {
        keywords: ["experience", "teaching", "career", "training", "learners"],
        answer: "Keira has experience delivering Level 2 digital skills, Level 3 software development, and Level 4 apprenticeship workshops. She creates structured resources, supports mixed-ability learners, and builds scalable learning workflows."
    },
    {
        keywords: ["ai", "automation", "workflow", "chatgpt", "prompt", "artificial intelligence"],
        answer: "Keira uses AI and automation to support feedback, learner guidance, debugging, workflow design, admin reduction, and scalable technical education. Her featured case study shows AI-assisted feedback and workflow systems in practice."
    },
    {
        keywords: ["case study", "featured", "feedback system", "feedback systems"],
        answer: "The featured case study is Keira's AI-Assisted Feedback Systems project. It focuses on structured feedback, workflow automation, prompt-engineered support, trainer review, learner clarity, and scalable technical education."
    },
    {
        keywords: ["power automate", "automate", "flows", "flow"],
        answer: "Keira has used Power Automate to design workflow systems that support learner communication, feedback delivery, admin reduction, and structured educational processes."
    },
    {
        keywords: ["send", "additional needs", "reasonable adjustments", "learner support"],
        answer: "Keira is a SEND Champion and supports learners through accessible resources, clear instructions, reasonable adjustment awareness, scaffolded guidance, and inclusive delivery for mixed-ability cohorts."
    },
    {
        keywords: ["dei", "edi", "equality", "diversity", "inclusion", "accessibility"],
        answer: "Keira has worked as a Diversity, Equity and Inclusion Lead, supporting accessibility, learner advocacy, inclusive education, mentoring, and safer routes into technology for underrepresented learners."
    },
    {
        keywords: ["apprenticeship", "apprenticeships", "level 4"],
        answer: "Keira has delivered Level 4 apprenticeship workshops covering software development, workplace application, requirements gathering, Agile methods, object-oriented programming, testing, and technical coaching."
    },
    {
        keywords: ["level 2", "level 3", "level 4", "levels"],
        answer: "Keira has delivered across Level 2 to Level 4 provision, including digital skills, software development, apprenticeship workshops, databases, cybersecurity, networking, data, and AI-enhanced learning."
    },
    {
        keywords: ["esol", "mixed ability", "beginner", "beginners"],
        answer: "Keira supports ESOL and mixed-ability learners by breaking complex tasks into clear steps, using scaffolded resources, modelling answers, and providing accessible feedback."
    },
    {
        keywords: ["projects", "portfolio", "work", "work examples"],
        answer: "Keira's portfolio includes a featured AI-Assisted Feedback Systems case study, a Pokedex, Cybersecurity Website, Author Website, Doctor Who Recommender, Top Trumps game, Virtual Pet, Festpod, and an Elvish Translator."
    },
    {
        keywords: ["pokedex", "pokemon"],
        answer: "The Pokedex project demonstrates API integration, responsive UI design, dynamic rendering, and frontend development skills."
    },
    {
        keywords: ["cyber", "cybersecurity", "security"],
        answer: "Keira teaches cybersecurity awareness and has built an educational cybersecurity website designed to make technical security concepts more engaging and accessible."
    },
    {
        keywords: ["author", "memoirs", "vampyr", "daughter", "vampyrs", "published"],
        answer: "Keira has written a trilogy called Memoirs of a Vampyr's Daughter. All three books are published, and her author website showcases her storytelling and frontend branding work."
    },
    {
        keywords: ["doctor who", "recommender", "top trumps"],
        answer: "Keira has built Doctor Who themed projects including an episode recommender using JSON and conditional logic, and a Top Trumps style JavaScript card game."
    },
    {
        keywords: ["teaching philosophy", "teaching style", "approach", "instruction", "educator"],
        answer: "Keira's teaching style is structured, practical, learner-centred, and confidence-focused. She breaks complex topics into manageable steps and uses clear examples, accessibility, and applied practice."
    },
    {
        keywords: ["mentorship", "students", "support", "coaching"],
        answer: "Keira supports learners through technical coaching, mentoring, feedback, debugging support, confidence building, and practical workplace-focused guidance."
    },
    {
        keywords: ["databases", "sql", "data management", "data"],
        answer: "Keira teaches data skills including spreadsheets, data management, SQL, MySQL, relational database concepts, and practical data analysis."
    },
    {
        keywords: ["networking", "networks", "packet tracer"],
        answer: "Keira teaches networking concepts including devices, connectivity, troubleshooting, technical support, and practical network awareness."
    },
    {
        keywords: ["social media", "marketing", "campaign"],
        answer: "Keira teaches social media marketing, campaign planning, digital graphics, audience targeting, platform choice, and review of campaign materials."
    },
    {
        keywords: ["programming", "coding", "languages"],
        answer: "Keira works with JavaScript, HTML, CSS, React, Node.js, APIs, MySQL, SQL, Python, and has also developed experience with C#."
    },
    {
        keywords: ["quality", "qa", "iqa", "assessment", "feedback"],
        answer: "Keira has strong experience with assessment support, feedback quality, evidence gathering, learner guidance, quality assurance expectations, and clear assessment-aligned resources."
    },
    {
        keywords: ["satisfaction", "metrics", "stats", "results", "impact"],
        answer: "Keira's portfolio highlights strong learner satisfaction, delivery across Level 2 to Level 4, AI and automation systems, and SEND and DEI advocacy."
    },
    {
        keywords: ["contact", "email", "reach", "linkedin", "github"],
        answer: "You can contact Keira through the contact form on this site, LinkedIn, GitHub, or by email at keira.jarvis@hotmail.co.uk."
    },
    {
        keywords: ["future goals", "aspirations", "plans", "currently exploring"],
        answer: "Keira is currently exploring AI-enhanced education systems, workflow automation, accessibility-first learning design, scalable learner support, and creative technology."
    },
    {
        keywords: ["animal", "animals", "wildlife", "conservation", "veterinary"],
        answer: "Before moving deeper into technical education, Keira worked across animal care, wildlife rehabilitation, veterinary support, conservation, and public education. That background strongly shapes her communication, empathy, and practical teaching style."
    },
    {
        keywords: ["mental health", "youth work", "safeguarding"],
        answer: "Keira has earlier experience in youth mental health, safeguarding, and community support. This contributes to her learner-centred teaching, calm communication, and inclusive support approach."
    },
    {
        keywords: ["hobbies", "interests", "outside work"],
        answer: "Outside work, Keira enjoys reading fantasy and dark fiction, gaming, writing, animals, bioactive tanks, historical sites, and creative technology."
    },
    {
        keywords: ["books", "reading", "favourite books"],
        answer: "Keira enjoys fantasy and dark fiction, especially Philip Pullman, Raymond E. Feist, Christopher Paolini, and Stephen King."
    },
    {
        keywords: ["gaming", "video games", "games"],
        answer: "Keira enjoys immersive story-rich games including Skyrim, Fallout, Red Dead Redemption, and Cyberpunk 2077."
    },
    {
        keywords: ["fun fact", "fun", "fact", "tell me something fun"],
        answer: getRandomFunFact
    },
    {
        keywords: ["colour", "color"],
        answer: "Keira's favourite colour is purple, which also heavily influences the visual identity of this portfolio."
    },
    {
        keywords: ["coffee", "tea", "drinks"],
        answer: "Keira does not drink hot drinks. A controversial choice, but somehow she survives."
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

    messageElement.className = sender === "user"
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
        "Hi, I am Keira's portfolio assistant. Ask me about her AI workflow systems, technical instruction experience, SEND and DEI work, projects, skills, or something more personal.",
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
    return findAnswer(question) || getFallbackMessage();
}

function getFallbackMessage() {
    return "I do not have a full AI connection yet, but I can answer questions about Keira's technical instruction work, AI workflows, SEND and DEI experience, projects, skills, hobbies, and contact details.";
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
        responseContainer.classList.add("active");
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
    const responseContainer = getElement("response");

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

    if (responseContainer) {
        responseContainer.classList.remove("active");
        responseContainer.classList.remove("contact-mode");
    }
}

function showContactForm() {
    const optionsContainer = getElement("options");
    const inputContainer = getElement("input-container");
    const hint = getElement("hint");
    const responseContainer = getElement("response");

    if (optionsContainer) {
        optionsContainer.style.display = "none";
    }

    if (inputContainer) {
        inputContainer.classList.remove("show-input");
    }

    if (hint) {
        hint.style.display = "none";
    }

    if (responseContainer) {
        responseContainer.classList.add("active");
        responseContainer.classList.add("contact-mode");
    }

    generateEmailForm("");
}

function showFunQuestionMode() {
    const optionsContainer = getElement("options");
    const inputContainer = getElement("input-container");
    const hint = getElement("hint");
    const responseContainer = getElement("response");

    if (optionsContainer) {
        optionsContainer.style.display = "none";
    }

    if (responseContainer) {
        responseContainer.classList.remove("contact-mode");
    }

    clearResponse();

    createMessage(
        "Ask me about Keira's background, interests, creative work, wildlife experience, books, gaming, or press randomise for something unexpected.",
        "bot"
    );

    const randomButton = document.createElement("button");
    randomButton.type = "button";
    randomButton.id = "random-fact-button";
    randomButton.textContent = "Randomise Fun Fact";

    randomButton.addEventListener("click", () => {

        const existingMessage = responseContainer.querySelector(".bot-message");

        if (existingMessage) {
            existingMessage.textContent = getRandomFunFact();
        }

    });

    if (responseContainer) {
        responseContainer.appendChild(randomButton);
    }

    if (inputContainer) {
        inputContainer.classList.add("show-input");
    }

    if (hint) {
        hint.style.display = "block";
    }
}

function handleQuickQuestion(event) {
    const buttonText = event.target.textContent.trim();
    const normalisedButtonText = buttonText.toLowerCase();

    if (normalisedButtonText.includes("ask anything")) {
        showContactForm();
        return;
    }

    if (normalisedButtonText.includes("something")) {
        showFunQuestionMode();
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