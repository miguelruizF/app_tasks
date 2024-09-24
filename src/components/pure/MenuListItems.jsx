import { Home, List, Settings, Task } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Task/>)
        case 'SETTINGS':
            return (<Settings/>)
        default:
            return (<Home/>)
    }
}

export const MenuListItems = (list) => {

    const navigate = useNavigate();

    const navigation = (path) => {
        navigate(path);
    }

    return(
        <>
            <List>
                { list.map(({ text, path, icon }, index) => {
                    (
                        <ListItem key={index} button onClick={ () => navigation(path) }>
                            <ListItemIcon>
                                { getIcon(icon) }
                            </ListItemIcon>
                            <ListItemText primary={text}></ListItemText>
                        </ListItem>
                    )
                }) }
            </List>
        </>
    )
}