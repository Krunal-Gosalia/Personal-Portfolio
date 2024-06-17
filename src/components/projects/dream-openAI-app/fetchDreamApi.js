const { OpenAI } = require("openai");

export default async function fetchDreamApi(inputText) {
    const openai = new OpenAI({
        organization: process.env.REACT_APP_OPENAI_ORG_ID,
        project: process.env.REACT_APP_OPENAI_PROJECT_ID,
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    });

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "system", "content": "You are a assistant helping user analyze their dreams. User will give you the desciprtion of the dream, you help me them analyze them. Respond should be in paragraph format, avoid using any markdown symbol" },
            { "role": "user", "content": `Write an analysis based on the description of my dream: "${inputText}"` }
        ]
    });

    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Generate a beautiful, fantastical image visualizing the dream: "${inputText}"`,
        size: "1024x1024",
        quality: "standard",
        n: 1,
    });

    return {
        imageURL: response.data[0].url, analysis: completion.choices[0].message.content
    }
}