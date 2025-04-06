"use client"

import { useState } from "react"
import { ArrowRight, BookOpen } from "lucide-react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/userslice"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      const { user, token } = res.data
      localStorage.setItem("token", token)
      dispatch(setUser({ user, token }))
      setMessage("Login successful")
      setIsSuccess(true)
      navigate("/")
    } catch (error) {
      setMessage(error.response?.data?.mes || "An error occurred")
      setIsSuccess(false)
    }
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-600">Biblio Tech</h3>
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="signup" className="font-medium text-blue-600 hover:text-blue-500">
            Create a free account
          </a>
        </p>
        {message && (
          <Alert className={`mt-4 ${isSuccess ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}

export default SignIn

