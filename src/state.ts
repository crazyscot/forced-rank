import { reactive, ref } from 'vue'
import _ from 'lodash'

export class Question {
  first: number
  second: number
  flip: boolean
  constructor(opt1: number, opt2: number, flip: boolean) {
    this.first = opt1
    this.second = opt2
    this.flip = flip
  }
  text(first: boolean) {
    // return first if (first XOR this.flip)
    // i.e. if they're the same, return second.
    const item = this.flip === first ? this.second : this.first
    return state.items[item]
  }
  choice(first: boolean) {
    return this.flip === first ? 1 : 0
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
  items: ['', '', '', '', ''],

  questions: <Question[]>[],
  matrix: <Response[][]>[],
  matrix_valid: false,

  logo_clicks: 0,
})

export const options = reactive({
  debug_mode: false,
  show_scores: false,
  results_show_grid: false,
  shuffle_questions: true,
})

function random_bool() {
  return Math.random() < 0.5
}

export function initialiseQuestions() {
  // trim whitespace, filter empties
  for (let item of state.items) {
    item = item.trim()
  }
  _.remove(state.items, (it) => !it.length)
  if (state.items.length < 3) {
    // Nothing to do, give them minimum blanks
    while (state.items.length < 3) state.items.push('')
    return
  }

  const n = state.items.length
  const shuffle = options.shuffle_questions

  const qns = []
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i == j) continue
      qns.push(new Question(i, j, shuffle && random_bool()))
    }
  }
  if (shuffle) {
    state.questions = _.shuffle(qns)
  } else {
    state.questions = qns
  }
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
  state.matrix_valid = true
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
