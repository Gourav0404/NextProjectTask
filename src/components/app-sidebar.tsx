import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { title } from "process"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Stages & Chacklist",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },

      ],
    },
    {
      title: "Upload Docs",
      url: "/",
      items: [

        {
          title: "",
          url: "/",
          isActive: true,
        },

        {
          title: "",
          url: "/",
        },
      ],
    },
    {
      title: "Preferred Vendors",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },
      ],
    },
    {
      title: "Teck Stack",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },




      ],
    },
    {
      title: "Targets",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },
      ],
    },
    {
      title: "Zee Sales Targets",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },
      ],
    },
    {
      title: "MAI Settings",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },
      ],
    },
    {
      title: "Pending Questions 3",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },
      ],
    },
    {
      title: "LogOut ->",
      url: "/",
      items: [
        {
          title: "",
          url: "/",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((SubItem, index) => (
                  <SidebarMenuItem key={`${item.title}-${index}`}>
                    {/* <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton> */}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
