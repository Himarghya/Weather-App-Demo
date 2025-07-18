import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const Base_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"; //Weather API_URL
const API_Key = "ZWSC2NVUPFRGWA2CNXYFHYV5L";
const app = express(); //
const port = 3000;

app.use(bodyParser.urlencoded({extend : true}));//For Middleware purposes
app.use(express.static("public"));//For sending the static files

app.get("/" , async(req, res) =>{
    try{
        res.render("index.ejs");
    }
    catch(error){
        console.log(error.messgae);
        console.log(error.name);
        error.Message; error.name;
    }
})
app.post("/Submit", async(req, res) =>{
    try {
        const location = req.body["location"];
        const latitude = req.body["latitude"];
        const longitude = req.body["longitude"];
        if(location){
            const response = await axios.get(Base_URL+`${location}?key=`+API_Key+"&contentType=json");
            const date = response.data.days[0].datetime;
            const temp_Max = response.data.days[0].tempmax;
            const temp_Min = response.data.days[0].tempmin;
            const avg_Temp = response.data.days[0].temp;
            const humidity = response.data.days[0].humidity;
            const WindSpeed= response.data.days[0].windspeed;
            const Weather_Icon = response.data.days[0].icon;
            const date1 = response.data.days[1].datetime;
            const avg_Temp1 = response.data.days[1].temp;
            const Weather_Icon1 = response.data.days[1].icon;
            const date2 = response.data.days[2].datetime;
            const avg_Temp2 = response.data.days[2].temp;
            const Weather_Icon2 = response.data.days[2].icon;
            const date3 = response.data.days[3].datetime;
            const avg_Temp3 = response.data.days[3].temp;
            const Weather_Icon3 = response.data.days[3].icon;
            const date4 = response.data.days[4].datetime;
            const avg_Temp4 = response.data.days[4].temp;
            const Weather_Icon4 = response.data.days[4].icon;
            const date5 = response.data.days[5].datetime;
            const avg_Temp5 = response.data.days[5].temp;
            const Weather_Icon5 = response.data.days[5].icon;
            const date6 = response.data.days[6].datetime;
            const avg_Temp6 = response.data.days[6].temp;
            const Weather_Icon6 = response.data.days[6].icon;
            const address = response.data.address;

            res.render("index.ejs" , {
                Date : date,
                Max_Temperature : temp_Max,
                Min_Temperature :temp_Min,
                Avg_Temp : avg_Temp,
                Humidity : humidity,
                Wind_speed : WindSpeed,
                icon : Weather_Icon,
                Date1 : date1,Date2 : date2,Date3 : date3,Date4 : date4,Date5 : date5,Date6 : date6,
                AvgTemp1 : avg_Temp1,AvgTemp2 : avg_Temp2,AvgTemp3 : avg_Temp3,AvgTemp4 : avg_Temp4,AvgTemp5 : avg_Temp5,AvgTemp6 : avg_Temp6,
                WI1 : Weather_Icon1,WI2 : Weather_Icon2,WI3 : Weather_Icon3,WI4 : Weather_Icon4,WI5 : Weather_Icon5,WI6 : Weather_Icon6,
                Address :address
            })
        }
        else{
            const response = await axios.get(Base_URL+`${latitude},${longitude}?key=`+API_Key+"&contentType=json");
            const date = response.data.days[0].datetime;
            const temp_Max = response.data.days[0].tempmax;
            const temp_Min = response.data.days[0].tempmin;
            const avg_Temp = response.data.days[0].temp;
            const humidity = response.data.days[0].humidity;
            const WindSpeed= response.data.days[0].windspeed;
            const Weather_Icon = response.data.days[0].icon;
            const date1 = response.data.days[1].datetime;
            const avg_Temp1 = response.data.days[1].temp;
            const Weather_Icon1 = response.data.days[1].icon;
            const date2 = response.data.days[2].datetime;
            const avg_Temp2 = response.data.days[2].temp;
            const Weather_Icon2 = response.data.days[2].icon;
            const date3 = response.data.days[3].datetime;
            const avg_Temp3 = response.data.days[3].temp;
            const Weather_Icon3 = response.data.days[3].icon;
            const date4 = response.data.days[4].datetime;
            const avg_Temp4 = response.data.days[4].temp;
            const Weather_Icon4 = response.data.days[4].icon;
            const date5 = response.data.days[5].datetime;
            const avg_Temp5 = response.data.days[5].temp;
            const Weather_Icon5 = response.data.days[5].icon;
            const date6 = response.data.days[6].datetime;
            const avg_Temp6 = response.data.days[6].temp;
            const Weather_Icon6 = response.data.days[6].icon;
            const address = response.data.address;


            res.render("index.ejs" , {
                Date : date,
                Max_Temperature : temp_Max,
                Min_Temperature :temp_Min,
                Avg_Temp : avg_Temp,
                Humidity : humidity,
                Wind_speed : WindSpeed,
                icon : Weather_Icon,
                Date1 : date1,Date2 : date2,Date3 : date3,Date4 : date4,Date5 : date5,Date6 : date6,
                AvgTemp1 : avg_Temp1,AvgTemp2 : avg_Temp2,AvgTemp3 : avg_Temp3,AvgTemp4 : avg_Temp4,AvgTemp5 : avg_Temp5,AvgTemp6 : avg_Temp6,
                WI1 : Weather_Icon1,WI2 : Weather_Icon2,WI3 : Weather_Icon3,WI4 : Weather_Icon4,WI5 : Weather_Icon5,WI6 : Weather_Icon6,
                Address :address
            })
        }
        
        
    } catch (error) {
        console.log(error.messgae);
        console.log(error.name);
        error.Message; error.name; 
    }
})

app.listen(port , ()=>{
    console.log(`Listening to port ${port}`);
})

