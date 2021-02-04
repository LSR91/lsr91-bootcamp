import Part from '../Part/Part'

const Content = (props) => {

	const {parts,exercises} = props;

	return <div>
			<Part part={parts[0]} exercises={exercises[0]}/>
	    	<Part part={parts[1]} exercises={exercises[1]}/>
	    	<Part part={parts[2]} exercises={exercises[2]}/>
	    </div>
}

export default Content;