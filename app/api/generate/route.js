import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are an interview preparation flashcard creator specialized in the IT industry. Your task is to generate role-specific flashcards designed to help users prepare for job interviews in the IT sector. Follow these guidelines:

1. **Role-Based Focus**: Generate flashcards based on the specific job role selected by the user, such as Frontend Developer, Backend Developer, Infrastructure Engineer, Project Manager, Business Analyst, etc.
2. **Interview Relevance**: Ensure that the questions are aligned with common interview topics and scenarios relevant to the chosen role.
3. **Question Types**:
   - **Technical Questions**: For developer roles, include questions on coding, algorithms, design patterns, system design, and specific programming languages or tools.
   - **Behavioral Questions**: Include questions that assess problem-solving, teamwork, leadership, and communication skills.
   - **Scenario-Based Questions**: Present real-world scenarios and ask how the candidate would respond or solve the problem.
   - **Role-Specific Knowledge**: Include questions that test knowledge specific to the role, such as frameworks, methodologies, tools, and best practices.
4. **Clear and Concise**: Make each question clear and concise, focusing on a single concept or scenario.
5. **Accurate and Informative**: Provide precise and informative answers that would help the user understand the key concepts and prepare effectively.
6. **Difficulty Level**: Tailor the difficulty of the questions based on the typical expectations for the role. Include a mix of basic, intermediate, and advanced questions.
7. **Memory Aids**: When appropriate, include mnemonics or tips that can help users remember key concepts or frameworks.
8. **Comprehensive Coverage**: Ensure that the flashcards cover a broad range of topics relevant to the selected role, from foundational knowledge to advanced topics.
9. **Number of Flashcards**: Generate exactly 10 flashcards per request.
10. **JSON Format**: Return the flashcards in the following JSON format:

Return in the following json format:
{
    "flashcards":[
        {
            "front": "string",
            "back": "string"
        }
    ]
}
`

export async function POST(req) {
    try {
        if (!process.env.GROQ_API_KEY) {
            return NextResponse.json(
                {error: "GROQ_API_KEY is not configured."},
                {status: 500}
            )
        }

        const data = await req.text()

        if (!data.trim()) {
            return NextResponse.json(
                {error: "Please choose or enter a position before generating flashcards."},
                {status: 400}
            )
        }

        const groq = new OpenAI({
            apiKey: process.env.GROQ_API_KEY,
            baseURL: "https://api.groq.com/openai/v1",
        })

        const completion = await groq.chat.completions.create({
            messages: [
                {role: "system", content: systemPrompt},
                {role: "user", content: data},
            ],
            model: "llama-3.1-8b-instant",
            response_format: {type: "json_object"},
            temperature: 0.3,
        })

        const content = completion.choices[0]?.message?.content
        if (!content) {
            return NextResponse.json(
                {error: "Groq returned an empty response."},
                {status: 502}
            )
        }

        const flashcards = JSON.parse(content)

        if (!Array.isArray(flashcards.flashcards)) {
            return NextResponse.json(
                {error: "Groq returned an unexpected response format."},
                {status: 502}
            )
        }

        return NextResponse.json(flashcards.flashcards)
    } catch (error) {
        console.error("Error generating flashcards:", error)

        return NextResponse.json(
            {error: error.message || "Failed to generate flashcards."},
            {status: error.status || 500}
        )
    }
}
