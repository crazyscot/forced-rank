import { reactive } from 'vue'

export class Question {
  first: number
  second: number
  constructor(opt1: number, opt2: number) {
    this.first = opt1
    this.second = opt2
  }
}

export const state = reactive({
  items: ['', ''],

  questions: <Question[]>[],
  matrix: <number[][]>[], // responses as a 2-d matrix (triangular; only valid where i<j; -1 denotes unanswered, -2 denotes invalid)
})

export function initialiseQuestions() {
  const n = state.items.length

  const qns = []
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i == j) continue
      qns.push(new Question(i, j))
    }
  }
  state.questions = qns
  //console.log('There are {{ n }} items')

  const matrix = <number[][]>[]
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      if (i <= j) row.push(-2)
      else row.push(-1)
    }
    //console.log('ROW: ' + row)
    matrix.push(row)
  }
  state.matrix = matrix
}

// generally:
//  "the child should emit an event to let the parent perform the mutation"
//     https://vuejs.org/guide/components/events.html
//     https://vuejs.org/guide/essentials/event-handling
// but for now, globals will be fine
