import ReactDOM from 'react-dom/client'
import './main.css'
import {Suspense} from "react";
import Router from "./router/index.jsx";
import i18n from "./services/i18n";
import OverlayLoader from "./components/OverlayLoader.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<OverlayLoader />}>
        <Router />
    </Suspense>
)
