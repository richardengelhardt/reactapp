const desc = 'Just want to know this pa kaba'
const name = 'Riec'

//create header into the DOM!
const header =(
<header>
    <h1>{ name }</h1>
    <p>{ desc }</p>
</header>

);

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Richard
            </span>
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">35</span>
                <button className="counter-action increment"> + </button>
            </div>

        </div>

    );
}

ReactDOM.render(
 <Player />,
 document.getElementById('root')
);


//console.log(title);