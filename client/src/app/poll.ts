export class Poll {
  _id: number
  _user: string
  question: string
  option1: {option: string, votes: number}
  option2: {option: string, votes: number}
  option3: {option: string, votes: number}
  option4: {option: string, votes: number}
  createdAt: Date
  updatedAt: Date
}
