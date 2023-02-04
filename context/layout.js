import { useState } from "react";
import Sidebar from "../pages/scenes/global/Sidebar";
import Topbar from "../pages/scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../context/theme";

export default function Layout({ children }) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar setIsSidebar={setIsSidebar} />
        <div className="content">
          <Sidebar isSidebar={isSidebar} />
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
