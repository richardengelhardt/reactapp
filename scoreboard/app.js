const title = <h1>'My First React Element'</h1>
const desc = <p>'I just want to know this pa kaba'</p>


//create header into the DOM!
const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
 header,
 document.getElementById('root')
);


//console.log(title);