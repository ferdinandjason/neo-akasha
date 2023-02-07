import { Skeleton, Typography } from "@mui/material"
import { Trans, useTranslation } from "react-i18next"
import { HTMLAttributes, Suspense } from "react";
import { styled } from "@mui/system";

interface ColorTextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string
}

const ColorText = styled("span")<ColorTextProps>(({ color }) => {
  return { color: color }
})

const textComponents = {
  anemo: <ColorText color="#3cb09d" />,
  geo: <ColorText color="#c9a148" />,
  cryo: <ColorText color="#52c4c7" />,
  hydro: <ColorText color="#457fcb" />,
  pyro: <ColorText color="#d56434" />,
  electro: <ColorText color="#a467d9" />,
  dendro: <ColorText color="#6ea63b" />,
}

export default function Translate({ ns, key18 }: { ns: string, key18: string }) {
  const { t } = useTranslation(ns)
  const textKey = `${ns}:${key18}`
  const textObj = t(textKey, { returnObjects: true })
  return <Suspense fallback={<Skeleton></Skeleton>}>
    <T key18={textKey} textObj={textObj} />
  </Suspense>
}

function T({ key18, textObj, li }: { key18: string, textObj: object, li?: boolean }) {
  if (typeof textObj == "string") {
    return <Trans i18nKey={key18} components={textComponents} />
  }
  if (Array.isArray(textObj)) {
    return <ul>
      <T key18={key18} li textObj={{ ...textObj }} />
    </ul>
  }
  return Object.entries(textObj).map(([key, val]) => {
    if (typeof val === "object") {
      return <T key={key} key18={`${key18}.${key}`} textObj={val} />
    }
    if (typeof val === "string") {
      const trans = <Trans key={key} i18nKey={`${key18}.${key}`} components={textComponents}/>
      return li ? <li key={key}>{trans}</li> : trans
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any
}
