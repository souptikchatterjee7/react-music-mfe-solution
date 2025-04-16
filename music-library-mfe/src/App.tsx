import React, { useMemo, useState } from "react";
import { Song } from "./types/Song";
import SongList from "./components/SongList";
import Filters from "./components/Filters";
import AdminControls from "./components/AdminControls";

const initialSongs: Song[] = [
    { id: "1", title: "Imagine", artist: "John Lennon", album: "Imagine" },
    {
        id: "2",
        title: "Billie Jean",
        artist: "Michael Jackson",
        album: "Thriller"
    },
    {
        id: "3",
        title: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera"
    }
];

const App: React.FC = () => {
    const [songs, setSongs] = useState<Song[]>(initialSongs);
    const [filters, setFilters] = useState<Partial<Record<keyof Song, string>>>(
        {}
    );

    const handleFilter = (key: string, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleDelete = (id: string) => {
        setSongs((prev) => prev.filter((song) => song.id !== id));
    };

    const handleAdd = (song: Song) => {
        setSongs((prev) => [...prev, song]);
    };

    const filteredSongs = useMemo(() => {
        return songs.filter((song) =>
            Object.entries(filters).every(([key, value]) =>
                song[key as keyof Song]
                    ?.toLowerCase()
                    .includes(value.toLowerCase())
            )
        );
    }, [songs, filters]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>🎧 Music Library</h2>
            <Filters onFilter={handleFilter} />
            <AdminControls onAdd={handleAdd} />
            <SongList songs={filteredSongs} onDelete={handleDelete} />
        </div>
    );
};

export default App;
