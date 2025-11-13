import { UserCircle } from "lucide-react"

export const NoContactSelected = () => {
  return (
    

    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
      <UserCircle className="mx-auto mb-4 text-muted-foreground" size={48} />
      <p className="text-lg font-medium">
        No contact selected
      </p>
      <p className="text-muted-foreground text-sm mt-2">
        Select a contact to display info for it.
      </p>
    </div>
  )
}
