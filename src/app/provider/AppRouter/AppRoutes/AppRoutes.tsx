import { Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { appRoutes } from "@/shared/config/routeConfig";
import { MaruzaPageAsync } from "@/pages/MaruzaPage";
import { LekciyaPageAsync } from "@/pages/LekciyaPage";
import { MaruzaTestPageAsync } from "@/pages/MaruzaTestPage";
import { AmaliyPageAsync } from "@/pages/AmaliyPage";
import { AmaliyMavzuPageAsync } from "@/pages/AmaliyMavzuPage";
import { AmaliyTestPageAsync } from "@/pages/AmaliyTestPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={appRoutes.home} element={<HomePageAsync />} />
        <Route path={appRoutes.maruza} element={<MaruzaPageAsync />} />
        <Route path={appRoutes.maruzaTest} element={<MaruzaTestPageAsync />} />
        <Route path={appRoutes.lekciya} element={<LekciyaPageAsync />} />
        <Route path={appRoutes.amaliy} element={<AmaliyPageAsync />} />
        <Route
          path={appRoutes.amaliyMavzu}
          element={<AmaliyMavzuPageAsync />}
        />
        <Route path={appRoutes.amaliyTest} element={<AmaliyTestPageAsync />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
