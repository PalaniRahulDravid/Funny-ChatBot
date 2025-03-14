const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const responses = {
    "hii": ["Hii, hello!", "Hey there!", "Hi buddy!", "Yo! What's up?"],
    "hello": ["Hello! How are you?", "Hey, what's up?", "Hello buddy!", "Hi! How’s your day going?"],
    "how are you": ["I'm good! How about you?", "Doing great! What about you?", "I'm just a bot, but I'm fine!", "Awesome! Thanks for asking."],
    "what are you doing": ["Nothing much, just chatting!", "Waiting for your messages!", "Talking to you!", "Just chilling..."],
    "bye": ["Bye! Have a great day!", "See you soon!", "Goodbye, take care!", "Talk to you later!"],
    "nice raa": ["Haha, mee too!", "Gud job...!", "Thokka raa 😂"],
    "what's your name": ["I'm your chatbot buddy!", "Call me ChatBuddy!", "I'm just a bot with no name 😜."],
    "who created you": ["A genius coder like you 😉.", "Someone smart, just like you!", "A tech geek made me!"],
    "what is your age": ["I'm timeless! 😉", "Just born recently!", "Age is just a number!"],
    "where are you from": ["I'm from the internet! 😆", "I exist in cyberspace.", "Everywhere and nowhere!"],
    "i love you": ["Awww! I love you too buddy! ❤️", "Haha! You're making me blush! 😳", "Thanks! But I'm just a bot! 😆"],
    "nothing":["okk...! Let's start some conversation","Alright, What's going on...!"],
    "fine":["Good response Buddy!😉","Eww...Great Hearing"],
    "tell me a joke": ["Why don't programmers like nature? It has too many bugs! 😂", "What’s a computer’s favorite snack? Microchips! 😆"],
    "good morning": ["Good morning! Have an awesome day!", "Morning buddy! What's the plan for today?", "Rise and shine!"],
    "good night": ["Good night! Sleep well.", "Sweet dreams, buddy!", "Good night! Don't let the bugs bite 😆."],
    "what's up": ["Not much, just vibing!", "Same old, same old!", "Just waiting for your messages!"],
    "what is the meaning of life": ["That's a deep question! Many philosophers and thinkers have pondered that. It's often said that the meaning of life is what you make it.", "The meaning of life is a personal journey. What brings you joy and fulfillment?", "As a bot, I don't have personal beliefs, but I can say that learning, growing, and connecting with others are valuable experiences."],
    "are you a robot": ["You got it! I'm a chatbot, a type of robot.", "Yes, I am a digital entity.", "I'm a bot designed to chat with you!"],
    "can you help me": ["Of course! How can I assist you?", "I'll do my best to help you!", "I'm here to provide information and assistance.", "Tell me what you need!"],
    "thank you": ["You're welcome!", "No problem!", "My pleasure!", "Anytime!", "Glad I could help!", "You're very welcome!"],
    "what is today's date": ["I do not have access to real time information. Please check your local device for the correct date.", "I am unable to provide the current date. Please check your device system settings.", "I cannot provide the current date."],
    "what time is it": ["I do not have access to real time information. Please check your local device for the current time.", "I am unable to provide the current time. Please check your device system settings.", "I cannot provide the current time."]
};


const fallbackResponses = [
    "I didn't understand that. Can you say it differently?",
    "Hmm, I'm not sure what you mean! Can you pls try another one!",
    "Can you rephrase that? I'm still learning!",
    "Oops! I didn’t get that. Try again?"
];


function getResponse(message) {
    message = message.toLowerCase();
    return responses[message] ? 
        responses[message][Math.floor(Math.random() * responses[message].length)] : 
        fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}


                    // API 

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    console.log("User:", userMessage);

    const botReply = getResponse(userMessage);
    res.json({ reply: botReply });
});

app.listen(5000, () => {
    console.log("Server running on port 5000")
});
