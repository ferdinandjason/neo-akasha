import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader, CardContent, Divider, Grid, Typography, Rating, Button, Menu, MenuItem, ButtonGroup, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Box, Container } from "@mui/system";
import { faStar, faX, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { faAnemo, faAtk, faCdReduction, faCritDmg, faCritRate, faCryo, faDef, faDendro, faElectro, faElementalMastery, faEnergyRecharge, faGeo, faGoblet, faHealingAdd, faHealingBonus, faHp, faHydro, faMaxStamina, faPhysicalDmgBonus, faPyro, faShieldStrength } from '../../Components/FontAwesome'
import EditableTableCellTextField from "../../Components/EditableTableCellTextField";


function RefinementSelector() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            Refinement 1
        </Button>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            classes={{ list: 'MuiMenuList-dense' }}
            PopoverClasses={{ paper: 'paper-rounded' }}
        >
            <MenuItem onClick={handleClose} selected>Refinement 1</MenuItem>
            <MenuItem onClick={handleClose}>Refinement 2</MenuItem>
            <MenuItem onClick={handleClose}>Refinement 3</MenuItem>
            <MenuItem onClick={handleClose}>Refinement 4</MenuItem>
            <MenuItem onClick={handleClose}>Refinement 5</MenuItem>
        </Menu>
    </div>
}

