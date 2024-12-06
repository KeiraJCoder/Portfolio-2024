//====================================================================================================

const funFacts = [
    "I worked in Africa for two months as a Veterinary Assistant on a game reserve.",
    "I have traveled and worked in five continents so far and plan to visit all seven.",
    "I once played guitar and sang in a band called 'Unknown.' Music has always been a huge part of my life.",
    "I have a degree in Counselling-skills with Psychology",
    "My all-time favorite book series is *The Gunslinger* by Stephen King.",
    "I care for an incredible range of pets, including a dog, three cats, seven tarantulas, one snake, and four fish.",
    "I have written a trilogy of books. Memoirs of a Vampyrs Daughter. Two are currently published.",
    "I am fascinated by 3D game building and love exploring the creative potential of game engines.",
    "I lived in Thailand for over a month after my surgery and fell in love with the culture and food.",
    "I am deeply inspired by Thai Buddhist art and have incorporated elements of it into my spiritual practices.",
    "One of my hobbies is creating bioactive tanks filled with plants, springtails, and tiny creatures.",
    "I once designed a website that translated text into Elvish from *The Lord of the Rings*!",
    "I grew up in East London, a 'proper Cockney,' and now live in the historic city of Chester.",
    "I enjoy gaming and love titles like *Skyrim*, *Fallout*, and *Cyberpunk 2077* for their immersive storytelling.",
    "I used to sketch as a hobby and find it a great way to relax and express creativity.",
    "I love exploring historical sites and megaliths—it fuels my imagination and inspires my creativity.",
    "I’m a self-proclaimed 'Emo kid' at heart and still love bands like My Chemical Romance.",
    "I believe that kindness and empathy are as essential in life as technical skills.",
    "My favourite Doctor is Ten",
    "I have lived in America, Africa, Australia and Thailand for periods of time",
    "I am allergic to dust due to years of exposure to utricating hairs from my tarantulas",
    "I have drilled into the horn of a Rhino",
    "I have given a Zebra a haircut",
    "I have wrestled a crocodile",
    "I am a Witch",
    "I was once on The Weakest Link",
    "I love musical theatre"
];

// Function to select a random fun fact
function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

//====================================================================================================

