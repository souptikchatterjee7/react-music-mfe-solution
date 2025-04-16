import React, { Suspense } from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";

const MusicLibraryApp = React.lazy(
    () => import("MusicLibrary/MusicLibraryApp")
);

export default function App() {
    return (
        <AuthProvider>
            <Header />
            <Suspense fallback={<p>Loading Music Library Microfrontend...</p>}>
                <MusicLibraryApp />
            </Suspense>
        </AuthProvider>
    );
}
