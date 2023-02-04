"use client";

import { useRouter } from "next/navigation";
import React, { ReactElement } from "react";
import { List, ListItem, ListItemButton } from "./oxygen";

const menus = [
    {
        displayName: "Applications",
        name: "applications"
    },
    {
        displayName: "Connections",
        name: "connections"
    },
    {
        displayName: "Branding",
        name: "branding"
    }
];

export const SidePanel = (): ReactElement => {
    const router = useRouter();
    return (
        <List>
            {
                menus.map((menu, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemButton onClick={()=>router.push(menu.name)}>
                                {menu.displayName}
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
            </List>
    );
};
