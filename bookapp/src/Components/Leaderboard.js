import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import AnimatedNumber from "react-animated-number";
import {
	PlayerContainer,
	PlayerInfo,
	Rank,
	Image,
	Points,
} from "../Styles/styles";
import { data } from "../Model/data";

const Leaderboard = () => {
	const [players, setPlayers] = useState(data);

	//Sorting logic
	players.sort((a, b) => {
		return b.score - a.score;
	});

	useEffect(() => {
		//changing the score for each player by adding random method
		const newPlayers = players.map((item) => {
			let randomNum = Math.floor(Math.random() * 5000);
			return { ...item, score: item.score + randomNum };
		});

		//setting new state with changed number every 2 seconds
		const change = setInterval(() => {
			setPlayers(newPlayers);
		}, 2000);
		return () => {
			clearInterval(change);
		};
	}, [players]);

	return (
		<FlipMove>
			{players.map(({ userID, displayName, score, picture }, index) => {
				return (
					<PlayerContainer key={userID}>
						<PlayerInfo>
							<Rank position={index}>{index + 1}</Rank>
							<Image src={picture} alt='player' />
							<p className='name'>{displayName}</p>
						</PlayerInfo>
						<Points>
							<AnimatedNumber
								value={score}
								duration={500}
								formatValue={(n) => n.toFixed(0)}
							/>
							pt
						</Points>
					</PlayerContainer>
				);
			})}
		</FlipMove>
	);
};

export default Leaderboard;
