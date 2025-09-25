import { Outlet } from "react-router-dom";

export default function AdminLayout() {

    return (
        <section>
            <h2>Admin sekcija</h2>
            <Outlet />
        </section>
    );
}
