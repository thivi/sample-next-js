import { ReactElement } from "react";
import { Typography } from "../../../(components)/oxygen";

const ApplicationPageTab = (props: any): ReactElement => {
    if (props.params.tab === "info") {
        throw Error("Error fetching info");
    }
    return <Typography variant="h6">{ props.params.tab }</Typography>;
};

export default ApplicationPageTab;
