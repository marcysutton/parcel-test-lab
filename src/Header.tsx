const HeaderComponent = () => {
    const targetSelector = '#main-content';
    return (
        <header role="banner">
            <a href={targetSelector}>
                Skip to Main Content
            </a>
        </header>
    )
}

export default HeaderComponent;
