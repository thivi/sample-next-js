"use client";

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Box, Tab, Tabs } from '../../(components)/oxygen';

interface LinkTabProps {
  label?: string;
    name: string;
    id: string;
}

const appTabs = [ {
    displayName: "General",
    name: "general"
}, {
    displayName: "Protocol",
    name: "protocol"
}, {
    displayName: "Info",
    name: "info"
    } ];

function LinkTab(props: LinkTabProps) {
    const router = useRouter();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          router.push(`applications/${props.id}/${props.name}`);
      }}
      {...props}
    />
  );
}

export default function NavTabs(props: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
              { appTabs.map((tab, index) => {
                  return <LinkTab label={ tab.displayName } name={ tab.name } key={ index } id={ props.id } />
               } )}
      </Tabs>
    </Box>
  );
}
