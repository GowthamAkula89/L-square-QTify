import Carousel from "../Carousel";
import React, {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./filterSection.css";
const FilterSection = ({title,data,filters,executeFilters}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        executeFilters(filters[newValue].key)
    };
    return (
        <div className="filter-section">
            <div className="filter-sub-section">
                <h1 className="filter-section-heading">{title}</h1>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    TabIndicatorProps={{
                        style: { backgroundColor: "var(--color-primary)" }
                    }}
                >
                    {filters.map((type, index) =>
                        <Tab className="tab" key={type.key} label={type.label} />
                    )}
                </Tabs>
            </div>
            <Carousel data={data} title={"songs"} />
        </div>
    );
};
export default FilterSection;