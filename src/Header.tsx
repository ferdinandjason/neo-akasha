import { AppBar, Button, IconButton, Link, styled, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { DarkMode, GitHub, LightMode } from "@mui/icons-material"
import { Box } from "@mui/system";
import { Link as RouterLink, useMatch } from "react-router-dom";
import LanguageDropdown from "./Components/LanguageDropdown";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ColorModeContext } from "./Context/ColorModeContext";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrimaryAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#202124' : '#ffffff',
  borderBottom: theme.palette.mode == 'dark'? "1px solid #343A41" : "1px solid #e6e6e6"
}))

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { t } = useTranslation("ui")
  const { params: { tab } } = useMatch({ path: "/:tab", end: false }) ?? { params: { tab: "" } };

  return <PrimaryAppBar color="default" position="sticky" elevation={0}>
    <Box sx={{ height: "48px", gap: "16px", padding: "0 16px 0 24px", display: "flex" }}>
      <Box sx={{ display: "flex", margin: "6px" }}>
        <FontAwesomeIcon icon={faChess} style={{fontSize: "26px"}}/><span>&nbsp;&nbsp;</span>
        <Typography variant="h5" sx={{ fontWeight: "500", paddingTop: "2px" }} color="primary">
          Neo
        </Typography>
        <Typography variant="h5" sx={{ color: theme.palette.mode == 'dark' ? '#ffffff' : '#5F6367', paddingTop: "2px" }}>
          Akasha
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginLeft: "20px" }}>
        <Tabs value={tab} classes={{ root: 'flexible-tab' }}>
          <Tab label={t("ui:tabs.calculator")} value="character" component={RouterLink} to={"/character"} />
          <Tab label={t("ui:tabs.more")} />
        </Tabs>
        <LanguageDropdown />
      </Box>
      <Box sx={{ display: "flex", margin: "6px" }}>
        {/* <Button component={Link} href="https://github.com/ferdinandjason" sx={{ color: "#5F6367" }}>
          <GitHub htmlColor="rgb(18, 18, 18)" />
        </Button> */}
        <IconButton sx={{ ml: 1 }} LinkComponent={Link} color="inherit" href="https://github.com/ferdinandjason">
          <GitHub />
        </IconButton>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <DarkMode/> : <LightMode/>}
        </IconButton>
      </Box>
    </Box>
  </PrimaryAppBar>
}
