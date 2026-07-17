import './sidebar.css';
import { NavLink } from "react-router-dom";

export const Sidebar = () => {

    const getStyles = ({ isActive }) => {
        const style = "flex flex-row p-10 m-10 text-decor-none";

        return isActive ? `${style} bg-effect` : `${style} navlink-color bg-effect-hover`
    }

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    }

    return (
        <>
            <aside className="sidebar flex flex-col p-top-30 border-right-10 width-180px height-100vh">
                <NavLink to="/" className={getStyles}>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    <span><h3>Home</h3></span>
                </NavLink>
                <NavLink to="/important" className={getStyles}>
                    <span className="material-symbols-outlined">
                        push_pin
                    </span>
                    <span><h3>Important</h3></span>
                </NavLink>
                <NavLink to="/archive" className={getStyles}>
                    <span className="material-symbols-outlined">
                        archive
                    </span>
                    <span><h3>Archive</h3></span>
                </NavLink>
                <NavLink to="/bin" className={getStyles}>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                    <span><h3>Bin</h3></span>
                </NavLink>
            </aside>
            <button className="hamburger" onClick={toggleSidebar}>☰</button>
        </>
    )
}