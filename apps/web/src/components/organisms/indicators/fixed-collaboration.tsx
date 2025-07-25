"use client"
import React from 'react'
import { Users } from 'lucide-react'
import { usePresence } from '@/src/hooks/usePresence'

export const FixedCollaboration = () => {
  const { count } = usePresence();
  return (
    <div className="fixed top-4 right-4 z-50 transform translate-y-12 bg-background border-2 border-black shadow-[2px_2px_0px_black] p-3">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 bg-purple-600 border border-black rounded-none"></div>
          <div className="w-6 h-6 bg-gray-800 border border-black rounded-none"></div>
          <div className="w-6 h-6 bg-gray-600 border border-black rounded-none"></div>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span className="text-xs font-bold">{count > 0 ? `+${count} online` : 'No users online'}</span>
        </div>
      </div>
    </div>
  )
}
