import { RootState, AppDispatch } from "../usersStore";
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'

export const userAppSelector:TypedUseSelectorHook<RootState> = useSelector

export const userAppDispatch: () =>AppDispatch = useDispatch

