import React, { useState, useEffect } from "react";
import ExhibitCard from "../../components/ExhibitCard";
import exhibitData from "./exhibitData.js";

const ExhibitPage = (props) => {
	const location = props.location;
	const [data, setData] = useState(null);
	var tag = "";

	useEffect(() => {
		if (!data) {
			if (location.state) {
				setData(location.state.data);
			} else {
				const building = exhibitData.filter(building => building.link === location.pathname);
				setData(building[0]);
			}
		}
	}, [data, location.state, location.pathname]);


	const setFilter = tag => e => {
		console.log(location);
		var newExhibits = [];
		var exhib;
		if(tag == "clear") setData(location.state.data);
		else{
			for (exhib of location.state.data.exhibits){
				if(exhib.tags.includes(tag)){
					newExhibits.push(exhib);
				}
			}
			var newData = Object.assign({}, data, {exhibits:newExhibits});
			console.log(newExhibits);
			setData(newData);
		}
	}

	return (
		data && 
		<div className="page-container exhibit-page-wrapper">
			<h2>{data.name}</h2>
			<div>
				<p>{data.description}</p>
			</div>
			<div>
				 <div class="dropdown">
					  <button class="dropbtn">Filter</button>
					  <div class="dropdown-content">
					  	<button onClick={setFilter("clear")}>Clear Filter</button>
					    <button onClick={setFilter("mechanical")}>Mechanical</button>
						<button onClick={setFilter("easy")}>Easy</button>
						<button onClick={setFilter("quick")}>Quick</button>
						<button onClick={setFilter("natural")}>Natural</button>
						<button onClick={setFilter("long")}>Long</button>
						<button onClick={setFilter("difficult")}>Difficult</button>
					  </div>
				</div> 
			</div>
			<div className="exhibit-videos">
				{data.exhibits.map(exhibit => <ExhibitCard data={exhibit} />)}
			</div>
		</div>
	);
}

export default ExhibitPage;