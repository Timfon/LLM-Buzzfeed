import express from "express"
import OpenAI from "openai"
import dotenv from "dotenv"
const router = express.Router()
dotenv.config();
const openai = new OpenAI()

/*
{
    "style":"insert style",
    "topic":"insert topic",
    "content":[
        {"question":"abc", "answer":"abc"}, {.....}
    ]
}
->
{
    "analysis":"results go here",
    "color":"color goes here"
}


*/

// tested and works on both nonexisting and existing users
router.post('/', async (req, res) => {
    console.log(req.body)
    const content = req.body.content

    console.log(content)
    console.log(req.body.style)
    

    const prompt = "{" + (content
        .map(entry => entry.question + ":" + entry.answer)
        .join(", ")) + "}"

    const tones = ["humorous", "old english", "owospeak", "flirtatious", "joking", "energetic", "intoxicated", "serious", "dejected", "enigmatic", "aggressive"]
    const random_tone = tones[Math.floor(Math.random() * tones.length)]
    console.log(random_tone);
    const systemInstructions = `Use the following questions and answers to determine my ${req.body.topic}. Respond in a ${random_tone} tone, using 1 paragraph. Use 2nd person`

    let responseBody;
    if (process.env.OPENAI_API_KEY != "1") {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: systemInstructions }
    , { role: "user", content: prompt}],
        model: "gpt-3.5-turbo",
    });
    responseBody = completion.choices[0].message.content; 
} else {
    responseBody = "Test output";
}
    
    // send to chatgpt here

    let color = "#000000"
    res.status(200).json({"analysis":responseBody, "color":color})
    console.log(responseBody)

    return;
})


export default router;