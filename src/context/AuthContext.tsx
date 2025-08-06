import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'photographer' | 'client';
  avatar?: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Mock authentication functions
  const login = async (email: string, password: string) => {
    // Simulate API request
    setIsLoading(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email === 'admin@studio.com' && password === 'password') {
          const user = {
            id: '1',
            name: 'Admin User',
            email: 'admin@studio.com',
            role: 'admin' as const,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          };
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          setIsLoading(false);
          resolve();
        } else if (email === 'photographer@studio.com' && password === 'password') {
          const user = {
            id: '2',
            name: 'Photographer User',
            email: 'photographer@studio.com',
            role: 'photographer' as const,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          };
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          setIsLoading(false);
          resolve();
        } else if (email === 'client@example.com' && password === 'password') {
          const user = {
            id: '3',
            name: 'Client User',
            email: 'client@example.com',
            role: 'client' as const,
            avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          };
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          setIsLoading(false);
          resolve();
        } else {
          setIsLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };
  const register = async (name: string, email: string, password: string, role: string) => {
    setIsLoading(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock registration
        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          name,
          email,
          role: role as 'admin' | 'photographer' | 'client',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);
  return <AuthContext.Provider value={{
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isLoading
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};