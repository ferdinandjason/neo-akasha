import { useState } from "react";
import { Box, Chip, Container, Grid, Tab, Tabs, Typography } from "@mui/material";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ObsoleteContentHeader() {
    const [value, setValue] = useState(0)

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <Box sx={{
        color: "white",
        background: "linear-gradient(to right, rgb(26, 115, 232), rgb(66, 133, 244))"
    }}>
        <Container maxWidth="xl">
            <Grid container direction="column" minHeight="45px">
                <Grid item width="936px" sx={{margin: "0 12px"}}>
                    <Box sx={{width: "400px"}}>
                        <Grid container direction="column" sx={{justifyContent: "center", margin: "24px 0"}}>
                            <Box>
                                <Chip label="Beta" sx={{color: "inherit", backgroundColor: "rgba(255, 255, 255, 0.1)", marginBottom: "12px"}}/>
                            </Box>
                            <Typography variant="h2">Damage Calculator</Typography>
                            <Typography variant="subtitle1">Solve artefact confusing problem with Neo Akasha damage calculator</Typography>
                            <br/>
                            <Grid container direction="row">
                                <Grid item sx={{paddingTop: '6px'}}>
                                    <Typography variant="body1">Character :</Typography>
                                </Grid>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <Grid item>
                                    {/* <CharacterSelector/> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item flexGrow={1}/>
                <Grid item>
                    <Tabs value={value} onChange={handleTabChange} classes={{indicator: 'character-content-tabs-indicator'}}>
                        <Tab label="Overview" classes={{selected: 'character-content-tab-selected', root: 'character-content-tab'}}/>
                        <Tab label="Talent" classes={{selected: 'character-content-tab-selected', root: 'character-content-tab'}}/>
                        <Tab label="Team Buffs" classes={{selected: 'character-content-tab-selected', root: 'character-content-tab'}}/>
                        <Tab label="Enemy" classes={{selected: 'character-content-tab-selected', root: 'character-content-tab'}}/>
                    </Tabs>
                </Grid>
            </Grid>
        </Container>
    </Box>
}