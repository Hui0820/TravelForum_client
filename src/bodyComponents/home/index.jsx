import React, {Component, Fragment} from "react";

import PhotoSlide from "./components/photoSlide";
import DiaryCard from "./components/diaryCard";


class Home extends Component {
	render() {
		return (
			<Fragment>
				<PhotoSlide/>
				<DiaryCard/>
			</Fragment>
		);
	}
}

export default Home;
