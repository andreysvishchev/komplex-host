import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {notesReducer} from "./notesReducer";
import {confidantReducer} from "./confidantReducer";
import {noticeReducer} from "./noticeReducer";
import {authReducer} from "./authReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {modalReducer} from "./modalReducer";
import {equipReducer} from "./equipReducer";
import {rentBlockReducer} from "./rentBlockReducer";
import {registrationReducer} from "./registrationReducer";
import {supportReducer} from "./supportReducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import {errorReducer} from "./errorReducer";
import {appReducer} from "./appReducer";
import {unionReducer} from "./unionReducer";


const rootReducer = combineReducers({
    union: unionReducer,
    registration: registrationReducer,
    notes: notesReducer,
    confidant: confidantReducer,
    notice: noticeReducer,
    auth: authReducer,
    modal: modalReducer,
    equips: equipReducer,
    rent: rentBlockReducer,
    support: supportReducer,
    error: errorReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatchType =  ThunkDispatch<AppStateType, any, AnyAction>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

