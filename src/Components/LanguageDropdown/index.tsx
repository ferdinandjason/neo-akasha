import { Language } from "@mui/icons-material";
import { FormControl, Select, MenuItem, Box, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import i18n, { languageCodeList } from "../../i18n";
import { Map } from "../../Types/map"

const nativeLanguages: Map = {
    "en": "English",
    "id": "Bahasa Indonesia"
}

function LanguageWithIcon(lang: string) {
    return <Box sx={{ display: "flex" }}>
        <Language htmlColor="#5F6367" sx={{ fontSize: "1.4rem" }} />
        <Typography paragraph={true} sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100px",
            marginBottom: "0",
            marginLeft: "6px",
            marginTop: "1px",
            fontSize: "14px",
            fontWeight: "500",
        }}>
            {nativeLanguages[lang]}
        </Typography>
    </Box>
}

export default function LanguageDropdown() {
    const onSetLanguage = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value)
        setSelectedLanguage(event.target.value)
    }

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.languages[0]);

    return <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 150 }} size="small">
        <Select
            value={selectedLanguage}
            onChange={onSetLanguage}
            renderValue={LanguageWithIcon}
            sx={{ height: "32px", fontSize: "14px", borderColor: "#5F6367" }}
        >
            {languageCodeList.map((lang) => <MenuItem value={lang} selected={selectedLanguage == lang} sx={{ fontSize: "14px" }}>{nativeLanguages[lang]}</MenuItem>)}
        </Select>
    </FormControl>
}
