!function(){var n,e=["/posts","/comments","/albums","/photos","/todos","/users"],t=document.querySelector(".json-container");(n="https://jsonplaceholder.typicode.com",fetch("".concat(n).concat(e[5])).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){t.innerHTML=n.map((function(n){var e=n.id,t=n.name,c=n.username,o=n.email,r=n.address,a=r.city,s=r.street,i=r.suite;return'<li>\n          <p class="id">'.concat(e,'</p>\n          <p class="name">').concat(t,'</p>\n          <p class="username">').concat(c,'</p>\n          <p class="email">').concat(o,'</p>\n          <p class="address">address: ').concat(a,", ").concat(s,", ").concat(i,"</p>\n        </li>")})).join("")})).catch((function(n){return console.log(n)}));var c="d158fc06d252bdd7c7e81a9fed6f3b81",o=document.querySelector(".weather-container"),r=document.querySelector(".js-form-weather"),a="https://api.openweathermap.org/data/2.5/weather";r.addEventListener("submit",(function(n){n.preventDefault(),(e=n.currentTarget.elements.city.value,fetch("".concat(a,"?q=").concat(e,"&appid=").concat(c)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){return o.innerHTML=(t=(e=n).main,c=t.humidity,r=t.pressure,a=e.sys,s=a.sunrise,i=a.sunset,p=e.weather[0].description,u=e.wind.speed,d=new Date(s),l=new Date(i),"<li>\n          <p>Humidity: ".concat(c,"</p>\n          <p>Pressure: ").concat(r,"</p>\n          <p>Sunrise: ").concat(d.toLocaleTimeString(),"</p>\n          <p>Sunset: ").concat(l.toLocaleTimeString(),"</p>\n          <p>Description: ").concat(p,"</p>\n          <p>Wind speed: ").concat(u,"</p>\n        </li>"));var e,t,c,r,a,s,i,p,u,d,l})).catch((function(n){return console.error(n)}));var e}))}();
//# sourceMappingURL=index.a460ccc2.js.map
