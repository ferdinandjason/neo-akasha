import { TextField } from "@mui/material"
import { normalize } from "path"
import { ChangeEvent, useState } from "react"
import { updateCharacterInputData, useCharacterInputDispatch } from "../Context/CharacterInputContext"
import { Input } from "../Input/CharacterInputData"

interface EditableTableCellTextFieldProps {
  id: string
  value: Input
  disabled?: boolean
}

function formatValue(value: number, unit: string) {
  if (unit == "%") {
    return value.toFixed(1)
  }
  return value
}

export default function EditableTableCellTextField({id, value, disabled}: EditableTableCellTextFieldProps) {
  let standarizedValueData = value.data
  if (value.unit == "%") {
    standarizedValueData *= 100
  }

  const [fieldValue, setFieldValue] = useState(standarizedValueData)
  const dispatch = useCharacterInputDispatch()

  const onFieldChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.target.value.endsWith(".")) {
      event.target.value = event.target.value + "0"
    }

    const data = Number(event.target.value)
    const normalizedData = (value.unit == "%") ? data / 100.0 : data

    console.log(id, data, normalizedData)
    setFieldValue(data)
    dispatch(updateCharacterInputData(id, {data: normalizedData, unit: value.unit}))
  }

  return <div style={{display: 'flex'}}>
    <TextField
      disabled={disabled}
      variant="standard"
      value={formatValue(fieldValue, value.unit)}
      sx={{ font: "inherit" }}
      inputProps={{ style: { textAlign: "inherit", padding: 0, fontSize: "0.875rem" } }}
      onChange={onFieldChange}
      margin="dense" size="small"
    />
    {value.unit != "" && <p style={{marginTop: "9px", marginBottom: "0", marginLeft: "2px"}}>{value.unit}</p>}
  </div>
}