const faqKeywords = [
    {
        keywords: ["fun fact", "fun", "fact", "tell me something fun"],
        answer: getRandomFunFact
    },
    {
        keywords: ["about", "developer", "keira"],
        answer: "I am Keira Jarvis, a skilled software developer and instructor specialising in front-end development."
    },
    {
        keywords: ["skills", "proficient", "technologies"],
        answer: "I am proficient in HTML, CSS, JavaScript and API integration. I also have experience with Git for version control and project management."
    },
    {
        keywords: ["portfolio", "projects", "work"],
        answer: "Please explore the Projects section for details."
    },
    {
        keywords: ["experience", "teaching", "career"],
        answer: "I have 3 years experience in software development instructing at various levels."
    },
    {
        keywords: ["contact", "email", "reach"],
        answer: "You can reach me via the Contact page on this portfolio or through my professional email at KeiraJ@Justit.co.uk."
    },
    {
        keywords: ["teaching", "philosophy", "approach"],
        answer: "I believe in breaking down complex concepts into manageable steps and fostering a supportive learning environment."
    },
    {
        keywords: ["projects", "work examples"],
        answer: "Check out my projects to see my work in web development and software design."
    },
    {
        keywords: ["languages", "programming", "coding"],
        answer: "I can code in JavaScript, Python, and SQL."
    },
    {
        keywords: ["developer", "specialise", "specialization", "specialty", "focus", "area"],
        answer: "I specialise in front-end development with a strong focus on intuitive design and user-friendly interfaces. I also have experience with back-end technologies for creating scalable solutions."
    },
    {
        keywords: ["tools", "software", "development"],
        answer: "I am skilled in using tools like Git and VScode and I integrate these into my workflow for efficient development."
    },
    {
        keywords: ["certifications", "awards", "achievements"],
        answer: "I was shortlisted for the Tech Diversity Advocate of the Year in 2023 and have certifications in JavaScript and React development."
    },
    {
        keywords: ["mentorship", "students", "training"],
        answer: "I enjoy mentoring students and junior developers, helping them grow their skills in coding, problem-solving, and teamwork."
    },
    {
        keywords: ["future goals", "aspirations", "plans"],
        answer: "I aim to continue refining my skills as a developer while expanding my portfolio to include AI and machine learning projects."
    },
    {
        keywords: ["frameworks", "libraries"],
        answer: "I have extensive experience with libraries and frameworks like React, Node.js, and Express for building dynamic web applications."
    },
    {
        keywords: ["teaching style", "instruction", "educator"],
        answer: "My teaching style focuses on interactive learning, breaking down complex ideas into clear, manageable concepts, and encouraging creativity."
    },
    {
        keywords: ["problem solving", "debugging", "critical thinking"],
        answer: "Problem-solving and debugging are at the heart of my approach. I aim to make logical thinking and efficient debugging an integral part of development."
    },
    {
        keywords: ["soft skills", "communication", "teamwork"],
        answer: "In addition to technical skills, I prioritise effective communication, teamwork, and empathy to collaborate and teach successfully."
    },
    {
        keywords: ["agile", "workflow", "methodology"],
        answer: "I follow Agile methodologies to ensure iterative development, efficient project management, and client satisfaction."
    },
    {
        keywords: ["databases", "SQL", "data management"],
        answer: "I have experience designing, managing, and querying databases using MySQL."
    },
    {
        keywords: ["hobbies", "interests", "outside work"],
        answer: "Outside of work, I enjoy reading fantasy novels, exploring nature, and learning about new technologies to stay inspired."
    },
    {
        keywords: ["accessibility", "inclusive design"],
        answer: "I am committed to creating accessible and inclusive web experiences, ensuring that all users can engage with my designs effectively."
    },
    {
        keywords: ["career highlights", "proudest achievements"],
        answer: "One of my proudest achievements is helping students build their first full-stack applications and watching their confidence grow."
    },
    {
        keywords: ["open source", "collaborations"],
        answer: "I'd like to contribute more to open source."
    },
    {
        keywords: ["testing", "quality assurance"],
        answer: "I integrate unit testing and end-to-end testing into my development process to ensure high-quality, reliable code."
    },
    {
        keywords: ["cabbage"],
        answer: "Cabbage reminds me of my childhood dinners. I'm unsure whether that's a good thing."
    },
    {
        keywords: ["from", "originally", "hometown", "living"],
        answer: "I am originally from East London, a 'proper Cockney'. Now I live in Chester."
    },
    {
        keywords: ["music", "song", "songs"],
        answer: "I am 100% an 'Emo kid' at heart. I used to play guitar and sing in a band called 'Unknown'."
    },
    {
        keywords: ["C#", "c sharp"],
        answer: "I am currently learning C#."
    },
    {
        keywords: ["dei", "edi", "equality", "diversity", "trans"],
        answer: "As a trans woman in tech, I am always trying to champion EDI initiatives."
    },
    {
        keywords: ["work environment", "preferred workplace", "remote"],
        answer: "I thrive in collaborative environments, both remote and in-person, where innovation and learning are encouraged."
    },
    {
        keywords: ["reading", "books", "favourite books"],
        answer: "I love fantasy novels like 'The Hobbit' and the 'Gunslinger' series. They inspire my creativity and love for storytelling."
    },
    {
        keywords: ["travel", "places", "visited"],
        answer: "I enjoy travelling and have explored countries like Thailand, which holds a special place in my heart for its culture and traditions."
    },
    {
        keywords: ["pets", "animals", "favorite animal"],
        answer: "I LOVE animals and have a particular fondness for cats. We have a dog, 3 cats, 7 tarantulas, 1 snake, and 4 fish."
    },
    {
        keywords: ["challenges", "overcoming obstacles"],
        answer: "One of my biggest challenges was balancing my transition into tech. It taught me resilience and empathy."
    },
    {
        keywords: ["work-life balance", "self-care"],
        answer: "I believe in maintaining a healthy work-life balance by setting boundaries and dedicating time to relaxation and hobbies."
    },
    {
        keywords: ["gaming", "video games", "favorites"],
        answer: "I love gaming and enjoy titles like Skyrim, Fallout, and Cyberpunk 2077 for their immersive worlds."
    },
    {
        keywords: ["coffee", "tea", "drinks"],
        answer: "I do not drink hot drinks. HEATHEN."
    },
    {
        keywords: ["life philosophy", "values", "beliefs"],
        answer: "I value kindness, continuous learning, and creating opportunities for others to succeed in their journeys."
    },
    {
        keywords: ["specialisation", "specialty", "focus", "specialization", "specialize"],
        answer: "I am predominantly a front-end developer, that is where my passion lies, but can do some back-end development"
    },
    {
        keywords: ["frankie", "relationship", "wife", "family", "love", "Frankie"],
        answer: "My nearly-wife is called Frankie, we have been together since 2016. She also works in industry, but as a software tester! We have a fur son called Sammy and too many cats"
    },
    {
        keywords: ["author", "memoirs", "vampyr", "daughter", "vampyrs", "published"],
        answer: "I have written a trilogy of books called Memoirs of a Vampyr's Daughter. Find it on all leading book store websites"
    }
];

