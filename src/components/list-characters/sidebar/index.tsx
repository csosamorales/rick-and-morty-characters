import Box from "@mui/material/Box";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  genderFilterSelector,
  nameCharacterFilterSelector,
  showMenuSelector,
  statusFilterSelector,
} from "store/selectors";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.scss";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  setGenderFilter,
  setNameCharacterFilter,
  setPage,
  setStatusFilter,
} from "store/actions";

const states = ["Alive", "Dead", "Unknown"];

const gender = ["Female", "Male", "Genderless", "Unknown"];

const Sidebar = () => {
  const dispatch = useDispatch();
  const showMenu: boolean = useSelector(showMenuSelector);
  const nameFilter: string = useSelector(nameCharacterFilterSelector);
  const statusFilter: string = useSelector(statusFilterSelector);
  const genderFilter: string = useSelector(genderFilterSelector);

  const handleStatusSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setStatusFilter(event.target.value));
    dispatch(setPage(1));
  };

  const handleGenderSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setGenderFilter(event.target.value));
    dispatch(setPage(1));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameCharacterFilter(event.target.value));
    dispatch(setPage(1));
  };

  return (
    <Box
      sx={{
        display: { xs: showMenu ? "inline" : "none", md: "initial" },
      }}
    >
      <div className="sidenav">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              padding: "5px",
              marginBottom: "15px",
            }}
          >
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="filter-by-name"
              label="Filter by name"
              size="small"
              variant="standard"
              value={nameFilter}
              onChange={handleNameChange}
            />
          </Box>
          <div style={{ marginBottom: "15px", width: "100%" }}>
            <TextField
              id="status-filter-select"
              select
              label="Status"
              value={statusFilter}
              sx={{ width: "100%" }}
              onChange={handleStatusSelectChange}
            >
              <MenuItem key="state-none" value="">
                <em>None</em>
              </MenuItem>
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <TextField
            id="gender-filter-select"
            select
            label="Gender"
            value={genderFilter}
            onChange={handleGenderSelectChange}
          >
            <MenuItem key="gender-none" value="">
              <em>None</em>
            </MenuItem>
            {gender.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </div>
    </Box>
  );
};

export default Sidebar;
