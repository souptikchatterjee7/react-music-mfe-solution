import React from "react";

interface FiltersProps {
    onFilter: (key: string, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
    return (
        <div>
            <h3>Filters</h3>
            <input
                placeholder="Filter by Title"
                onChange={(e) => onFilter("title", e.target.value)}
            />
            <input
                placeholder="Filter by Artist"
                onChange={(e) => onFilter("artist", e.target.value)}
            />
            <input
                placeholder="Filter by Album"
                onChange={(e) => onFilter("album", e.target.value)}
            />
        </div>
    );
};

export default Filters;
