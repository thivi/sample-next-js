import { ReactElement } from "react";
import { Box, Tabs, Typography } from "../../(components)/oxygen";
import NavTab from "./nav-tab";

const ApplicationLayout = (props: any): ReactElement => {
    return (
        <Box>
            <Typography variant="h4">Edit Connection { props.params.id } </Typography>
            <NavTab id={ props.params.id } />
            { props.children }
        </Box>
    );
};

export default ApplicationLayout;
