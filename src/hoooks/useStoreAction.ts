import { RootState, AppDispatch } from "../usersStore";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch

