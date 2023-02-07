import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { Grid, Card, CardHeader, Divider, CardContent, Box, Typography, TableContainer, Table, TableRow, TableCell, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DarkTableBody } from ".";
import { CharacterTalent, CharacterTalentSectionField, CharacterTalentSectionFields, CharacterTalentSectionText } from "../../Data/Character/Character";
import { CharacterID } from "../../Types/const";
import Translate from "../../Components/Translate";
import { updateCharacterInputData, useCharacterInputContext, useCharacterInputDispatch } from "../../Context/CharacterInputContext";
import { Input } from "../../Input/CharacterInputData";

function TalentSelector({type}: {type: string}) {
  const levelRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const characterInput = useCharacterInputContext()
  const dispatch = useCharacterInputDispatch()
  const [selectedLevel, setSelectedLevel] = useState((characterInput.get(`${type}Index`) as Input).data)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const updateLevel = (level: number) => {
    handleClose()
    dispatch(updateCharacterInputData(`${type}Index`, {data: level, unit: ""}))
    setSelectedLevel(level)
  }

  return <div>
      <Button
          // color="inherit"
          variant="contained"
          disableElevation
          onClick={handleClick}
          sx={{
              borderRadius: '8px'
          }}
          size="small"
          endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
      >
          Talent Lv. {selectedLevel}
      </Button>
      <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          classes={{ list: 'MuiMenuList-dense' }}
          PopoverClasses={{ paper: 'paper-rounded' }}
      >
          {
            levelRange.map(level => <MenuItem onClick={() => updateLevel(level)} selected={level == selectedLevel}>{`Talent Lv. ${level}`}</MenuItem>)
          }
      </Menu>
  </div>
}

interface CharacterSectionTextProps {
  section: CharacterTalentSectionText
  type: string
}

function CharacterSectionText({section}: CharacterSectionTextProps) {
  return section.text
  // <Typography variant="body2" sx={{marginBottom:"12px"}}>

  // </Typography>
}

interface CharacterSectionFieldsProps {
  section: CharacterTalentSectionFields
  type: string
}

function formatValue(field: CharacterTalentSectionField, index: number) {
  if (field.value.length == 0 && field.multiScale != undefined && field.multiScale?.length != 0) {
    const ret = []
    for (let i = 0; i < field.multiScale?.length; i++) {
      const value = field.multiScale?.[i].value?.[index]
      const unit = field.multiScale?.[i].unit? field.multiScale?.[i].unit: ''
      let valueStr = String(value)
      if (unit == '%') {
        valueStr = (value * 100).toFixed(2)
      } else {
        valueStr = value.toFixed(0)
      }
      const baseStr = field.multiScale?.[i].base? ' ' + field.multiScale?.[i].base: ''
      ret.push(valueStr + unit + baseStr)
    }

    return ret.join(" + ")
  }

  const value = field.value[index]
  const unit = field.unit? field.unit : ''
  let valueStr = String(value)
  if (unit == '%') {
    valueStr = (value * 100).toFixed(2)
  }

  return (field.multi ? `${field.multi}×`: '') + valueStr + unit
}

function CharacterSectionFields({section, type}: CharacterSectionFieldsProps) {
  const characterInput = useCharacterInputContext()
  const levelIndex = (characterInput.get(`${type}Index`) as Input).data

  return <TableContainer sx={{ borderRadius: "8px", marginTop: "12px", marginBottom: "12px" }}>
  <Table stickyHeader size="small">
    <DarkTableBody>
      {section.field.map(field => <TableRow hover role="checkbox" tabIndex={-1} key={1}>
        <TableCell key='stat' align='left'>{field.key}</TableCell>
        <TableCell key='total' align='right'>
          {formatValue(field, levelIndex)}
        </TableCell>
      </TableRow>)}
    </DarkTableBody>
  </Table>
</TableContainer>
}

interface CharacterSectionsProps {
  id: CharacterID
  talent: CharacterTalent
}

export default function CharacterSections({id, talent}: CharacterSectionsProps) {
  const { t } = useTranslation(String(id))

  return <Grid item xs={4}><Card variant="outlined" sx={{ borderRadius: "8px", height: "100%" }}>
    <CardHeader
      title={t(`ui:section.title.${talent.type}`)}
      titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
      action={talent.data.promoteable? <TalentSelector type={talent.type}/>: null }
    />
    <Divider />
    <CardContent sx={{fontSize: "14px"}}>
      <Grid container>
        <Grid item xs={2.8}>
          <Box src={`https://api.ambr.top/assets/UI/${talent.data.icon}.png`} component="img" width="60px" className="rounded-icon-border" />
        </Grid>
        <Grid item xs={9.2} justifyContent={"flex-start"} alignItems={"center"} display={"flex"}>
          <div>
            <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>{t(`${talent.name}`)}</Typography><br />
            <Typography variant="subtitle2" component="span" sx={{ fontWeight: "unset" }}>{t(`ui:section.title.${talent.type}`)}</Typography>
          </div>
        </Grid>
      </Grid>
      <br />

      {
        talent.sections.map((section) => {
          if ("text" in section) {
            return <CharacterSectionText section={section} type={talent.type}/>
          } else {
            return <CharacterSectionFields section={section} type={talent.type}/>
          }
        })
      }
    </CardContent>
  </Card></Grid>
}

