var weather = prompt("Choose your favourite weather..!! \n Summer--Winter--Autumn--Spring")
if(weather=="Summer"){
    document.write(`<div class="card">
  <div class="card-text">Karachi<span>38°C<br/><small>Sunny☀️</small></span></div>
  <div class="cloud cloud-top"></div>
  <div class="cloud cloud-bottom"></div>
  <div class="card-bottom">
    <div class="week week-mon">
      <div class="day">Mon</div>
      <div class="cloudy-icon"></div>
      <div class="degrees">20°C</div>
    </div>
    <div class="week week-tue">
      <div class="day">Tue</div>
      <div class="sun-icon">
        <div class="sun-ray top"></div>
        <div class="sun-ray top-left"></div>
        <div class="sun-ray top-right"></div>
        <div class="sun-ray bottom"></div>
        <div class="sun-ray bottom-left"></div>
        <div class="sun-ray bottom-right"></div>
      </div>
      <div class="degrees">24°C</div>
    </div>
    <div class="week week-wed">
      <div class="day">Wed</div>
      <div class="cloudy-icon">
        <div class="rain1"></div>
        <div class="rain2"></div>
        <div class="rain3"></div>
      </div>
      <div class="degrees">15°C</div>
    </div>
    <div class="week week-thu">
      <div class="day">Thurs</div>
      <div class="cloudy-icon">
        <div class="sun">
          <div class="ray1"></div>
          <div class="ray2"></div>
          <div class="ray3"></div>
        </div>
      </div>
      <div class="degrees">20°C</div>
    </div>
    <div class="week week-fri">
      <div class="day">Fri</div>
      <div class="cloudy-icon">
        <div class="sun">
          <div class="ray1"></div>
          <div class="ray2"></div>
          <div class="ray3"></div>
        </div>
      </div>
      <div class="degrees">20°C</div>
    </div>
    <div class="week week-sat">
      <div class="day">Sat</div>
      <div class="sun-icon">
        <div class="sun-ray top"></div>
        <div class="sun-ray top-left"></div>
        <div class="sun-ray top-right"></div>
        <div class="sun-ray bottom"></div>
        <div class="sun-ray bottom-left"></div>
        <div class="sun-ray bottom-right"></div>
      </div>
      <div class="degrees">24°C</div>
    </div>
  </div>
</div>`);
}
else if(weather=="Spring"){
    document.write(` 
        <div class="w-card  p-0" style="width: 18rem;">
  <img src="https://img.magnific.com/free-photo/beautiful-cherry-blossoms-trees-blooming-spring_335224-878.jpg?semt=ais_hybrid&w=740&q=80" class="img-fluid object-fit-fill" alt="spring-img">
  <div class="w-card-body p-3" style="background-color:#FCE4EC ;">
    <small>🌸🌺</small>
    <h3 class="text-danger-emphasis" style="color: #8E5870;">Happy Spring.!!</h3>
    <p class="w-card-text lead" style=" color: #C2185B;
    font-weight: bold;">22°C</p>
    <p class="w-card-text lead" style="color: #8E5870;">Flowers bloom and nature comes alive with fresh colors.</p>
    
  </div>
</div>`)
}
else if(weather=="Winter"){
    document.write(`<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <h2 class="title fw-semibold">❄️Winter</h2>
            <div class="temp">8°C</div>
            <p class="desc text-dark fw-semibold">
                Cold breezes and cozy nights make winter special.
            </p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">🌨️ Upcoming Weather</h2>
            <div class="temp">5°C</div>
            <p class="desc">Snowfall expected soon.</p>

            <div class="forecast">
                Mon ❄️ 6°C<br>
                Tue 🌨️ 5°C<br>
                Wed ❄️ 4°C
            </div>
        </div>

    </div>
</div>
`)
}
else if(weather=="Autumn"){
    document.write(`<div class="w-card  p-0" style="width: 18rem;">
  <img src="https://media.istockphoto.com/id/1176602671/photo/falling-autumn-leaves-before-sunset.webp?b=1&s=612x612&w=0&k=20&c=nXlYtEapVrWa6IEbaVeLQQPD9bAxhcKChw2hLQOCNRk=" class="img-fluid object-fit-fill" alt="autumn-img">
  <div class="w-card-body2 p-3" >
    <small>🍁🍂</small>
    <h3 class="text-danger-emphasis" style="color: #8B5E3C;">Happy Autumn.!!</h3>
    <p class="w-card-text lead" style=" color: #C97B36;
    font-weight: bold;">15°C</p>
    <p class="w-card-text lead" style="color: #6B5B4D;">Falling leaves and cool breezes create a peaceful atmosphere.</p>
    
  </div>
</div>`)
}
else{
    alert("PLEASE!! Choose from these four seasons \n Summer--Winter--Autumn--Spring")
}
