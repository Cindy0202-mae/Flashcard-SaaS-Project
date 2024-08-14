import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignUpPage(){
    return <Container maxWidth="sm">
        <AppBar position="static" sx={{backgroundColor: "3f51b5"}}>
            <Toolbar>
                <Typography 
                    variant="h6"
                    sx={{
                    flexGrow: 1,
                    }}
                >
                    Flashcard SaaS
                </Typography>
                <Button color="Inherit">
                    <Link href="/login" passHref>
                        Login
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    </Container>
}