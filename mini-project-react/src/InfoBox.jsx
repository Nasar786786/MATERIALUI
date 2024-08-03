import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
 

export default function InfoBox({ info }) {
    const INIT_URL =
     "https://media.istockphoto.com/id/1447867001/photo/beautiful-view-of-a-green-landscape-with-tree-covered-with-fog.webp?s=170667a&w=0&k=20&c=FYxp2yCIc23dQ42GrVLDEDet_GhD5SzaNPyLU31vwjk=";

     let COLD_URL = "https://media.istockphoto.com/id/464542668/photo/freezing.jpg?s=2048x2048&w=is&k=20&c=YQ-szEl9WvI-hktTcvlt9vWCJCVa1hdxKBY52ToveXQ=";
     let HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
     let RAIN_URL = "https://media.istockphoto.com/id/545113630/photo/boy-with-umbrella-outdoors.jpg?s=2048x2048&w=is&k=20&c=3goAJ_HOyZC5yFFtBepRMvGa63981uxMVCL95fluH1M=";


    return (
        <div className="InfoBox"> 
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
             ? RAIN_URL
              : info.temp > 15
               ? HOT_URL 
               : COLD_URL
        }
        title="green iguana" 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
             info.humidity > 80
             ? <ThunderstormIcon/>
              : info.temp > 15
               ? <WbSunnyIcon/>
               : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like  = {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}



