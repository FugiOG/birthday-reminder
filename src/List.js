import { CSSTransition, TransitionGroup } from "react-transition-group";
const List = (props) => {

    function renderItems(arr){
        const elements = arr.map(item => {
            const {id, name, age, image} = item;
            
            return (
                <CSSTransition
                timeout={400} 
                classNames="listItem">
                    <article key={id} className='person'>
                        <img src={image}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                </CSSTransition>
            )
        })
        return elements;
    }

    const elements = renderItems(props.char);

    return (
        <TransitionGroup component={null}>
            {elements}
        </TransitionGroup>
    )
}

export default List;