'use client';

import React, { useState, ReactNode, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PasswordAuthProps {
  children: ReactNode;
  expiryHours?: number;
}

interface AuthState {
  isAuthenticated: boolean;
  expiresAt: number;
}

const PasswordAuth: React.FC<PasswordAuthProps> = ({ children, expiryHours = 24 }) => {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = () => {
    const authData = localStorage.getItem('authState');
    if (authData) {
      const { isAuthenticated, expiresAt }: AuthState = JSON.parse(authData);
      if (isAuthenticated && expiresAt > Date.now()) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('authState');
        setIsAuthenticated(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'Test@1234') {
      const expiresAt = Date.now() + (expiryHours * 60 * 60 * 1000);
      const authState: AuthState = {
        isAuthenticated: true,
        expiresAt
      };
      localStorage.setItem('authState', JSON.stringify(authState));
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Authentication Required</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full"
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordAuth;