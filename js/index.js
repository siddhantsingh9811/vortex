$(document).ready(function(){var e;(e=jQuery).fn.countdown=function(t,n){function s(){eventDate=Date.parse(r.date)/1e3,currentDate=Math.floor(e.now()/1e3),eventDate<=currentDate&&(n.call(this),clearInterval(interval)),seconds=eventDate-currentDate,days=Math.floor(seconds/86400),seconds-=60*days*60*24,hours=Math.floor(seconds/3600),seconds-=60*hours*60,minutes=Math.floor(seconds/60),seconds-=60*minutes,days,o.find(".timeRefDays").text("Days"),hours,o.find(".timeRefHours").text("Hours"),minutes,o.find(".timeRefMinutes").text("Minutes"),seconds,o.find(".timeRefSeconds").text("Seconds"),"on"==r.format&&(days=String(days).length>=2?days:"0"+days,hours=String(hours).length>=2?hours:"0"+hours,minutes=String(minutes).length>=2?minutes:"0"+minutes,seconds=String(seconds).length>=2?seconds:"0"+seconds),isNaN(eventDate)?(errorMessage="Invalid date. Example: 27 March 2015 17:00:00",alert(errorMessage),console.log(errorMessage),clearInterval(interval)):(o.find(".days").text(days),o.find(".hours").text(hours),o.find(".minutes").text(minutes),o.find(".seconds").text(seconds))}var o=e(this),r={date:null,format:null};t&&e.extend(r,t),s(),interval=setInterval(s,1e3)},$(document).ready(function(){$("#countdown").countdown({date:"22 June 2020 9:00:00",format:"on"})})});