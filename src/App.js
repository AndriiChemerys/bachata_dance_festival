import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Artists from "./routes/artists/artists.component";
import Program from "./routes/program/program.component";
import Tickets from "./routes/tickets/tickets.component";
import Venue from "./routes/venue/venue.component";
import Contact from "./routes/contact/contact.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="program" element={<Program />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="venue" element={<Venue />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
