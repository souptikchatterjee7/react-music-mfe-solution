import React, { createContext, useContext, useState } from "react";

type Role = "admin" | "user";

interface AuthContextType {
    role: Role;
    loginAs: (role: Role) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [role, setRole] = useState<Role>("user");

    return (
        <AuthContext.Provider value={{ role, loginAs: setRole }}>
            <div>
                <button onClick={() => setRole("admin")}>Login as Admin</button>
                <button onClick={() => setRole("user")}>Login as User</button>
                <p>
                    Current Role: <strong>{role}</strong>
                </p>
            </div>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
