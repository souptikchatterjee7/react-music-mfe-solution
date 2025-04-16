import React, { useState } from "react";
import { Song } from "../types/Song";

interface AdminControlsProps {
    onAdd: (song: Song) => void;
}

const AdminControls: React.FC<AdminControlsProps> = ({ onAdd }) => {
    const [form, setForm] = useState<Omit<Song, "id">>({
        title: "",
        artist: "",
        album: ""
    });

    const handleAdd = () => {
        const newSong: Song = { id: crypto.randomUUID(), ...form };
        onAdd(newSong);
        setForm({ title: "", artist: "", album: "" });
    };

    return (
        <div>
            <h3>Add Song</h3>
            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
                placeholder="Artist"
                value={form.artist}
                onChange={(e) => setForm({ ...form, artist: e.target.value })}
            />
            <input
                placeholder="Album"
                value={form.album}
                onChange={(e) => setForm({ ...form, album: e.target.value })}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AdminControls;
