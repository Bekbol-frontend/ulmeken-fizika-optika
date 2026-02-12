import { Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { appRoutes } from "@/shared/config/routeConfig";
import { MaruzaPageAsync } from "@/pages/MaruzaPage";
import { LekciyaPageAsync } from "@/pages/LekciyaPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={appRoutes.home} element={<HomePageAsync />} />
        <Route path={appRoutes.maruza} element={<MaruzaPageAsync />} />
        <Route path={appRoutes.lekciya} element={<LekciyaPageAsync />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
