import AuthForm from "./components/authForm";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./pages/dashboard";
import AppNavigationMenu from "./components/navigationMenu";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <AuthForm />;

  return (
    <div className="w-screen flex flex-col min-h-screen">
      <header>
        <AppNavigationMenu />
      </header>
      <main className="w-screen flex-1 p-6 bg-gray-500">
        <Dashboard />
      </main>
    </div>
  );
}



// import AuthForm from "./components/authForm"
// import { useAuth } from "./hooks/useAuth"
// import Dashboard from "./app/dashboard"
// import { Sidebar } from "lucide-react"



//  function App() {
//   const { user, loading } = useAuth()

//   if (loading) return <p className="text-center mt-10">Loading...</p>
//   if (!user) return <AuthForm />

//   return (
//       <Sidebar>
//         <Dashboard />
//       </Sidebar>
//   )
// }

// export default App

// import AuthForm from "./components/authForm"
// import { useAuth } from "./hooks/useAuth"
// import Dashboard from "./pages/dashboard" // ojo: mejor en /pages, no en /app
// import { Sidebar } from "@/components/ui/sidebar"
// import { Home, Calendar, DollarSign, History } from "lucide-react"

// export default function App() {
//   const { user, loading } = useAuth()

//   if (loading) return <p className="text-center mt-10">Loading...</p>
//   if (!user) return <AuthForm />

//   return (
//       <div className="w-screen h-screen flex bg-gray-500">
//         {/* Sidebar
//         <Sidebar>
          
//         </Sidebar> */}

//         {/* Contenido principal */}
//         <Dashboard />

//       </div>
//   )
// }
