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
    "fine":["Good response Buddy!😉","Eww...Great Hearing"]
};


const fallbackResponses = [
    "I didn't understand that. Can you say it differently?",
    "Hmm, I'm not sure what you mean! Can you pls try another one!"
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
