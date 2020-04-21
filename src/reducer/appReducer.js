import { FETCH_TRIVIA, CLEAN_TRIVIA, NEXT_PAGE, CLEAN_PAGE } from "../types"

const initialState = {
  trivieState: [],
  page:0,
}
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIVIA: {
      return { ...state, trivieState: action.payload }
    }
    case CLEAN_TRIVIA: {
      return { ...state, trivieState: [] }
    }
    case NEXT_PAGE:{
      return {...state, page:state.page+1}
    }
    case CLEAN_PAGE:{
      return {...state, page:0}
    }
    default: return state
  }

}

export function fetchTrivia(theme) {
  return async dispatch => {
    let url = 0
    if (theme === 'games') {
      url = 15
    }
    if (theme === 'televishion') {
      url = 14
    }
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${url}&difficulty=easy&type=multiple`)
    const json = await response.json()
    dispatch({ type: FETCH_TRIVIA, payload: json.results })
  }


}

export function cleanTrivia() {
  return {
    type: CLEAN_TRIVIA
  }
}
export function cleanPage() {
  return {
    type: CLEAN_PAGE
  }
}


export function nextPage() {
  return {
    type: NEXT_PAGE
  }
}

