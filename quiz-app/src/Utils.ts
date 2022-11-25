// randomise answers to the questions
// Not the best random function..
export const shuffleArray= (array: any[])=>
    [...array].sort(() => Math.random() - 0.5);