import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";


interface SelectorProps {
    data: string[] | number[]
    prefix: string
}

export default function Selector({data, prefix} : SelectorProps) {
    const [selected, setSelected] = useState<number>(0)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
      ) => {
        setSelected(index);
        setAnchorEl(null);
      };

    return <div>
        <Button
            color="inherit"
            onClick={handleClick}
            sx={{
                borderRadius: '100px',
                background: 'rgba(0, 0, 0, 0.6)',
                paddingLeft: '16px',
                paddingRight: '16px',
                minWidth: '40px',
                color: 'white',
                '&.MuiButton-root:hover': {
                    background: 'rgb(0, 0, 0)'
                }
            }}
            size="small"
            endIcon={open ? <ArrowDropUp/> : <ArrowDropDown/>}
        >
            {prefix + data[selected]}
        </Button>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            classes={{ list: 'MuiMenuList-dense' }}
            PopoverClasses={{ paper: 'paper-rounded' }}
        >
            {data.map((item, index) => (
                <MenuItem
                    key={item}
                    disabled={index === selected}
                    selected={index === selected}
                    onClick={(event) => handleMenuItemClick(event, index)}
                >
                    {prefix + item}
                </MenuItem>
            ))}
        </Menu>
    </div>
}