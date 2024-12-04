import { Link} from "react-router-dom";
const Home =()=>{
    return (
        <div>
            <h1>
                Home page
            </h1>
<ul>
    <li>
        <Link to ='/Counter'>Counter app</Link>
    </li>
    <li><Link to ='/Image'>Image app</Link></li>
    <li><Link to ='/Stopwatch'> stopWatch</Link></li>
</ul>
        </div>

    )
}
export default Home;
