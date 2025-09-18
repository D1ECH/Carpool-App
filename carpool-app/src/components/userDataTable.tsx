import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const users = [
  { name: "Juan", car: "Toyota", expense: "$120" },
  { name: "Maria", car: "Honda", expense: "$90" },
  { name: "Pedro", car: "Ford", expense: "$150" },
]

export function UserDataTable() {
  return (
    <div className="overflow-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Car</TableHead>
            <TableHead>Expense</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.car}</TableCell>
              <TableCell>{user.expense}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
