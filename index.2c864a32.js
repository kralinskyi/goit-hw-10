!function(){var e,n=["/posts","/comments","/albums","/photos","/todos","/users"],t=document.querySelector(".json-container");(e="https://jsonplaceholder.typicode.com",fetch("".concat(e).concat(n[5])).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){t.innerHTML=e.map((function(e){var n=e.id,t=e.name,c=e.username,o=e.email,r=e.address,a=r.city,s=r.street,i=r.suite;return'<li>\n          <p class="id">'.concat(n,'</p>\n          <p class="name">').concat(t,'</p>\n          <p class="username">').concat(c,'</p>\n          <p class="email">').concat(o,'</p>\n          <p class="address">address: ').concat(a,", ").concat(s,", ").concat(i,"</p>\n        </li>")})).join("")})).catch((function(e){return console.log(e)}));var c="d158fc06d252bdd7c7e81a9fed6f3b81",o=document.querySelector(".weather-container"),r=document.querySelector(".js-form-weather"),a="https://api.openweathermap.org/data/2.5/weather";r.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements.city;if(!n.value.trim())return n.value="",void console.log("Enter city name!");(t=n.value,fetch("".concat(a,"?q=").concat(t,"&appid=").concat(c)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){return o.innerHTML=(t=(n=e).main,c=t.humidity,r=t.pressure,a=n.sys,s=a.sunrise,i=a.sunset,u=n.weather[0].description,p=n.wind.speed,d=new Date(1e3*s),l=new Date(1e3*i),"<li>\n          <p>Humidity: ".concat(c,"</p>\n          <p>Pressure: ").concat(r,"</p>\n          <p>Sunrise: ").concat(d.getHours(),":0").concat(d.getMinutes()," AM</p>\n          <p>Sunset: ").concat(l.getHours(),":").concat(l.getMinutes()," PM</p>\n          <p>Description: ").concat(u,"</p>\n          <p>Wind speed: ").concat(p,"</p>\n        </li>"));var n,t,c,r,a,s,i,u,p,d,l})).catch((function(e){return console.error(e)}));var t}))}();
//# sourceMappingURL=index.2c864a32.js.map
