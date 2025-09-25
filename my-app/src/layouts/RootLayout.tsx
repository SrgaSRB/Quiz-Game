import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function RootLayout() {
    return (
        <div className="body">
            <section className="main-section">

                <Navbar />
                
                <section className="main-windows-section">
                    <Outlet />
                </section>

            </section>
        </div>
    );
}
