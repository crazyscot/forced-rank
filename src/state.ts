import { reactive, ref } from 'vue'

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

export const options = reactive({
  debug_matrix: true,
  show_scores: true,
  results_show_grid: true,
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

export function choice(item: number) {
  // item 0 => first item was picked
  // item 1 => second was picked

  const question = state.questions[0]
  const winner = item == 0 ? question.first : question.second
  //const loser = item == 1 ? question.first : question.second
  //console.log('Response: ' + winner + ' beats ' + loser + '!')

  const output = ref(state.matrix[question.second][question.first])
  output.value.answer = winner
  //console.log(state.matrix)

  state.questions.shift()
}

export class Result {
  place: string // "1" "2=" etc.
  item: string
  score: number
  constructor(item: string, place: string, score: number) {
    this.item = item
    this.place = place
    this.score = score
  }
}

// generally:
//  "the child should emit an event to let the parent perform the mutation"
//     https://vuejs.org/guide/components/events.html
//     https://vuejs.org/guide/essentials/event-handling
// but for now, globals will be fine
