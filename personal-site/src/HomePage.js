import { Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

function HomePage() {
    const theme = useTheme()
    return <>
        <Container maxWidth="md" sx={{
            marginTop: "10px",
            padding: "10px",
        }}>
            <Paper sx={{
                margin: "10px",
                padding: "10px",
            }}>
                <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold" }}>Bob Ambrose</Typography>
                <Divider sx={{
                    margin: "10px",
                }} />
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "5px" }}>About</Typography>
                <Typography variant="body1">
                    I'm a senior software engineer who loves to think about people. I strive on building APIs and infrastructure that will scale, not just technically, but also in how it's used by fellow engineers. <b>Currently I'm on a "personal sabbatical" after resigning from Facebook.</b>
                    <br /><br />
                    I'm interested in making a positive difference in the world through technology while also having fun and not committing my entire self to work. If that sounds like you, please reach out to me at bambrose24 at gmail.
                </Typography>
                <Divider sx={{marginTop: "20px", marginBottom: "20px"}} />
                <Typography variant="body1">
                    Ok, phew, glad that's over. I generally loathe the hustle-y nature of personal websites. Unfortunately they are great at being a one-stop-shop for your professional background.
                </Typography>
                <Divider sx={{marginTop: "20px", marginBottom: "20px"}} />
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "5px" }}>Links</Typography>
                <Typography variant="body1">
                    <ul>
                        <li><a href="https://github.com/bambrose24">Github</a></li>
                        <li><a href="https://linkedin.com/in/ambroserobert">LinkedIn</a></li>
                        <li><a href="https://play-funtime.com">Funtime</a> (a NFL pickem pool built and designed by me)</li>
                    </ul>
                </Typography>
            </Paper>
        </Container>
    </>
}

export default HomePage