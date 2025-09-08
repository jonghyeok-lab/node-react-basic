import React from 'react';
import logo from './logo.svg';
import './App.css';

interface NavProps {
    id: number,
    title: string,
    body: string
}

interface NavListProps {
    props: NavProps[],
    onClick: () => void
}

const Nav = ({props, onClick}: NavListProps) => {
    const li = props.map(prop => <li key={prop.id}><a href={"/read/" + prop.id}>{prop.title}</a></li>);

    return (
        <>
            <a href="#" onChange={onClick}>
                Do Click!
            </a>
            <ul>
                {li}
            </ul>
        </>
    )
}

function App() {
    const props: NavProps[] = [
        {id: 1, title: "hello", body: "hello body"},
        {id: 2, title: "hello2", body: "hello2 body"},
        {id: 3, title: "hello3", body: "hello3 body"}
    ]

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Nav props={props} onClick={function () {
                alert('click!!!!')
            }}/>
        </div>
    );
}

export default App;
