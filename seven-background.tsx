"use client"

export function SevenBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large 7 in the background */}
      <div className="absolute -right-[10%] top-[5%] text-[800px] font-bold opacity-[0.03] dark:opacity-[0.05] transform -rotate-12 select-none">
        7
      </div>
      {/* Smaller 7s for additional depth */}
      <div className="absolute left-[5%] top-[40%] text-[400px] font-bold opacity-[0.02] dark:opacity-[0.04] transform rotate-12 select-none">
        7
      </div>
      <div className="absolute right-[15%] bottom-[10%] text-[300px] font-bold opacity-[0.02] dark:opacity-[0.04] transform -rotate-45 select-none">
        7
      </div>
    </div>
  )
}