export default function CharacterEquipment() {
    return <Box>
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ marginTop: "8px", marginBottom: "8px" }}>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ borderRadius: "8px", height: "100%"  }}>
                        <CardHeader
                            title="Weapon Stats"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent>
                            <Grid container flexDirection={"row"} sx={{
                                background: "linear-gradient(160deg, rgb(97, 78, 78), 35%, rgb(161, 108, 72), 75%, rgb(235, 183, 89))",
                                borderBottomLeftRadius: "0", borderBottomRightRadius: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px",
                                height: "150px",
                                cursor: "pointer",
                            }}
                                onClick={() => { console.log('test') }}
                            >
                                <Grid item xs={7} flexDirection={"column"} display={"flex"} justifyContent={"center"} sx={{padding: "8px 16px 8px 16px"}}>
                                    <Grid display={"flex"}>
                                        <Box src="https://frzyc.github.io/genshin-optimizer/15bcd92bfd70bd2a.png" component="img" width="36px"/>
                                        <Box sx={{marginLeft: "8px"}}>
                                            <Typography variant="h4" component="span" sx={{color: "white"}}>Mistsplitter Reforged</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid sx={{marginTop: "8px"}}>
                                        <Rating
                                            icon={<FontAwesomeIcon icon={faStar} />}
                                            emptyIcon={<FontAwesomeIcon icon={faStar} />}
                                            value={5}
                                            sx={{ fontSize: "16px" }}
                                            readOnly
                                        />
                                        <Grid sx={{marginTop: "4px"}}>
                                            <Typography variant="body1" component="span" sx={{color: "#BFBFBF"}}>Base ATK: </Typography>
                                            <Typography variant="body1" component="span" sx={{color: "white"}}>674</Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography variant="body1" component="span" sx={{color: "#BFBFBF"}}>Crit DMG: </Typography>
                                            <Typography variant="body1" component="span" sx={{color: "white"}}>44.1%</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={5} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-end",
                                }}>
                                    <Box src="https://api.ambr.top/assets/UI/UI_EquipIcon_Sword_Narukami.png" component="img" width="136px" height="auto" sx={{ position: "absolute" }} />
                                </Grid>
                            </Grid>
                            <Grid>
                                <Card sx={{borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "0", borderTopRightRadius: "0"}} elevation={1}>
                                    <Divider/>
                                    <CardContent>
                                        <Grid container justifyContent="space-between" sx={{marginBottom: "16px"}}>
                                            <Grid item sx={{display: "flex", alignContent: "center", flexWrap: "wrap"}}>
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Mistsplitter's Edge</Typography>
                                            </Grid>
                                            <Grid item><RefinementSelector /></Grid>
                                        </Grid>
                                        <Typography variant="body2">Gain a <span className="highlight">12%</span> Elemental DMG Bonus for all elements and receive the might of the Mistsplitter's Emblem. At stack levels 1/2/3, the Mistsplitter's Emblem provides a <span className="highlight">8/16/28%</span> Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of the Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid sx={{marginTop: "16px"}}>
                                <Typography variant="body2">Character's Elemental DMG Bonus: <b>8.0%</b></Typography>
                                <Box justifyContent="center" sx={{marginTop: "8px"}}>
                                    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                        <Button variant="contained" disableElevation disableRipple>8.0%</Button>
                                        <Button>16.0%</Button>
                                        <Button>28.0%</Button>
                                    </ButtonGroup>
                                </Box>
                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={5} >
                    <Card variant="outlined" sx={{ borderRadius: "8px", height: "100%"  }}>
                        <CardHeader
                            title="Artifact Stats"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent>
                            <Grid container>
                                <Grid container spacing={2}>
                                    <Grid item xs={2.4}>
                                        <Grid flexDirection={"row"} sx={{
                                            backgroundImage: "url(https://damage.paimon.app/_nuxt/img/background_item_5_star_2.30a4f36.png)",
                                            backgroundSize: "100%",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                            onClick={() => { console.log('test') }}
                                        >
                                            <Box src="https://damage.paimon.app/images/artifacts/original/Blizzard%20Strayer_flower.webp" component="img" width="100%"/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2.4}>
                                        <Grid flexDirection={"row"} sx={{
                                            backgroundImage: "url(https://damage.paimon.app/_nuxt/img/background_item_5_star_2.30a4f36.png)",
                                            backgroundSize: "100%",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                            onClick={() => { console.log('test') }}
                                        >
                                            <Box src="https://damage.paimon.app/images/artifacts/original/Blizzard%20Strayer_plume.webp" component="img" width="100%"/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2.4}>
                                        <Grid flexDirection={"row"} sx={{
                                            backgroundImage: "url(https://damage.paimon.app/_nuxt/img/background_item_5_star_2.30a4f36.png)",
                                            backgroundSize: "100%",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                            onClick={() => { console.log('test') }}
                                        >
                                            <Box src="https://damage.paimon.app/images/artifacts/original/Blizzard%20Strayer_sands.webp" component="img" width="100%"/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2.4}>
                                        <Grid flexDirection={"row"} sx={{
                                            backgroundColor: "white",
                                            backgroundSize: "100%",
                                            cursor: "pointer",
                                        }}
                                            onClick={() => { console.log('test') }}
                                        >
                                            <Box width="100%" sx={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                display: "flex",
                                                height: "102px",
                                                border: "1px solid rgba(0, 0, 0, 0.12);",
                                                borderRadius: "8px",
                                            }}>
                                                <FontAwesomeIcon icon={faGoblet as any} fontSize="60px" color="#7F7F7F"/>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2.4}>
                                        <Grid flexDirection={"row"} sx={{
                                            backgroundImage: "url(https://damage.paimon.app/_nuxt/img/background_item_5_star_2.30a4f36.png)",
                                            backgroundSize: "100%",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                            onClick={() => { console.log('test') }}
                                        >
                                            <Box src="https://damage.paimon.app/images/artifacts/original/Blizzard%20Strayer_circlet.webp" component="img" width="100%"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid marginTop="16px">
                                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#61B25D" }}>Blizzard Strayer (4):</Typography>
                                    <ul>
                                        <li><Typography variant="body2" color="#61B25D">2-Piece Set: Cryo DMG Bonus +15%</Typography></li>
                                        <li><Typography variant="body2" color="#61B25D">4-Piece Set: When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.</Typography></li>
                                    </ul>
                                </Grid>
                                <Grid  sx={{width: "100%"}}>
                                    <Divider/>
                                </Grid>
                                <Grid sx={{marginTop: "16px", width: "100%"}}>
                                    <Typography variant="body2">Select situational artifact bonuses: <b>CRIT Rate +40.0%</b></Typography>
                                    <Box justifyContent="center" sx={{marginTop: "8px"}}>
                                        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                            <Button>0.0%</Button>
                                            <Button>20.0%</Button>
                                            <Button variant="contained" disableElevation disableRipple>40.0%</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ borderRadius: "8px", height: "100%"  }}>
                        <CardHeader
                            title="Enemy"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent>
                            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}>Enemy Resistance</Typography>
                            <Card variant="outlined" sx={{ borderRadius: "8px" }}>
                                <TableContainer >
                                    {/* <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    key='level'
                                                    align='center'
                                                    sx={{borderBottom: "none"}}
                                                >
                                                    Lv
                                                </TableCell>
                                                <TableCell
                                                    key='res'
                                                    align='center'
                                                    colSpan={9}
                                                    sx={{borderBottom: "none"}}
                                                >
                                                    Resistance(%)
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell/>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faPhysicalDmgBonus as any} fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faPyro as any} className="pyro" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faCryo as any} className="cryo" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faHydro as any} className="hydro" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faElectro as any} className="electro" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faGeo as any} className="geo" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faAnemo as any} className="anemo" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faDendro as any} className="dendro" fontSize="16px"/></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"90"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px", borderBottom: "none"}}><EditableTableCellTextField value={"10"}/></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table> */}
                                </TableContainer>
                            </Card>
                            <br/>
                            <Card variant="outlined" sx={{ borderRadius: "8px" }}>
                                <TableContainer >
                                    {/* <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    key='res'
                                                    align='center'
                                                    colSpan={11}
                                                    sx={{borderBottom: "none"}}
                                                >
                                                    Resistance Debuffs(%)
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" sx={{padding: "0 8px"}}>
                                                        <FontAwesomeIcon icon={faDef as any} fontSize="16px"/>
                                                        <FontAwesomeIcon icon={faX} color="red"  fontSize="10px" style={{marginLeft: "-3px"}}/>
                                                </TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}>
                                                        <FontAwesomeIcon icon={faDef as any} fontSize="16px"/>
                                                        <FontAwesomeIcon icon={faAnglesDown} color="grey" fontSize="10px" style={{marginLeft: "-3px"}}/>
                                                </TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faPhysicalDmgBonus as any} fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faPyro as any} className="pyro" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faCryo as any} className="cryo" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faHydro as any} className="hydro" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faElectro as any} className="electro" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faGeo as any} className="geo" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faAnemo as any} className="anemo" fontSize="16px"/></TableCell>
                                                <TableCell align="center" sx={{padding: "0 8px"}}><FontAwesomeIcon icon={faDendro as any} className="dendro" fontSize="16px"/></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                                <TableCell align="center" sx={{padding: "6px 8px", borderBottom: "none"}}>0</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table> */}
                                </TableContainer>
                            </Card>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Box>
}
