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
    console.log(req.body.topic)

    const prompt = "{" + (content
        .map(entry => entry.question + ":" + entry.answer)
        .join(", ")) + "}"
    const systemInstructions = `Use the following questions and answers to determine my ${req.body.topic}. Respond in a ${req.body.style} tone, using only 1 paragraph.`

    const colorPrompt = `Based on the above responses, please give a color that represents the ${req.body.topic}.  Please only include the hex notation of the color as a single word and nothing else.`

    console.log(prompt)
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: systemInstructions }
    , { role: "user", content: prompt}],
        model: "gpt-3.5-turbo",
    });
    
    let responseBody = completion.choices[0].message.content;
    // send to chatgpt here

    let color = "#000000"
    res.status(200).json({"analysis":responseBody, "color":color})
    console.log(responseBody)

    return;
})


export default router;