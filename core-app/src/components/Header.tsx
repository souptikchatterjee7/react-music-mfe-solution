import React from "react";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
    const { role, loginAs } = useAuth();

    return (
        <header
            style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
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
