import { createMuiTheme } from '@material-ui/core/styles';

const thems = createMuiTheme({
  color: {
    primary: '#00796B',
    secondary: '#448AFF',
    error: '#757575',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#FFCDD2',
    textColor: '#ffffff',
    border: '#cccccc',
  },
});
export default thems;
