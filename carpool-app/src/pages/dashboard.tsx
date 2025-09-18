// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { signOut } from "../lib/auth"


// export default function Dashboard() {
//   return (
//     <div className="w-scree h-full p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       <Card>
//         <CardHeader>
//           <CardTitle>📅 Próximos turnos</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Aquí listaremos los turnos de coche...</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>💰 Balance de gastos</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Aquí mostraremos el equilibrio de gastos...</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>📊 Historial</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Aquí el historial de viajes...</p>
//         </CardContent>
//       </Card>

//       <button
//         onClick={signOut}
//         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//       >
//         Cerrar sesión
//       </button>
//     </div>
//   )
// }


import { UserDataTable } from "@/components/userDataTable"
// import { UpcomingShifts } from "@/components/upcomingShifts"
// import { ExpensesSummary } from "@/components/expensesSummary"
// import { History } from "@/components/history"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { signOut } from "../lib/auth"

export default function Dashboard() {
  return (
    <div className="flex w-full h-full gap-4 p-4">
      {/* Columna izquierda */}
      <div className="w-1/3 flex flex-col gap-4">
        <UserDataTable />
      </div>

      {/* Columna derecha */}
      <div className="w-2/3 flex flex-col gap-4">
        {/* <UpcomingShifts />
        <ExpensesSummary />
        <History /> */}
        <Card>
//         <CardHeader>
//           <CardTitle>📅 Próximos turnos</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Aquí listaremos los turnos de coche...</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>💰 Balance de gastos</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Aquí mostraremos el equilibrio de gastos...</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>📊 Historial</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Aquí el historial de viajes...</p>
//         </CardContent>
//       </Card>

        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>

      </div>
    </div>
  )
}
