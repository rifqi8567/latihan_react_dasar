function App () {
    let lisBuah = ["jeruk", "Rambutan", "pepaya"]

    return(
        <ul>
            {lisBuah.map((item, index) => (
                <li key = {index}>{item}</li>
            ))}
        </ul>
    );
}