import React, { useState } from 'react'
import { StateEnableInput } from '../type'
import { useDispatch } from 'react-redux'
import { updateUser } from '../useReducer'

interface Props {
  name: string,
  value: string,
  enableEdit: StateEnableInput,
  userid: string,
  setEnableEdit:React.Dispatch<React.SetStateAction<StateEnableInput>>
}

const Editable = ({ userid, name, value, enableEdit, setEnableEdit }: Props) => {
  const dispatch = useDispatch()
  const [inputField, setInputField] = useState('')

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value)
  }

  const onKeyInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log("userId", userid)
      dispatch(updateUser({
        id: userid,
        name: e.target.name,
        value: e.target.value
      }
      ))

      setEnableEdit((prevState) => {
        return {
          ...prevState,
          enableInput: !prevState.enableInput,
          userId: "99999999"
        }
      })
    }
  }

  return (
    <div>
      {enableEdit.enableInput && enableEdit.userId === userid ? <input onChange={(e) => onHandleChange(e)}
        type="text"
        name={`${name}`}
        defaultValue={value}
        onKeyUp={(e) => onKeyInput(e)} />
        : <div>{value}</div>}
    </div>
  )
}

export default Editable

