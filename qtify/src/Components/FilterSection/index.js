import Carousel from "../Carousel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./filterSection.css";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

const FilterSection = () => {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [filteredSongs, setFilteredSongs] = useState([]);
    console.log(songs);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [songsResponse, genresResponse] = await Promise.all([
                    axios.get(`${ENDPOINT}/songs`),
                    axios.get(`${ENDPOINT}/genres`)
                ]);
                setSongs(songsResponse.data);
                setFilteredSongs(songsResponse.data);
                setGenres([{ "key": "all", "label": "All" }, ...genresResponse.data.data]);
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        if (genres[newValue].key === "all") {
            setFilteredSongs(songs);
        } else {
            const filteredData = songs.filter(song => song.genre.key === genres[newValue].key);
            setFilteredSongs(filteredData);
        }
    };
    return (
        <div className="filter-section">
            <div className="filter-sub-section">
                <h1 className="filter-section-heading">{"Songs"}</h1>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    TabIndicatorProps={{
                        style: { backgroundColor: "var(--color-primary)" }
                    }}
                >
                    {genres.map((type, index) =>
                        <Tab className="tab" key={type.key} label={type.label} />
                    )}
                </Tabs>
            </div>
            <Carousel data={filteredSongs} title={"songs"} />
        </div>
    );
};
export default FilterSection;