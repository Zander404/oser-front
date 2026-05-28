"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "components/ui/sidebar"
import Image from "next/image"
import logoImg from "@/public/next.svg"
import { BadgeDollarSignIcon, Box, Group, Hammer, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const pathname = usePathname()

  const list_pages = [
    { label: "Home", path: "/", icon: Home },
    { label: "Financeiro", path: "/finance", icon: BadgeDollarSignIcon },
    { label: "Servicos", path: "/service", icon: Hammer },
    { label: "Estoque", path: "/stock", icon: Box },
    { label: "Funcionario", path: "/worker", icon: Group }

  ]

  return (
    <Sidebar {...props}>

      <SidebarHeader className={"text-lg font-bold"}>
        <Image className={"w-full"} src={logoImg} width={0} alt="logo" />
        <label className="text-center">MVP</label>
      </SidebarHeader>


      <SidebarContent>
        <SidebarGroup>

          <SidebarMenu className="gap-2">
            {list_pages.map((page) => {
              const isCurrentPage = pathname === page.path;
              const Icon = page.icon;

              return (
                <SidebarMenuItem key={page.path}>
                  <SidebarMenuButton asChild isActive={isCurrentPage} className={`w-full px-4 rounded-2xl transition-all font-medium text-sm ${isCurrentPage ? "text-zinc-900" : "text-gray-500"}`}>
                    <Link className={"text-lg font-bold"} href={page.path}>
                      <Icon className={`w-[18px] h-[18px] ${isCurrentPage ? "text-zinc-900" : "text-gray-500"} `} />
                      <label className="text-xl font-medium">{page.label}</label>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })
            }
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter>
      </SidebarFooter>
    </Sidebar >

  )

}
