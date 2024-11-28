export function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {children}
    </div>
  )
} 