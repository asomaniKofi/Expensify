// const template = 
// <div>
// <h1>Nana Ama is my girl</h1> 
// <p>This is info though</p>
// <ol>
//     <li>Ruth</li>
//     <li>Kim</li>
//     <li>Jess</li>
//     <li>Jade</li>
// </ol>
// </div>;

// const expressions = {
//     name: "This is why",
//     reason: "I got tired of being a burden to you, if I was good enough you would never have had to entertain other guys you wouldve respected me enough to not get super close to my friends, you were doing you and my feelings were not not considered and thats fine if I was the man you really wanted to marry these actions wouldve never taken place As long as your doing you and your happy I can not be mad It hurt too much to make something work knowing damn well it wasnt going to I didnt answer my phone I peed on your dress, I have slept with other girls when I ghosted you I was disrespectful I did make you feel like you couldnt open up  to me I accept my mistakes and hold them whether its chama issac or who fucking ever just go and do you, theres no part of me that wishes any bad on you and its always going to be love from me",
// };

// function getInfo(info){
//     if(info){
//         return <p>{info}</p>;
//     }else{
//         return <p>Its all Mududududu, You wanted everyone to think your single, now you are</p>;
//     }
// }

// const introduction = (
//     <div>
//     <h1>{expressions.name}</h1>
//     <p>{expressions.reason}</p>
//     {getInfo(expressions.conclusion)}
//     </div>
// )

// let count = 0;
// const increment = ()=>{
//     count++;
//     bindingTemplate();
// }
// const decrement = ()=>{
//     count--;
//     bindingTemplate();
// }
// const reset = ()=>{
//     count = 0;
//     bindingTemplate();
// }
// const bindingTemplate = () =>{
//     const dynamicTemplate = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={increment}>Increase</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(dynamicTemplate,root);
// }
// bindingTemplate();

// const root = document.getElementById("app");
// const Indecision = {
//     name: "Welcome to Indecision",
//     slogan: "We make every decision for you",
//     "options": []
// };
// const submissionUpdate = (event)=>{
// event.preventDefault();
// const form = event.target.choice.value;
//     if(form){
//         Indecision.options.push(form);
//         event.target.choice.value = "";
//         dynamicReRender();
//     }else{
//         alert("Please submit a choice");
//     }
// }
// const clear = ()=>{
//     Indecision.options = [];
//     dynamicReRender();
// }
// const decide = () =>{
// const randSelecter = Math.floor(Math.random() * Indecision.options.length);
// const optionSelected = Indecision.options[randSelecter];
// alert(optionSelected);
// };
// const lengthCheck = (Indecision.options.length === 0);
// const dynamicReRender = () =>{
//     const appPage = (
//         <div>
//         <h1>{Indecision.name}</h1>
//         <p>{Indecision.slogan}</p>
//         <button disabled={lengthCheck} onClick={decide}>Whats the decision</button>
//         <ol>
//         {
//             Indecision.options.map((option) =>{
//                 return <li key={option}>{option}</li>;
//             })
//         }
//         </ol>
//         <form onSubmit={submissionUpdate}>
//         <input type="text" name="choice"/>
//         <button>Add</button>
//         </form>
//         <button onClick={clear}>Clear</button>
//         </div>
//     )
//     ReactDOM.render(appPage,root);
// }
// dynamicReRender();
const root = document.getElementById("app");
let visible = false;
const toggleVisibility = (event)=>{
    visible = !visible;
    event.target.nextSibling.hidden = visible;
    toggleReRender();
}
const toggleReRender = () =>{
    const togglePage = (
        <div>
        <h1>Now you See me</h1>
        <button onClick={toggleVisibility}>
        {visible ? "Show" : "Hide"}
        </button>
        <p>I feel fucking awful, I thought the footer was fine, turns out its a massive shitstorm of things I did not do properly or even check I did not carry out due dilligence as I let pressure push out code that is piss poor and what the most feared outcome has become reality as now they are literally doing cleanup of my shit and it fucking hurts lets just be honest, I do love the Job but I do hate the fact that I am just that little kid that tries then fails then begs others for help, some of the tasks were done with esae but I literally felt like a little kid always having to clla for help when I was spending too long on an issue. The job itself is a joy the work varies in difficulty from time to time, there are days of me just flying through taks but there have been days of me just being stuck which has dented my confidence like a mf its humbling and a confidence killer but Im surprised I have not cried yet because I know for a fact I have been on the verge numerous times.</p>
        </div>
    )
    ReactDOM.render(togglePage,root);
}

toggleReRender();