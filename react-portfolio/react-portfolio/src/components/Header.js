function Header({ currentPage, setCurrentPage }) {
    const pages = ['about', 'portfolio', 'contact', 'resume'];

    const getHeader = (page) => {
        switch (page) {
            case 'about':
                return 'About Me';
            case 'portfolio':
                return 'Portfolio';
            case 'contact':
                return 'Contact Me';
            case 'resume':
                return 'Resume';
            default:
                return 'About me';
        }
    };

    return (
        <header className='text-center'>
            <h1>Andrew's Portfolio</h1>
            <nav>
                <ul className='d-flex flex-wrap justify-content-around'>
                    {pages.map((page) => {
                        return (
                            <li key={page} className="btn listStyleNone" onClick={() => setCurrentPage(page)}>
                                <h2>
                                    <a className={currentPage === page ? 'active' : ''}>{getHeader(page)}</a>
                                </h2>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </header>
    )
}