import { redirect, useRouter } from "next/navigation";
import { ReactElement } from "react";

const ApplicationEditPage = (props: any): ReactElement => {
    if (!props.params.tab) {
        redirect("/connections/" + props.params.id + "/general");
    }
    return <></>;
};

export default ApplicationEditPage;
