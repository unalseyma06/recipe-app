import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import customTheme from "./components/globalStyles/theme";



function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}
export default App;
