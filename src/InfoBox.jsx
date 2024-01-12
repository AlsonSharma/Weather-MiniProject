import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ Info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?b=1&s=170667a&w=0&k=20&c=rVSwIECCenLv_NYV76uQQdhc1VwOSkPqoIjHuqNu_sw=";

  const HOT_URL =
  "https://media.istockphoto.com/id/1033581442/photo/paddy-field-farming-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=cGAvp1kpQGDKHCGggCq7YpXWNH2F0rL80RQZnw7Wcmo=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1692905262350-2d650281ae9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZCUyMEltYWdlfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80
                ? RAIN_URL
                : Info.temp > 59
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}{" "}
              {Info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : Info.temp > 59 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body1.5"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {Info.temp}&deg;F</p>
              <p>Humidity = {Info.humidity}&deg;F</p>
              <p>Min Temp = {Info.tempMin}&deg;F</p>
              <p>Max Temp = {Info.tempMax}&deg;F</p>
              <p>
                The weather can be described as <i>{Info.weather}</i> and feels
                like {Info.feelsLike}&deg;F
              </p>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}
