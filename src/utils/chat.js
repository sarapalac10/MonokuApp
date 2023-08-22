import axios from 'axios'

// const API_KEY = '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'
const API_KEY = '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'

export const createReview = async (text) => {
    const content = `¿Qué opinas de esta entrada de mi diario? en no más de 50 palabras ${text}`
    const body = { model: 'gpt-3.5-turbo', messages: [{ role: 'user', content }], temperature: 1.0 }
    const { data } = await axios.post('https://api.openai.com/v1/chat/completions', body, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    } )
    const { choices } = data
    const [ response ] = choices
    const analyzis = response.message.content
    return analyzis
}