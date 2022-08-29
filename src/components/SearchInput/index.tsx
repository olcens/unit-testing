import { ChangeEvent, FC } from 'react';
import { FormControl, TextField, InputAdornment, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchInputProps {
  filterText: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({ filterText, handleChange, handleClear }) => {
  return (
    <FormControl sx={{ mr: 2 }}>
      <StyledTextField
        size="small"
        value={filterText}
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          style: {
            color: 'white',
            outline: '2px solid white'
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: filterText ? 'flex' : 'none', cursor: 'pointer' }}
              onClick={handleClear}
            >
              <ClearIcon />
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  );
};

const StyledTextField = styled(TextField)(() => ({
  width: '300px',
  '.MuiInputAdornment-root': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': {
      border: 'none'
    }
  }
}));
