import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => <button onClick={props.buttonFunction}>{props.text}</button>
const Section = (props) => <h1>{props.text}</h1>

const App = (props) => {

  //Const
  const {anecdotes} = props;
  const {length} = anecdotes;
  const INITIAL_VOTES=new Array(length).fill(0);

  //State
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(INITIAL_VOTES)

 //Random number different from previous one
  const randomNumber=(len)=>{
  	let rand=Math.floor(Math.random()*len);
  	while(rand===selected){
  		rand=Math.floor(Math.random()*len);
  	}
  	return rand;
  }

  //Select next random anecdote
  const nextAnecdote = (len) => {
  	setSelected(randomNumber(len));
  }

  //Add votes
  const addVotes = (i) => {
  	const copy=[...votes];
  	copy[i]+=1;
  	setVotes(copy);
  }

  //Most Vote
  const mostVoted = () => {
  	let tempMax=0, tempIndex=0;
  	for(let i=0; i<votes.length; i++){
  		if (votes[i]>tempMax){
  			tempMax=votes[i];
  			tempIndex=i;
  		}
  	}
  	return tempIndex;
  }

  return (
    <div>
      <Section text="Anecdote of the day" />
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button text="vote" buttonFunction={()=>addVotes(selected)}/>
      <Button text="next anecdote" buttonFunction={()=>nextAnecdote(length)}/>
      <Section text="Anecdote with most votes" />
      {anecdotes[mostVoted()]}
      <br />
      has {votes[mostVoted()]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);
