"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      const authTime = localStorage.getItem("authTime")

      if (authStatus === "true" && authTime) {
        // Verifica se a sessão não expirou (24 horas)
        const sessionDuration = 24 * 60 * 60 * 1000 // 24 horas em ms
        const isSessionValid = Date.now() - Number.parseInt(authTime) < sessionDuration

        if (isSessionValid) {
          setIsAuthenticated(true)
        } else {
          // Sessão expirada
          localStorage.removeItem("isAuthenticated")
          localStorage.removeItem("authTime")
          setIsAuthenticated(false)
        }
      } else {
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
            <span className="text-gray-600">Verificando autenticação...</span>
          </div>
        </div>
      </div>
    )
  }

  // Not authenticated
  if (isAuthenticated === false) {
    return null // Redirect will happen in useEffect
  }

  // Authenticated - show content
  return <>{children}</>
}
