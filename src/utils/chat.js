import axios from 'axios'

const API_KEY = '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'

export const createReview = async (content) => {
    const data = { model: 'gpt-3.5-turbo', messages: [{ role: 'user', content }], temperature: 1.0 }
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    } )
    console.log(response)
}