//====================================================================================================

// Function to display messages in the chatbot
function displayMessage(message, isBot = true) {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear previous messages
    const messageElement = document.createElement('div');
    messageElement.className = isBot ? 'bot-message' : 'user-message';
    messageElement.textContent = message;
    responseContainer.appendChild(messageElement);
    responseContainer.scrollTop = responseContainer.scrollHeight; // Auto-scroll to the latest message
}

// Function to handle responses
function getResponse(question) {
    const faq = faqKeywords.find(faq => faq.keywords.some(keyword => question.toLowerCase().includes(keyword)));
    if (faq) {
        const answer = typeof faq.answer === 'function' ? faq.answer() : faq.answer; // Call function if answer is dynamic
        displayMessage(answer); // Display response
    } else {
        generateEmailForm(question); // Call email form for unrecognized questions
    }
}

// Function to generate email form for unknown queries
function generateEmailForm(initialQuery) {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear previous messages

    const message = document.createElement('p');
    message.textContent = "I couldn't find an answer to your question. Please provide your email, and I'll get back to you shortly!";
    responseContainer.appendChild(message);

    const form = document.createElement('form');
    form.id = "email-form";

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your email address';
    emailInput.required = true;
    form.appendChild(emailInput);

    const queryTextarea = document.createElement('textarea');
    queryTextarea.placeholder = 'Your question';
    queryTextarea.value = initialQuery;
    queryTextarea.required = true;
    form.appendChild(queryTextarea);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Send';
    submitButton.addEventListener('click', () => submitEmailForm(emailInput.value, queryTextarea.value));
    form.appendChild(submitButton);

    responseContainer.appendChild(form);
}

// Function to send form data to Formspree
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
        mode: "no-cors" // Use no-cors to bypass CORS restrictions
    })
        .then(() => {
            alert("Your question has been sent! I'll get back to you shortly.");
            resetChatbot(); // Reset chatbot after successful submission
        })
        .catch(() => {
            alert("Your question has been sent! I'll get back to you shortly."); // Handle Formspree's no-cors limitation
            console.error("Fetch error occurred, likely due to CORS.");
            resetChatbot(); // Reset chatbot even if there's an error
        });
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to find a matching answer based on keywords
function findAnswer(query) {
    const lowerCaseQuery = query.toLowerCase();
    for (const faq of faqKeywords) {
        if (faq.keywords.some(keyword => lowerCaseQuery.includes(keyword))) {
            return typeof faq.answer === 'function' ? faq.answer() : faq.answer;
        }
    }
    return null; // No match found
}

