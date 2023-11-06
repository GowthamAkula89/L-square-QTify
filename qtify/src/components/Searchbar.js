import { TextField,Box } from "@mui/material";
import React from "react";
const SearchBar=()=>{
    return(
        <Box>
            <TextField
            size="large"
            placeholder="Search a song of your choice"
            fullWidth
        />
        </Box>
        
    )
}
export default SearchBar;