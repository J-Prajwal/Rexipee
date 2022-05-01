function navbar() {
    return `<nav>
        <div id="navbar">
            <div style="margin-left: 5px">
                <a href="/"><h3 id="logo">Re<span id="x">X</span>ipee</h3></a>
            </div>
            <div id="search">
                <input type="text" id="searchBox" oninput="debounce(main, 2000)" placeholder="Search Your Recipes">
            </div>
            <div>
                <a href="rod.html"><h3>Recipe Of The Day</h3></a>
                <a href="random.html"><h3>Random Recipes</h3></a>
                <a href="login.html"><h3>Login</h3></a>
                <a href="signup.html"><h3>Signup</h3></a>
            </div>
        </div>
    </nav>`
}

export {navbar};

function navbar1() {
    return `<nav>
        <div id="navbar">
            <div style="margin-left: 5px">
                <a href="/"><h3 id="logo">Re<span id="x">X</span>ipee</h3></a>
            </div>
            <div id="search">
                <input type="text" id="searchBox" oninput="debounce(main, 2000)" placeholder="Search Your Recipes">
            </div>
            <div>
                <a href="random.html"><h3>Random Recipes</h3></a>
            </div>
        </div>
    </nav>`
}

export {navbar1};

function navbar2() {
    return `<nav>
        <div id="navbar">
            <div style="margin-left: 5px">
                <a href="/"><h3 id="logo">Re<span id="x">X</span>ipee</h3></a>
            </div>
            <div id="search">
                <input type="text" id="searchBox" oninput="debounce(main, 2000)" placeholder="Search Your Recipes">
            </div>
            <div>
                <a href="rod.html"><h3>Recipe Of The Day</h3></a>
            </div>
        </div>
    </nav>`
}

export {navbar2};