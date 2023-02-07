import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CharacterData from "../../Data/Character/Character";
import Selector from "./Selector";
import defaultNameCard from "../../Assets/Namecard_Background_Genshin_Impact_A_New_World.webp"
import paimonIcon from "../../Assets/Paimon.png"

interface CharacterProfileCardProps {
  character: CharacterData | null
  openCharacterSelector: () => void
}

export default function CharacterProfileCard({ character, openCharacterSelector }: CharacterProfileCardProps) {
  const level = ["1+", "20", "40", "50", "60", "70", "80", "90"]
  const constellation = ["C0", "C1", "C2", "C3", "C4", "C5", "C6"]

  const nameCard = character ? `https://api.ambr.top/assets/UI/namecard/${character?.namecardIcon.replace('Icon', 'Pic')}_P.png` : defaultNameCard
  const charaIcon = character ? `https://api.ambr.top/assets/UI/${character?.icon}.png` : paimonIcon

  return <Grid container flexDirection={"row"} sx={{
    backgroundImage: `url(${nameCard})`,
    backgroundSize: "100%",
    borderRadius: "8px",
    height: "150px",
    cursor: "pointer",
  }}
    onClick={(event: React.MouseEvent<HTMLElement>) => {
      // TODO: remove this hack to select certain class to be clickable
      if (!(event.target as HTMLElement).className.includes("MuiButtonBase-root") &&
        !(event.target as HTMLElement).className.includes("MuiBackdrop-root")) {
        openCharacterSelector();
      }
    }}
  >
    <Grid item xs={5} sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    }}>
      <Box src={charaIcon} component="img" width="128px" height="auto" sx={{ position: "absolute" }} />
    </Grid>
    <Grid item xs={7} flexDirection={"column"} display={"flex"} justifyContent={"center"}>
      <Typography variant="h4" component="span" sx={{
        color: "white"
      }}>{character?.name || ""} <br /></Typography>
      {character && <><Rating
        icon={<FontAwesomeIcon icon={faStar} />}
        emptyIcon={<FontAwesomeIcon icon={faStar} />}
        value={character?.rank || 0}
        sx={{ fontSize: "16px" }}
        readOnly
      /><Grid container spacing={1} sx={{ marginTop: "4px" }}>
          <Grid item><Selector data={level} prefix={"Lv. "} /></Grid>
          <Grid item><Selector data={constellation} prefix={""} /></Grid>
        </Grid></>}
    </Grid>
  </Grid>
}
