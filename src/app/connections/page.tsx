import { ReactElement } from "react";
import { Box, Typography } from "../(components)/oxygen";
import { Data } from "./data";

const connections = [
    {
        name: "Workday",
        id: "workday"
    },
    {
        name: "Salesforce",
        id: "salesforce"
    },
    {
        name: "Okta",
        id: "okta"
    },
    {
        name: "Google",
        id: "google"
    },
    {
        name: "Facebook",
        id: "facebook"
    },
]

const columns= [ {
    field: "id",
    headerName: "ID",
    width: 150,
    editable: false
},
    {
        field: "name",
        headerName: "Name",
        width: 150,
        editable: false
    } ];

const Page = (): ReactElement => {
    return (
        <div>
            <Typography variant="h4">Connections</Typography>
            <Box sx={{ height: 400, width: '100%' }}>
            <Data rows={connections} columns={columns}/>
    </Box>

        </div>
    )
};

export default Page;
