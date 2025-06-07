import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);

dayjs.extend(timezone);




const timelist = Intl.supportedValuesOf("timeZone");

console.log(timelist);

console.log(dayjs().tz("Africa/Nouakchott").format());

timelist.forEach(myfunction);

function myfunction(item)
{
const index = item.indexOf("/");

const continenet = item.slice(0,index);
const country = item.slice(index+1);

console.log(continenet);
console.log(country);

const group = document.getElementById(continenet);
const option  = document.createElement("option");

option.value = item;
option.textContent = country.replaceAll("/", ": ").replaceAll("_", " ");

group.append(option);




}

setInterval(displaytime, 1000);

function displaytime(){
    let select = document.getElementById("select").value;
   


   let date = dayjs().tz(select).format('dddd, D MMMM YYYY');
   let time = dayjs().tz(select).format('h:mm:ssA');

   const date_html = document.getElementById("date");
   const time_html = document.getElementById("time");

   date_html.textContent = date;
   time_html.textContent = time;



}














