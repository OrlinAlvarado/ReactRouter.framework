import { MessageSquare } from 'lucide-react'

const NoChatSelectedPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3">
      <span className="mb-2">
        <MessageSquare className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
      </span>
      <h1 className="text-2xl font-bold">No chat selected</h1>
      <p className="text-sm text-muted-foreground">Please select a chat to start messaging.</p>
    </div>
  )
}

export default NoChatSelectedPage
