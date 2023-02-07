import { Close } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, Divider, Grid, IconButton, Modal, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { addCharacter, useCharacterDispatch } from "../../Context/CharacterContext";
import Character from "../../Data/Character/Character";
import { allCharacterIDs, CharacterID } from "../../Types/const";

interface CharacterSelectorModalProps {
    open: boolean
    onClose: () => void
}

const SelectorModal = styled(Modal)(({ theme }) => ({
    overflow: "scroll"
}))

export default function CharacterSelectorModal({ open, onClose }: CharacterSelectorModalProps) {
    const { t } = useTranslation("ui");

    const [characters, setCharacters] = useState<Character[]>([])
    const dispatch = useCharacterDispatch()

    useEffect(() => { Character.all().then(res => setCharacters(res)) }, [])

    return <SelectorModal
        open={open}
        onClose={onClose}
        aria-labelledby="character-selector-modal-title"
        aria-describedby="character-selector-modal-description"
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Card sx={{ borderRadius: "8px" }}>
                <CardHeader
                    title={t('ui:modal.character-selection.title')}
                    titleTypographyProps={{ fontSize: "18px" }}
                    subheader={t('ui:modal.character-selection.subtitle', {characterLength: characters.length})}
                    subheaderTypographyProps={{ fontSize: "13px" }}
                    action={
                        <IconButton aria-label="settings" onClick={onClose}>
                            <Close />
                        </IconButton>
                    }
                />
                <Divider />
                <CardContent sx={{overflow: "auto", maxHeight: "750px" }}>
                    <Grid container spacing={1}>
                    {characters.map(c =>
                      <Grid item xs={3}>
                        <CharacterCardMini key={c.name} character={c} onClick={() => {onClose(); dispatch(addCharacter(c))}}/>
                      </Grid>
                    )}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    </SelectorModal>
}

interface CharacterCardMiniProps {
    character: Character
    onClick: () => void
}

function CharacterCardMini({ character, onClick }: CharacterCardMiniProps) {
    return <Card variant="outlined" sx={{ borderRadius: "8px" }} onClick={onClick}>
        <CardHeader
            title={character.name}
            avatar={<Avatar src={`https://api.ambr.top/assets/UI/${character.icon}.png`} />}
            sx={{ cursor: "pointer" }}
        />
    </Card>
}
