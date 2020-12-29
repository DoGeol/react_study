import './App.css';

function App() {
    let style_test = {
        color: 'blue',
        fontSize: '20px'
    }
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 블로그</div>
            </div>
            <div style={{color: 'red'}}>맞아</div>
            <div style={style_test}>아냐</div>
        </div>
    );
}

export default App;
