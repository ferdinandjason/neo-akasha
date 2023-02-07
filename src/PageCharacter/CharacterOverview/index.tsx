import { Box, Button, Card, CardContent, CardHeader, Chip, Collapse, Container, Divider, Grid, IconButton, InputBase, List, ListProps, Menu, MenuItem, Palette, PaletteColor, Paper, Rating, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography, styled, Skeleton, Modal } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Fragment, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { ArrowDropDown, ArrowDropUp, Help, HelpCenter, HelpCenterRounded, KeyboardArrowDown, KeyboardArrowUp, Person } from "@mui/icons-material";
import { faAnemo, faAtk, faCdReduction, faCritDmg, faCritRate, faCryo, faDef, faDendro, faElectro, faElementalMastery, faEnergyRecharge, faGeo, faHealingAdd, faHealingBonus, faHp, faHydro, faMaxStamina, faPhysicalDmgBonus, faPyro, faShieldStrength } from '../../Components/FontAwesome'
import EditableTableCellTextField from "../../Components/EditableTableCellTextField";
import { addCharacter, useCharacterDispatch, useCharacterContext } from "../../Context/CharacterContext";
import CharacterSelectorModal from "./CharacterSelectorModal";
import CharacterProfileCard from "./CharacterProfileCard";
import CollapsibleCharacterStatInputTable from "./CollapsibleCharacterStatInputTable";
import { Trans } from "react-i18next";
import CharacterSections from "./CharacterSection";

// function CollapsibleTableBasicStats() {
//     const [open, setOpen] = useState(false);

//     return <Fragment>
//         <TableRow hover role="checkbox" tabIndex={-1} key={-1} sx={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
//             <TableCell>
//                 <IconButton
//                     size="small"
//                     onClick={() => setOpen(open)}
//                     sx={{ padding: 0 }}
//                 >
//                     {open ? <KeyboardArrowUp sx={{ fontSize: "0.875rem" }} /> : <KeyboardArrowDown sx={{ fontSize: "0.875rem" }} />}
//                 </IconButton>
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Basic Stat
//             </TableCell>
//             <TableCell />
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={1} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faHp as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 HP
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={17638} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={2} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faAtk as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 ATK
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={2055} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={3} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faDef as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 DEF
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={784} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={4} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faElementalMastery as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Elemental Mastery
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={0} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={5} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faEnergyRecharge as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Energy Recharge
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"100.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={6} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faCritRate as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Crit Rate
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"45.5%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={7} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faCritDmg as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Crit DMG
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"277.4%"} />
//             </TableCell>
//         </TableRow>
//     </Fragment>
// }

// function CollapsibleTableBasicBuff() {
//     const [open, setOpen] = useState(false);

//     return <Fragment>
//         <TableRow hover role="checkbox" tabIndex={-1} key={-1} sx={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
//             <TableCell>
//                 <IconButton
//                     size="small"
//                     onClick={() => setOpen(!open)}
//                     sx={{ padding: 0 }}
//                 >
//                     {open ? <KeyboardArrowUp sx={{ fontSize: "0.875rem" }} /> : <KeyboardArrowDown sx={{ fontSize: "0.875rem" }} />}
//                 </IconButton>
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Basic Buff
//             </TableCell>
//             <TableCell />
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={1} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faPyro as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Pyro DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={2} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faHydro as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Hydro DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={3} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faCryo as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Cryo DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"61.6%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={4} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faElectro as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Electro DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={5} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faGeo as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Geo DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={6} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faAnemo as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Anemo DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={7} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faDendro as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Dendro DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={7} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faPhysicalDmgBonus as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Physical DMG Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//         <TableRow hover role="checkbox" tabIndex={-1} key={7} sx={open ? { display: 'none' } : { display: 'table-row' }}>
//             <TableCell>
//                 <FontAwesomeIcon icon={faHealingBonus as any} />
//             </TableCell>
//             <TableCell key='stat' align='left'>
//                 Healing Bonus
//             </TableCell>
//             <TableCell key='total' align='right'>
//                 <EditableTableCellTextField value={"0.0%"} />
//             </TableCell>
//         </TableRow>
//     </Fragment>
// }

function EmptyCharacterSection() {
  return <Grid item xs={4}><Card variant="outlined" sx={{ borderRadius: "8px", height: "100%" }}>
  <CardHeader
      title={<Skeleton variant="rectangular" height={20} width={160} animation={false}/>}
      titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
      action={<Skeleton variant="rectangular" height={20} width={100} animation={false}/>}
  />
  <Divider />
  <CardContent>
    <Grid container>
      <Grid item xs={2.8}>
        <Skeleton variant="circular" height={60} width={60} animation={false}/>
      </Grid>
      <Grid item xs={9.2} justifyContent={"flex-start"} alignItems={"center"} display={"flex"}>
        <Skeleton variant="rectangular" height={40} width={1000} animation={false}/>
      </Grid>
    </Grid>
    <br/>
    <Skeleton variant="rectangular" height={150} animation={false}/>
  </CardContent>
</Card></Grid>
}

export default function CharacterOverview() {
    const [modalOpen, setModalOpen] = useState(false)
    const {character} = useCharacterContext()

    return <Box>
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ marginTop: "8px", marginBottom: "8px" }}>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ borderRadius: "8px" }}>
                        <CardHeader
                            title="Character Stats"
                            // action={<Help sx={{fontSize: "18px"}}/>}
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent>
                            <CharacterProfileCard character={character} openCharacterSelector={() => setModalOpen(true)}/>
                            <br />
                            <Divider />
                            <TableContainer sx={{borderRadius: "8px", marginTop: "12px"}}>
                                <Table stickyHeader size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell />
                                            <TableCell
                                                key='stat'
                                                align='left'
                                            >
                                                Stat
                                            </TableCell>
                                            <TableCell
                                                key='total'
                                                align='right'
                                                sx={{ width: '85px' }}
                                            >
                                                Total
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <CollapsibleCharacterStatInputTable type="Basic Stat" disabled={character == null}/>
                                        <CollapsibleCharacterStatInputTable type="Basic Buff" disabled={character == null}/>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={9}>
                    <Grid container spacing={2}>
                        {character && character?.talents.map(talent => <CharacterSections id={character?.id} talent={talent}/>)}
                        {character == null && Array.from(Array(6)).map( i => { return <EmptyCharacterSection/> })}
                    </Grid>
                </Grid>
            </Grid>

            <CharacterSelectorModal open={modalOpen} onClose={() => setModalOpen(false)}/>
        </Container>
    </Box>
}

export const DarkTableBody = styled(TableBody)(({ theme }) => ({
    borderRadius: '4px',
    overflow: "hidden",
    marginTop: "12px",
    '> .MuiTableRow-root:nth-of-type(even)': {
        backgroundColor: '#1B263B'
    },
    '> .MuiTableRow-root:nth-of-type(odd)': {
        backgroundColor: '#172032'
    },
    '& .MuiTableCell-root': {
        color: '#E8E9EB',
        borderBottom: 'none',
    }
}));
