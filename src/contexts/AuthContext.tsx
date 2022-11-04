import { createContext, ReactNode, useState } from 'react'
import { IAccount, IUser } from '../interfaces/IAccount'

interface AuthContextType {
  user: IUser[]
  setUser: (user: IUser[]) => void
  account: IAccount
  signin: (email: string, password: string) => string | undefined
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser[]>([])
  const [account, setAccount] = useState<IAccount>({} as IAccount)

  const signin = (email: string, password: string) => {
    const hasUser = user?.filter((user) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('user_token', JSON.stringify({ email, token }))
        setAccount({ email, password })
      }

      if (hasUser[0].email === email || hasUser[0].password === password) {
        return 'E-mail ou senha incorretos'
      }
    } else {
      return 'Usuário não cadastrado'
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, account, signin }}>
      {children}
    </AuthContext.Provider>
  )
}
