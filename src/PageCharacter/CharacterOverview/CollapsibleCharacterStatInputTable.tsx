/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IconButton, TableCell, TableRow, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import EditableTableCellTextField from "../../Components/EditableTableCellTextField";
import { faAnemo, faAtk, faCdReduction, faCritDmg, faCritRate, faCryo, faDef, faDendro, faElectro, faElementalMastery, faEnergyRecharge, faGeo, faHealingAdd, faHealingBonus, faHp, faHydro, faMaxStamina, faPhysicalDmgBonus, faPyro, faShieldStrength } from '../../Components/FontAwesome'
import { useCharacterInputContext } from "../../Context/CharacterInputContext";
import { CharacterInputToFaIcon, CharacterStatGroup, Input } from "../../Input/CharacterInputData";

interface CollapsibleCharacterStatInputTableProps {
  type: string
  disabled?: boolean
}

export default function CollapsibleCharacterStatInputTable({ type, disabled = false }: CollapsibleCharacterStatInputTableProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("ui")
  const characterInput = useCharacterInputContext()
  const statGroupKey = CharacterStatGroup.get(type)

  console.log(characterInput)

  return <Fragment>
    <TableRow hover role="checkbox" tabIndex={-1} key={type} sx={{ backgroundColor: theme.palette.mode == 'dark'? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.07)" }}>
      <TableCell>
        <IconButton
          size="small"
          onClick={() => setOpen(!open)}
          sx={{ padding: 0 }}
        >
          {open ? <KeyboardArrowUp sx={{ fontSize: "0.875rem" }} /> : <KeyboardArrowDown sx={{ fontSize: "0.875rem" }} />}
        </IconButton>
      </TableCell>
      <TableCell key='stat' align='left'>
        {type}
      </TableCell>
      <TableCell />
    </TableRow>
    {statGroupKey?.map((key, index) => (
      <TableRow hover role="checkbox" tabIndex={index} key={type+key} sx={open ? { display: 'none' } : { display: 'table-row' }}>
      <TableCell>
        <FontAwesomeIcon icon={CharacterInputToFaIcon.get(key) as any} />
      </TableCell>
      <TableCell key={"stat" + t(`ui:stats.${key}`)} align='left'>
        {t(`ui:stats.${key}`)}
      </TableCell>
      <TableCell key={"total" + t(`ui:stats.${key}`)} align='right'>
        <EditableTableCellTextField value={characterInput.get(key) as Input} key={key} id={key} disabled={disabled}/>
      </TableCell>
    </TableRow>))}
  </Fragment>
}
