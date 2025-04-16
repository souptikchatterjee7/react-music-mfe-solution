import React from "react";
import { Song } from "../types/Song";

interface SongListProps {
    songs: Song[];
    onDelete: (id: string) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onDelete }) => {
    return (
        <div>
            <h3>Song List</h3>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.title} - {song.artist} ({song.album})
                        <button onClick={() => onDelete(song.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
