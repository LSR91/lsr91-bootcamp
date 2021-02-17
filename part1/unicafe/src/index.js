import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => <button onClick={()=>props.addVote(props.text[0])}>{props.text}</button> 

const Statistic = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
	const {good, neutral, bad} = props;
	return (
		<div>
			<h1>statistics</h1>
			{
			(good===0 && neutral===0 && bad===0) ? 
				<p>No feedback given</p>
			:
			<table>
				<tbody>
					<Statistic text="good" value={good} />
					<Statistic text="neutral" value={neutral} />
					<Statistic text="bad" value={bad} />
					<Statistic text="all" value={good+neutral+bad} />
					<Statistic text="average" value={(good-bad)/(good+bad+neutral)} />
					<Statistic text="positive" value={(100*good)/(good+bad+neutral)+' %'} />
		    	</tbody>
		    </table>
		  }
		</div>
	);
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addVote = (valor) => {
  	switch (valor){
  		case 'G':
  			setGood(good+1)
  			break;
  		case 'N':
  			setNeutral(neutral+1)
  			break;
  		case 'B':
  			setBad(bad+1)
  			break;
  		default:
  			break;
  	}
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button addVote={addVote} text="Good"/>
      <Button addVote={addVote} text="Neutral"/>
      <Button addVote={addVote} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

