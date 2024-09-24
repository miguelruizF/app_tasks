import { Button } from "@mui/material"
import { Copyright } from "../../components/pure/Copyright"
import { useNavigate } from "react-router-dom"


export const Dashboard = () => {

    const navigate = useNavigate();

    const logout = (path) => {
        navigate(path);
    }

    return (
        <>
            <Button variant="contained" onClick={ () => logout('/login') }>Logout</Button>
            <Copyright/>
        </>
    )
}
