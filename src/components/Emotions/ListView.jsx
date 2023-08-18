function ListView({elements, funcfilterEmotions}){
    console.log(elements);
    return(
        <div>
            <input type="text" onChange={ ev => funcfilterEmotions(ev.target.value) } />
            <ul>
            {
                elements.map((element, index) => element && <li key={index}>{element}</li>)
            }
            </ul>
        </div>
    )
}

export default ListView;