"use client";

import { ReactElement } from "react";
import { Alert, Button } from "../../../(components)/oxygen";

const Error = (props: {error: Error, reset: ()=>void}): ReactElement => {
    return (
        <Alert severity="error" action={
          <Button color="inherit" size="small" onClick={()=>props.reset}>
            Retry
          </Button>
        }>
            { props.error.message }
        </Alert>
    )
}

export default Error;
