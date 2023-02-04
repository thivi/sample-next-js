"use client";

import { useRouter } from "next/navigation";
import { ReactElement } from "react";
import { DataGrid } from "../(components)/data";

export const Data = (props: any): ReactElement => {
    const { columns, rows } = props;

    const router = useRouter();

    return (
        <DataGrid columns={ columns } rows={ rows } pageSize={ 5 } rowsPerPageOptions={ [ 5 ] } onCellClick={ (data) => {
            router.push(`connections/${ data.id }`);
        } } />
    )
}
