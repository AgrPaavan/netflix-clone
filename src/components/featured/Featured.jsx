import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

import featured from "../../img/featured.jpeg";
import title from "../../img/featured_title.webp";

export default function Featured({ type }) {
	return (
		<div className="featured">
			{type && (
				<div className="category">
					<span>{type === "movie" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img
				width="100%"
				src={featured}
				alt=""
			/>
			<div className="info">
				<img
					src={title}
					alt=""
				/>
				<span className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae libero adipisci architecto exercitationem sit nesciunt quibusdam officiis molestiae dignissimos, vel veritatis inventore eius voluptas, laborum nobis voluptates eveniet iste!
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	)
}
