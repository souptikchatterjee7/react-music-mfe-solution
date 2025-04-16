import React from "react";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
    const { role, loginAs } = useAuth();

    return (
        <header>
            <h2 style={{ margin: 0 }}>🎶 React MFE Shell</h2>
            <div>
                <span style={{ marginRight: "10px" }}>
                    <strong>Role:</strong> {role}
                </span>
                <button onClick={() => loginAs("admin")}>Admin</button>
                <button
                    onClick={() => loginAs("user")}
                    style={{ marginLeft: "5px" }}>
                    User
                </button>
            </div>
        </header>
    );
};

export default Header;
