import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
