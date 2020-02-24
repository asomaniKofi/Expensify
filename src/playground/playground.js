class Action extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
            <button disabled={! this.props.hasOptions} onClick={this.props.Decider}>
            Decide for me
            </button>
            </div>
            )
        }
}

class Indecision extends React.Component{
constructor (props){
    super(props);
    this.state = {
        options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
    this.Decider = this.Decider.bind(this);
    this.removeOption = this.removeOption.bind(this);
}
handleDeleteOptions(){
    this.setState(() => ({options:[]}));
}
removeOption(optionToRemove){
    this.setState((prevState)=>({
        options: prevState.options.filter((option)=>{
        return optionToRemove !== option;
        })
    }));
}
componentWillUnmount() {
    console.log('componentWillUnmount');
  }
componentDidMount(){
    try{
        const localObjects = localStorage.getItem("Options");
        const local = JSON.parse(localObjects);

        if(local){
        this.setState(()=>({options: local}));
        }
    }catch(e){
        console.log(e)
    }
    
}
componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
        const savedOptions = JSON.stringify(this.state.options);
        localStorage.setItem("Options",savedOptions);
    }
}
Decider(){
    const randSelecter = Math.floor(Math.random() * this.state.options.length);
    const optionSelected = this.state.options[randSelecter];
    console.log(optionSelected);
}
submitEvent(event){
    event.preventDefault();
    const value = event.currentTarget[0].value.trim();
    if(!value){
        alert("Please add valid Entry");
    }else if(this.state.options.indexOf(value) > -1){
        alert("Entry already exists");
        event.currentTarget[0].value = "";
    }else{
        this.setState((prevState)=>({options: prevState.options.concat([value])}));
       event.currentTarget[0].value = "";
    }
}
render(){
    const title = "Indecision";
    const subtitle = "Rather just let a computer decide for me";
    return (
    <div>
        <HeaderModule title={title} subtitle={subtitle}/>
        <Action Decider={this.Decider} hasOptions={this.state.options.length > 0} />
        <Options handleDeleteOption={this.removeOption} options={this.state.options}/>
        <OptionForm submitHandler={this.submitEvent} options={this.state.options} handler={this.handleDeleteOptions}/>
    </div>
    )
}
}

Indecision.defaultProps = {
options: ["Emma", "Sinead Corr"]
};

const HeaderModule = (props)=>{
return (
    <div>
    {props.title && <h1>{props.title}</h1>}
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    )
}

HeaderModule.defaultProps = {
title: "Verbal, Verbal this verbal ting is long",
subtitle: "There just upset coz their brothers gone"
};

const Option = (props)=>{
return (
    <div>
    {props.text}
      <button onClick={(e) => {
        debugger;
        props.handleDeleteOption(props.text);
      }}>Remove</button>
    </div>)
}

const OptionForm =(props)=>{
return (
    <div>
    <form onClick={props.submitHandler}>
    <input type="text" name="choice"/>
    <button>Add Option</button> 
    </form>
    <button onClick={props.handler}>Clear All</button>
    </div>
    )
}

const Options = (props)=>{
return (                                                                                           
    <div>
    {props.options.length  === 0 && <p>Cant make a decision if I dont have any options</p>}    
    {
            props.options.map((option)=>
                <Option 
                key={option} 
                text={option}
                handleDeleteOption={props.handleDeleteOption}
                />
            )
        }
    </div>
)
}


ReactDOM.render(<Indecision />,document.getElementById("app"));

/**
 * 
 * Redux
 */

import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
        const test = typeof action.increaseBy === "number" ? action.incrementBy: 1;
      return {
        count: state.count + test
      };
    case 'DECREMENT':
        const decrement = typeof action.decreaseBy === "number" ? action.decreaseBy: 1;
      return {
        count: state.count - decrement
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});
store.subscribe(()=>{
    console.log(store.getState());
})

// Actions - than an object that gets sent to the store

// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT',
  increaseBy: 200
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decreaseBy: 65
});

store.dispatch({
    type: 'DECREMENT'
  });

