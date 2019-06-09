import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_USER } from './TestoneActions'
import { doUpdateUser} from './TestoneActions'

/**
 *  Funktionerna nedan måste ha * efter sig då det är generator functions. 
 *  Generator functions deklarerar man med function* (){};
 */

export function* watchUpdateUser(){

  yield takeEvery(
    ACTION_UPDATE_USER,
    makeUpdateUser
  )
}

function* makeUpdateUser(action){
  yield put(doUpdateUser(action.data))
}