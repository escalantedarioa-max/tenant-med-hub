import { useState } from "react";
import { Bell, Search, Menu, Building2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AdminHeaderProps {
  collapsed: boolean;
  onToggleSidebar: () => void;
}

// Mock tenant data
const tenants = [
  { id: "1", name: "Clínica Central", status: "active" },
  { id: "2", name: "Hospital San José", status: "active" },
  { id: "3", name: "Centro Médico Norte", status: "inactive" },
];

export default function AdminHeader({ collapsed, onToggleSidebar }: AdminHeaderProps) {
  const [selectedTenant, setSelectedTenant] = useState(tenants[0]);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden h-8 w-8"
        onClick={onToggleSidebar}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Breadcrumb / Title */}
      <div className={cn("flex items-center space-x-2", collapsed ? "ml-0" : "ml-64")}>
        <h1 className="text-lg font-semibold text-foreground">Panel de Administración</h1>
      </div>

      {/* Center - Search */}
      <div className="flex-1 flex justify-center max-w-md mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar clientes, usuarios, doctores..."
            className="w-full pl-9 bg-muted/50 border-muted focus:bg-background"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Tenant Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 px-3">
              <Building2 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline-block">{selectedTenant.name}</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Seleccionar Cliente</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {tenants.map((tenant) => (
              <DropdownMenuItem
                key={tenant.id}
                onClick={() => setSelectedTenant(tenant)}
                className="flex items-center justify-between"
              >
                <span>{tenant.name}</span>
                <Badge
                  variant={tenant.status === "active" ? "default" : "secondary"}
                  className="ml-2"
                >
                  {tenant.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Building2 className="h-4 w-4 mr-2" />
              Ver Todos los Clientes
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative h-9 w-9">
          <Bell className="h-4 w-4" />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
          >
            3
          </Badge>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 w-9 rounded-full">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">A</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}