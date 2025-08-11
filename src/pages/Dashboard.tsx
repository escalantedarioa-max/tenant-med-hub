import { Building2, Users, User, Calendar, TrendingUp, Activity } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Bienvenido, Administrador
        </h1>
        <p className="text-muted-foreground">
          Panel de control del sistema de gestión médica multi-inquilino
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Clientes Activos"
          value="12"
          change={{ value: 8.2, type: "increase" }}
          icon={Building2}
          color="primary"
        />
        <MetricCard
          title="Total Usuarios"
          value="1,234"
          change={{ value: 15.3, type: "increase" }}
          icon={Users}
          color="success"
        />
        <MetricCard
          title="Doctores Registrados"
          value="89"
          change={{ value: 5.7, type: "increase" }}
          icon={User}
          color="info"
        />
        <MetricCard
          title="Citas Hoy"
          value="247"
          change={{ value: 2.1, type: "decrease" }}
          icon={Calendar}
          color="warning"
        />
      </div>

      {/* Recent Activity & Top Clients */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Actividad Reciente</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                action: "Nuevo cliente registrado",
                client: "Clínica Santa María",
                time: "Hace 5 minutos",
                type: "success"
              },
              {
                action: "Doctor agregado",
                client: "Hospital Central",
                time: "Hace 15 minutos",
                type: "info"
              },
              {
                action: "Cita cancelada",
                client: "Centro Médico Norte",
                time: "Hace 1 hora",
                type: "warning"
              },
              {
                action: "Usuario desactivado",
                client: "Clínica Los Andes",
                time: "Hace 2 horas",
                type: "destructive"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.client}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <Badge 
                    variant={activity.type as any}
                    className="text-xs"
                  >
                    {activity.type}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Clients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Clientes Principales</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Hospital San José",
                users: 156,
                doctors: 28,
                status: "Activo",
                growth: 12.5
              },
              {
                name: "Clínica Central",
                users: 134,
                doctors: 22,
                status: "Activo",
                growth: 8.3
              },
              {
                name: "Centro Médico Norte",
                users: 98,
                doctors: 18,
                status: "Activo",
                growth: 5.1
              },
              {
                name: "Clínica Los Andes",
                users: 87,
                doctors: 15,
                status: "Pendiente",
                growth: -2.1
              }
            ].map((client, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {client.name}
                  </p>
                  <div className="flex space-x-3 text-xs text-muted-foreground">
                    <span>{client.users} usuarios</span>
                    <span>{client.doctors} doctores</span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <Badge 
                    variant={client.status === "Activo" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {client.status}
                  </Badge>
                  <p className={`text-xs font-medium ${
                    client.growth > 0 ? "text-success" : "text-destructive"
                  }`}>
                    {client.growth > 0 ? "+" : ""}{client.growth}%
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>Estado del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tiempo de actividad</span>
                <Badge variant="default" className="bg-success text-success-foreground">
                  99.9%
                </Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{width: "99.9%"}}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Uso de CPU</span>
                <Badge variant="secondary">45%</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-info h-2 rounded-full" style={{width: "45%"}}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Memoria</span>
                <Badge variant="secondary">67%</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{width: "67%"}}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}