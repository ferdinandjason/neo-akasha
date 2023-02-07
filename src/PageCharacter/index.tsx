import { Box, Paper, Tab, Tabs, Skeleton, useTheme, styled } from "@mui/material";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, Link as RouterLink, useMatch } from 'react-router-dom';
import { CharacterProvider } from "../Context/CharacterContext";
import { CharacterInputProvider } from "../Context/CharacterInputContext";
import CharacterEquipment from "./CharacterEquipment";
import CharacterOverview from './CharacterOverview';
import CharacterTeamBuffs from "./CharacterTeamBuffs";

const SecondaryAppBar = styled(Paper)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.mode === 'dark' ? "#29364D" : "#F5F6F7",
  borderRadius: "0",
  boxShadow: theme.palette.mode === 'dark' ? "0 1px 2px 0 rgba(160, 164, 167, .3), 0 1px 3px 1px rgba(160, 164, 167, .15);" :
                                             "0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)",
  position: "sticky",
  top: "49px",
  zIndex: "100",
}))

function ContentHeader() {
  const { t } = useTranslation("ui")
  const { params: { tab } } = useMatch({ path: "/character/:tab", end: false }) ?? { params: { tab: "" } };

  return <SecondaryAppBar elevation={1}>
    <Tabs value={tab} classes={{ root: 'flexible-tab' }}>
      <Tab label={t("ui:tabs.characters.overview")} value="" component={RouterLink} to="" />
      <Tab label={t("ui:tabs.characters.equipment")} value="equipment" component={RouterLink} to="equipment" />
      <Tab label={t("ui:tabs.characters.teambuffs")} value="teambuffs" component={RouterLink} to="teambuffs" />
    </Tabs>
  </SecondaryAppBar>
}
export default function PageCharacter() {
  return <CharacterProvider>
    <CharacterInputProvider>
      <Box display={"flex"} flexDirection={"column"}>
        <ContentHeader />
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={500} />}>
          <Routes>
            <Route index element={<CharacterOverview />} />
            <Route path="equipment" element={<CharacterEquipment />} />
            <Route path="teambuffs" element={<CharacterTeamBuffs />} />
          </Routes>
        </Suspense>
      </Box>
    </CharacterInputProvider>
  </CharacterProvider>
}
