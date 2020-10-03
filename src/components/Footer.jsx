import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <p>
                Built by: <a href="https://twitter.com/clarabellum" target="_blank" rel="noopener noreferrer">Clara Beyer</a>
            </p>
            <p>
                Idea and original spreadsheet by: <a href="https://twitter.com/mkramer" target="_blank" rel="noopener noreferrer">Mel Kramer</a>
            </p>
            <p>
                Tasks by: People like you! Do you have an idea to add to this spreadsheet? Tweet us, or <a href="https://github.com/csb324/october-bingo/blob/main/src/lib/taskBank.js" target="_blank" rel="noopener noreferrer">submit a pull request</a>.
            </p>
            <p>
                If you like this, please spread the word and donate to one of the organizations listed in this spreadsheet.
            </p>
            <p>
                Please feel free to <a href="https://github.com/csb324/october-bingo" target="_blank" rel="noopener noreferrer">fork this on github</a> and make this bingo card state or industry specific!
            </p>
        </footer>
    )

}

export default Footer;
