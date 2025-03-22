import {surpriseMePrompts} from '../constants/prompts.ts'


export const getRandomPrompt = (prompt: string): string => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)


    if(surpriseMePrompts[randomIndex] === prompt){
        return getRandomPrompt(prompt)
    }

    return surpriseMePrompts[randomIndex]
}