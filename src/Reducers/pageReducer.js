import { NOT_FOUND } from 'redux-first-router'
 
const components = {
  HOME: 'Home',
  MAIN: 'Main',
  [NOT_FOUND]: 'NotFound'
}
 
export default (state = 'HOME', action = {}) => components[action.type] || state