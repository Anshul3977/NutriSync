// Button.jsx
import { Button as MUIButton } from '@mui/material';

function Button({ children, onClick }) {
  return (
    <MUIButton variant="contained" color="primary" onClick={onClick}>
      {children}
    </MUIButton>
  );
}

export default Button;
