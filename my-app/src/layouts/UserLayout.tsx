import { Outlet } from "react-router-dom";

export default function UserLayout() {

    return (
        <section>
            <h2>User sekcija</h2>
            <Outlet />
        </section>
    );
}