// Function to process user input
function sendQuestion() {
    const userInput = document.getElementById('user-input');
    const question = userInput.value.trim();

    if (question) {
        const answer = findAnswer(question);

        if (answer) {
            displayMessage(answer); // Display matched response
        } else {
            // Display a message indicating no answer was found
            displayMessage("I'm sorry, I couldn't find an answer to your question.");
            
            // Automatically load the email form
            generateEmailForm(question);
        }

        userInput.value = ''; // Clear input field
    }
}



// Function to handle "Other Questions" button separately
function handleOtherQuestions() {
    generateEmailForm(""); // Display email form for "Other Questions" button
}

// Function to toggle chatbot visibility (keeps original functionality)
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const openChatbotButton = document.getElementById('open-chatbot');

    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        resetOnOpenChatbot(); // Reset when opening chatbot
        chatbot.style.display = 'block'; // Show chatbot
        openChatbotButton.style.display = 'none'; // Hide "Chat with Me" button
    } else {
        chatbot.style.display = 'none'; // Hide chatbot
        openChatbotButton.style.display = 'block'; // Show "Chat with Me" button
        resetChatbot(); // Reset fields when closed
    }
}


// Function to reset chatbot fields
function resetChatbot() {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear messages

    const userInput = document.getElementById('user-input');
    userInput.value = ''; // Clear input field
}

// Attach event listeners on DOM load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#options button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim().toLowerCase();
            if (buttonText.includes("other questions")) {
                handleOtherQuestions(); // Handle "Other Questions" button
            } else {
                getResponse(buttonText); // Handle other predefined questions
            }
        });
    });

    document.getElementById('submit-button').addEventListener('click', sendQuestion);
    document.getElementById('user-input').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendQuestion();
        }
    });

    document.getElementById('open-chatbot').addEventListener('click', toggleChatbot);
    document.getElementById('minimize-button').addEventListener('click', toggleChatbot);
});


//====================================================================================================

// Function to reset the chatbot to its idle state on page load
function resetChatbotState() {
    // Reset the response container to empty (to avoid showing any form or response)
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = '';

}

// Call the reset function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    resetChatbotState();
});

//====================================================================================================

// Function to hide the question buttons when "Other Questions" is clicked
function hideQuestionButtons() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.style.display = 'none'; // Hide the question buttons
}

// Function to handle "Other Questions" button separately
function handleOtherQuestions() {
    hideQuestionButtons(); // Hide the question buttons
    generateEmailForm(""); // Display email form for "Other Questions" button
}

// Existing code for handling responses, form submission, etc.
function generateEmailForm(initialQuery) {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear previous messages

    const message = document.createElement('p');
    message.textContent = "I couldn't find an answer to your question. Please provide your email, and I'll get back to you shortly!";
    responseContainer.appendChild(message);

    const form = document.createElement('form');
    form.id = "email-form";

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your email address';
    emailInput.required = true;
    form.appendChild(emailInput);

    const queryTextarea = document.createElement('textarea');
    queryTextarea.placeholder = 'Your question';
    queryTextarea.value = initialQuery;
    queryTextarea.required = true;
    form.appendChild(queryTextarea);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Send';
    submitButton.addEventListener('click', () => submitEmailForm(emailInput.value, queryTextarea.value));
    form.appendChild(submitButton);

    responseContainer.appendChild(form);
}

//====================================================================================================

// Function to reset the chatbot to its idle state on page load
function resetChatbotState() {
    // Reset the response container to empty (to avoid showing any form or response)
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = '';

}

// Call the reset function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    resetChatbotState();
    // Add the event listener for the "Other Questions" button here
    document.getElementById('other-questions-button').addEventListener('click', handleOtherQuestions);
});

// Function to reset the chatbot state when opening
function resetOnOpenChatbot() {
    const responseContainer = document.getElementById('response');
    const userInput = document.getElementById('user-input');
    const optionsContainer = document.getElementById('options');
    
    responseContainer.innerHTML = ''; // Clear messages
    userInput.value = ''; // Clear input field
    optionsContainer.style.display = 'flex'; // Show question buttons again
}
