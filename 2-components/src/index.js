import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this ?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Samy" 
					timeAgo="Today at 4:45PM" 
					content="Bad blog ..." 
					image={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timeAgo="Today at 2:00AM" 
					content="Cool ! Don't listen haters" 
					image={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Vinc" 
					timeAgo="Yesterday at 4:45PM" 
					content="Bof." 
					image={faker.image.image()}
				/>
			</ApprovalCard>
		</div>
	)
};

ReactDOM.render(
	<App />,
	document.querySelector("#root")
)