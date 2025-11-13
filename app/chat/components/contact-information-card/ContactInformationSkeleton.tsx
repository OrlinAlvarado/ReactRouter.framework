export function ContactInformationSkeleton() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-muted animate-pulse flex items-center justify-center text-xl mb-3" />
        <div className="h-6 w-32 rounded bg-muted animate-pulse mb-2" />
        <div className="h-4 w-24 rounded bg-muted animate-pulse" />
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-muted animate-pulse mr-1" />
          <div className="h-3 w-12 rounded bg-muted animate-pulse" />
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <div className="h-5 w-36 rounded bg-muted animate-pulse mb-2" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="flex justify-between items-center text-sm" key={i}>
                <div className="h-4 w-20 rounded bg-muted animate-pulse" />
                <div className="h-4 w-24 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="h-5 w-32 rounded bg-muted animate-pulse mb-2" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="flex justify-between items-center text-sm" key={i}>
                <div className="h-4 w-20 rounded bg-muted animate-pulse" />
                <div className="h-4 w-16 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="h-9 w-full rounded-md bg-muted animate-pulse" />
      </div>
    </div>
  )
}
