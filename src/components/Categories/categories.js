const categories = () => {
    return (
        <div className={"row "}>
            <h1>All categories</h1>
            <div className={'col'}>
                <ul className={"list-group"}>
                    <li className={"list-group-item"}>NOVEL</li>
                    <li className={"list-group-item"}>THRILLER</li>
                    <li className={"list-group-item"}>HISTORY</li>
                    <li className={"list-group-item"}>FANTASY</li>
                    <li className={"list-group-item"}>BIOGRAPHY</li>
                    <li className={"list-group-item"}>CLASSICS</li>
                    <li className={"list-group-item"}>DRAMA</li>
                </ul>
            </div>
        </div>
    )
}

export default categories;