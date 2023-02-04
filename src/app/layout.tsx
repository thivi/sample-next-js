import { Toolbar, AppBar, Grid, Typography, Box } from "./(components)/oxygen";
import { SidePanel } from "./(components)/sidepanel";
//const Header = (await import("header/header")).default;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body style={{ margin: 0 }}>
                <Box>
                     <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Asgardeo
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={{height:35}}></div>

                    <Box>
                        <Grid container spacing={2}>
                            <Grid xs={2}><SidePanel /></Grid>
                            <Grid xs={10}>{children}</Grid>
                        </Grid>
                    </Box>
                </Box>
            </body>
        </html>
    );
}
