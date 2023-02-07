/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckBox } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { faPyro } from "../../Components/FontAwesome";

export default function CharacterTeamBuffs() {
    const [bennetBurst, setBennetBurst] = useState(false)
    const [bennetBurstStatATK, setBennetBurstStatATK] = useState(0)
    const [bennetBurstLevel, setBennetBurstLevel] = useState(0)

    const [kazuhaPassive2, setKazuhaPassive2] = useState(false)
    const [kazuhaSwirlElement, setKazuhaSwirlElement] = useState("None")
    const [kazuhaEM, setKazuhaEM] = useState(0)

    return <Box>
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ marginTop: "8px", marginBottom: "8px" }}>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ borderRadius: "8px", height: "100%"  }}>
                        <CardHeader
                            title="Character Buffs"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent sx={{overflow: "auto", maxHeight: "750px" }}>
                            <Grid container rowSpacing={2}>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Bennet"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Bennett.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="(C6) Sword, Claymore, or Polearm-wielding characters inside Fantastic Voyage's radius gain a 15% Pyro DMG Bonus and their weapons are infused with Pyro."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={bennetBurst} onChange={(event) => {setBennetBurst(event.target.checked)}}/>}
                                                    label="ATK Bonus (Weapon Lv 90, Character Lv 90, C1~)"
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                                {bennetBurst && <Grid container sx={{padding: "8px 8px 8px 32px"}} spacing={2}>
                                                    <Grid item xs={12}>
                                                        { (bennetBurstStatATK != 0) && <span style={{display: "flex"}}>
                                                            <Typography variant="body2">ATK :</Typography>
                                                            <Typography variant="body2" sx={{color: "#61B25D"}}>&nbsp;{bennetBurstStatATK + 252}</Typography>
                                                        </span> }
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControl variant="filled" fullWidth size="small">
                                                            <InputLabel>Base ATK</InputLabel>
                                                            <Select
                                                                value={bennetBurstStatATK}
                                                                onChange={(event) => {setBennetBurstStatATK(Number(event.target.value))}}
                                                                sx={{fontSize: "14px"}}
                                                            >
                                                                <MenuItem value={0}>None</MenuItem>
                                                                <MenuItem value={645}>645 (Favonius Sword)</MenuItem>
                                                                <MenuItem value={702}>702 (Festering Desire)</MenuItem>
                                                                <MenuItem value={756}>756 (Prototype Rancour)</MenuItem>
                                                                <MenuItem value={799}>799 (Freedom Sword, Skyward Blade)</MenuItem>
                                                                <MenuItem value={811}>811 (Alley Flash)</MenuItem>
                                                                <MenuItem value={865}>865 (Aquila Favonia)</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControl variant="filled" fullWidth size="small">
                                                            <InputLabel>Talent Lv</InputLabel>
                                                            <Select
                                                                value={bennetBurstLevel}
                                                                onChange={(event) => {setBennetBurstLevel(Number(event.target.value))}}
                                                                sx={{fontSize: "14px"}}
                                                            >
                                                                <MenuItem value={0}>None</MenuItem>
                                                                <MenuItem value={8}>8</MenuItem>
                                                                <MenuItem value={9}>9</MenuItem>
                                                                <MenuItem value={10}>10</MenuItem>
                                                                <MenuItem value={11}>11 (C5+)</MenuItem>
                                                                <MenuItem value={12}>12 (C5+)</MenuItem>
                                                                <MenuItem value={13}>13 (C5+)</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>}
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Kaedehara Kazuha"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Kazuha.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="(C2) The Autumn Whirlwind field created by Kazuha Slash has the following effects: · Increases Kaedehara Kazuha's own Elemental Mastery by 200 for its duration. · Increases the Elemental Mastery of characters within the field by 200. The Elemental Mastery-increasing effects of this Constellation do not stack."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={kazuhaPassive2} onChange={(event) => {setKazuhaPassive2(event.target.checked)}}/>}
                                                    label="(Passive Talent 2) Upon triggering a Swirl reaction, Kaedehara Kazuha will grant all party members a 0.04% Elemental DMG Bonus to the element absorbed by Swirl for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                                {kazuhaPassive2 && <Grid container sx={{padding: "8px 8px 8px 32px"}} spacing={2}>
                                                    <Grid item xs={12}>
                                                        <FormControl variant="filled" fullWidth size="small">
                                                            <InputLabel>Element</InputLabel>
                                                            <Select
                                                                value={kazuhaSwirlElement}
                                                                onChange={(event) => {setKazuhaSwirlElement(event.target.value)}}
                                                                sx={{fontSize: "14px"}}
                                                            >
                                                                <MenuItem value={"None"}>None</MenuItem>
                                                                <MenuItem value={"Pyro"}>Pyro</MenuItem>
                                                                <MenuItem value={"Cryo"}>Cryo</MenuItem>
                                                                <MenuItem value={"Hydro"}>Hydro</MenuItem>
                                                                <MenuItem value={"Electro"}>Electro</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField fullWidth size="small" inputProps={{style: {fontSize: "14px"}}} variant="filled" label="Elemental Mastery" value={kazuhaEM} onChange={(event) => {setKazuhaEM(Number(event.target.value))}}/>
                                                    </Grid>
                                                </Grid>}
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ borderRadius: "8px", height: "100%"  }}>
                        <CardHeader
                            title="Artifact Buffs"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent sx={{overflow: "auto", maxHeight: "750px" }}>
                            <Grid container rowSpacing={2}>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Noblesse Oblige"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/Noblesse%20Oblige_flower.02fe163.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="Using an Elemental Burst increases all party members' ATK by 20% for 12s. This effect cannot stack."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Tenacity of the Millelith"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/Tenacity%20of%20the%20Millelith_flower.5771841.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Deepwood Memories"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/Deepwood%20Memories_flower.feadf4c.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="After Elemental Skills or Bursts hit opponents, the targets' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ borderRadius: "8px", height: "100%"  }}>
                        <CardHeader
                            title="Weapon Buffs"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent sx={{overflow: "auto", maxHeight: "750px" }}>
                            <Grid container rowSpacing={2}>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Thrilling Tales of Dragon Slayers"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/Thrilling%20Tales%20of%20Dragon%20Slayers.565869a.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="When switching characters, the new character taking the field has their ATK increased by 48% for 10s. This effect can only occur once every 20s."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Elegy for the End"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/Elegy%20for%20the%20End.42f49f4.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="'Millennial Movement: Farewell Song' increases Elemental Mastery by ?? and increases ATK by ??%."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Freedom-Sworn"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/Freedom-Sworn.0d75cdf.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="'Millennial Movement: Song of Resistance' increases Normal, Charged and Plunging Attack DMG by ??% and increases ATK by ??%."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                        <CardHeader
                            title="Elemental Resonance"
                            titleTypographyProps={{ fontSize: "16px", lineHeight: "16px" }}
                        />
                        <Divider />
                        <CardContent sx={{overflow: "auto", maxHeight: "750px" }}>
                            <Grid container rowSpacing={2}>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Pyro Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_pyro.4943d3f.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="Affected by Cryo for 40% less time. Increases ATK by 25%."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Hydro Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_hydro.8181ef7.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="Affected by Pyro for 40% less time. Increases HP by 25%."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Cryo Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_cryo.45c8518.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="Affected by Electro for 40% less time. Increases CRIT Rate against enemies that are Frozen or affected by Cryo by 15%."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sx={{width: "100%"}}>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Electro Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_electro.9023d14.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Geo Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_geo.ae449fb.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="DMG dealt increased by 15%, dealing DMG to enemies will decrease their Geo RES by 20% for 15s."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Anemo Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_anemo.70610dd.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="Decreases Stamina Consumption by 15%. Increases Movement SPD by 10%. Shortens Skill CD by 5%."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card variant="outlined" sx={{ borderRadius: "8px"}}>
                                        <CardHeader
                                            title="Dendro Resonance"
                                            titleTypographyProps={{ fontWeight: "bold" }}
                                            avatar={<Avatar src="https://damage.paimon.app/_nuxt/img/icon_dendro.818821d.png"/>}
                                            sx={{paddingBottom: "0"}}
                                        />
                                        <CardContent sx={{paddingTop: "0"}}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="Increases Elemental Mastery by 50."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="After triggering Burning, Quicken, or Bloom reactions, all nearby party members gain 30 Elemental Mastery for 6s."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                                <FormControlLabel
                                                    sx={{marginTop: "8px"}}
                                                    control={<Checkbox checked={false} onChange={(event) => {}}/>}
                                                    label="After triggering Aggravate, Spread, Hyperbloom, or Burgeon reactions, all nearby party members gain 20 Elemental Mastery for 6s."
                                                    componentsProps={{typography: {fontSize: '14px'}}}
                                                />
                                            </FormGroup>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Box>
}
