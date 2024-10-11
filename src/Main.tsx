const MainComponent = () => {

    return (
        <main id="main-content" tabIndex={-1} onFocus={() => console.log('focused!')}>
            <h1>Main Content area</h1>
            <button>First focusable</button>
            <p>Other content with a <a href="#">Link</a> in it</p>
        </main>
    )
}

export default MainComponent;