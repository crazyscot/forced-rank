import { reactive } from 'vue'

export class Question {
  first: number
  second: number
  constructor(opt1: number, opt2: number) {
    this.first = opt1
    this.second = opt2
  }
}

export class Response {
  answer: number | undefined // undefined => not answered yet
  valid: boolean
  constructor(valid: boolean) {
    this.valid = valid
  }
}

export const state = reactive({
  items: ['', ''],

  questions: <Question[]>[],
  matrix: <Response[][]>[],
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

  const matrix = <Response[][]>[]
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      if (i <= j) row.push(new Response(false))
      else row.push(new Response(true))
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
