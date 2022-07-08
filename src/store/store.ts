import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {notesReducer} from "../reducers/notesReducer";
import {confidantReducer} from "../reducers/confidantReducer";
import {noticeReducer} from "../reducers/noticeReducer";
import {authReducer} from "../reducers/authReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {modalReducer} from "../reducers/modal-reducer";
import {equipReducer} from "../reducers/equipReducer";
import {rentBlockReducer} from "../reducers/rentBlockReducer";
import {registrationReducer} from "../reducers/registrationReducer";
import {supportReducer} from "../reducers/supportReducer";
import thunk, { ThunkDispatch } from "redux-thunk";


const rootReducer = combineReducers({
    registration: registrationReducer,
    notes: notesReducer,
    confidant: confidantReducer,
    notice: noticeReducer,
    auth: authReducer,
    modal: modalReducer,
    equips: equipReducer,
    rent: rentBlockReducer,
    support: supportReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatchType =  ThunkDispatch<AppStateType, any, AnyAction>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

