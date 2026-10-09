class SiteNav extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `
            <nav class="site-nav">

                <div class="nav-container">

                    <a href="index.html" class="logo">
                        StorageVault
                    </a>

                    <div class="nav-links">

                        <a href="table.html">Table</a>
                        <a href="calendar.html">Calendar</a>

                    </div>

                </div>

            </nav>

            <style>

                .site-nav {
                    width: 100%;
                    height: 64px;

                    background: white;

                    border-bottom: 1px solid #ddd;

                    box-shadow:
                        0 2px 8px rgba(0,0,0,0.08);
                }

                .nav-container {
                    max-width: 1200px;
                    height: 100%;

                    margin: 0 auto;

                    padding: 0 20px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .logo {
                    color: #111827;

                    text-decoration: none;

                    font-size: 21px;
                    font-weight: bold;
                }

                .nav-links {
                    display: flex;
                    gap: 8px;
                }

                .nav-links a {
                    color: #4b5563;

                    text-decoration: none;

                    padding: 9px 13px;

                    border-radius: 6px;

                    font-size: 15px;
                }

                .nav-links a:hover {
                    background: #f3f4f6;
                }

                .nav-links a.active {
                    background: #2563eb;
                    color: white;
                }

                @media (max-width: 700px) {

                    .nav-container {
                        padding: 0 12px;
                    }

                    .nav-links {
                        gap: 2px;
                    }

                    .nav-links a {
                        padding: 7px;
                        font-size: 12px;
                    }

                    .logo {
                        font-size: 16px;
                    }

                }

            </style>
        `;


        /* Highlight current page */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase() || "index.html";


        this.querySelectorAll(".nav-links a")
            .forEach(link => {

                const linkPage =
                    link
                        .getAttribute("href")
                        .split("/")
                        .pop()
                        .toLowerCase();


                if (linkPage === currentPage) {

                    link.classList.add("active");

                }

            });

    }

}


/*
 * Register the component
 */

customElements.define("site-navigation", SiteNav);
