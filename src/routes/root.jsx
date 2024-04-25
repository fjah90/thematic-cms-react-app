export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <a href={`/`}>Home</a>
                        </li>
                        <li>
                            <a href={`/login`}>Login</a>
                        </li>
                        <li>
                            <a href={`/register`}>Register</a>
                        </li>
                        <li>
                            <a href={`/logout`}>Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}