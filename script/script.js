var typed = new Typed('.auto-type', {
    strings: ['រឿងភាគ', 'រឿងកំប្លែង', 'រឿងតុក្កតា'],
    loop: true,
    typeSpeed: 120,
    backSpeed: 120,
    showCursor: true,
    cursorChar: '|',
    // backDelay: 1500,
    // smartBackspace: true,
    // startDelay: 3000,
    // fadeOut: true,
    // fadeOutDelay: 1000,
    });

    const header = document.getElementById('nav');
    header.style.padding = "35px 0";
    window.onscroll = function (){
        const scrollvalue = window.scrollY;
        if(scrollvalue > 120){
            header.style.padding = "16px 0";
            header.style.backgroundColor = "rgb(18, 18, 18)";
            header.style.boxShadow = "0px 2px 4px rgba(0,0,0,0.1)";
            header.style.transition = "0.3s ease-in";
            
            
        }
        else{
            header.style.padding = "35px 0";
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
            header.style.transition = "0.3s ease-out";
            
        }
    }


    // scarymover
    var movieAarr = [
        {title:"វិញ្ញាណនិស្សិតពេទ្យ",year:"២០២៥",duration:120,rate:4.3,category:"scary",img:"/assets/images/វិញ្ញាណនិស្សិតពេទ្យ.JPG"},
        {title:"ឃើញក្បាលខ្ញំុទេ",year:"២០២៤",duration:160,rate:4.5,category:"scary",img:"/assets/images/ឃើញក្បាលខ្ញុំទេ.jpg"},
        {title:"បណ្ដាសានាងរាត្រី",year:"២០២៤",duration:123,rate:4.5,category:"scary",img:"/assets/images/បណ្តាសានាងរាត្រី.webp"},
        {title:"ម៉ែក្រឡាភ្លើង",year:"២០២៣",duration:120,rate:4.5,category:"scary",img:"/assets/images/ម៉ែក្រឡាភ្លើង.avif"},
        {title:"បូជាសពពោះធំ",year:"២០២៤",duration:130,rate:5.5,category:"scary",img:"/assets/images/បូជាសពពោះធំ.JPG"},
        {title:"សាសនាងងឹត",year:"២០២៥",duration:150,rate:7.1,category:"scary",img:"/assets/images/សាសនាងងឹត.JPG"},
    ]

    var scarymovie = document.getElementById('scarymovie');
    scarymovie.innerHTML = "";
    movieAarr.forEach((e)=>{
        scarymovie.innerHTML += ` <div class="col-12 col-md-6 col-lg-3 px-3" data-aos="zoom-in" >
                                            <div style="height: 450px; " class="bg-danger overflow-hidden hover-image rounded-2">
                                                <img src=" ${e.img}" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-danger fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border border-2 px-2 text-light fw-bold m-0 light-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder fw-bold text-warning"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>`
    });

//  funnymovie
    var movieAarr = [
        {title:"ស្រលាញ់បងល្អពេក",year:"២០២៤",duration:120,rate:4.3,category:"scary",img:"/assets/images/ស្រលាញ់បងល្អពេក.jpg"},
        {title:"លោកប្តី២",year:"២០២២",duration:160,rate:4.5,category:"scary",img:"/assets/images/លោកប្តី២.jpg"},
        {title:"លោកតា២១",year:"២០២៥",duration:123,rate:4.5,category:"scary",img:"/assets/images/លោកតា២១.JPG"},
        {title:"ម៉ែក្រឡាភ្លើង",year:"២០២៣",duration:123,rate:4.5,category:"scary",img:"/assets/images/ម៉ែក្រឡាភ្លើង.avif"},
    ]

    var joke = document.getElementById('joke');
    joke.innerHTML = "";
    movieAarr.forEach((e)=>{
        joke.innerHTML += ` <div class="col-12 col-md-6 col-lg-3 px-3" data-aos="zoom-in-up" >
                                            <div style="height: 450px; " class="bg-danger overflow-hidden hover-image rounded-2">
                                                <img src=" ${e.img}" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-danger fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border border-2 px-2 text-light fw-bold m-0 light-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder fw-bold text-warning"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>`
    });

    


    // lovemovie
    var movieAarr = [
        {title:"លួចស្រលាញ់អ្នកដទៃ",year:"២០២៥",duration:120,rate:4.3,category:"scary",img:"/assets/images/លួចស្រលាញ់អ្នកដទៃ.jpg"},
        {title:"ប្រវត្តិស្នេហ៍នាងនាថ",year:"២០២៥",duration:146,rate:7.6,category:"scary",img:"/assets/images/ប្រវត្តិស្នេហ៍នាងនាង.jpg"},
        {title:"ក្ដីស្រលាញ់ដែលអ្នក..",year:"២០២៥",duration:123,rate:4.5,category:"scary",img:"/assets/images/ក្តីស្រលាញ់ដែលអ្នកផ្តល់ឱ្យ.jpg"},
        {title:"ស្នេហាល្ងង់+ល្ងង់",year:"២០២៣",duration:123,rate:7.1,category:"scary",img:"/assets/images/ស្នេហាល្ងង់+ល្ងង់.jpg"},
    ]

    var love = document.getElementById('love');
    love.innerHTML = "";
    movieAarr.forEach((e)=>{
        love.innerHTML += ` <div class="col-12 col-md-6 col-lg-3 px-3" data-aos="zoom-in-up">
                                            <div style="height: 450px; " class="bg-danger overflow-hidden hover-image rounded-2">
                                                <img src=" ${e.img}" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-danger fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border border-2 px-2 text-light fw-bold m-0 light-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder fw-bold text-warning"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>`
    });


    var movieAarr = [
        {title:"មន្ទីរពេទ្យខ្មោច",year:"២០២៥",duration:170,rate:7.5,category:"scary",img:"/assets/images/មន្ទីរពេទ្យខ្មោច.JPG"},
        {title:"វីឡាខ្មោចចងអាឃាត",year:"២០២៥",duration:140,rate:6.5,category:"scary",img:"/assets/images/វីឡាខ្មោចចងអាឃាត.JPG"},
        {title:"អ្នកម៉ែវិញ្ញាណសណ្ឋិត",year:"២០២៥",duration:123,rate:6.2,category:"scary",img:"/assets/images/អ្នកម៉ែវិញ្ញាណសណ្ខិត.JPG"},
        {title:"អ្នកលាងសព",year:"២០២៣",duration:123,rate:6.0,category:"scary",img:"/assets/images/អ្នកលាងសព.JPG"},
    ]

    var movie = document.getElementById('movie');
    movie.innerHTML = "";
    movieAarr.forEach((e)=>{
       movie.innerHTML += ` <div class="col-12 col-md-6 col-lg-3 px-3 my-3 mt-5" data-aos="zoom-in-up" >
                                            <div style="height: 450px; " class="bg-danger overflow-hidden hover-image rounded-2">
                                                <img src=" ${e.img}" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-danger fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border border-2 px-2 text-light fw-bold m-0 light-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder fw-bold text-warning"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>`
    });



    var movieAarr = [
        {title:"CRIME BOSS",year:"២០២៥",duration:190,rate:9.9,category:"scary",img:"/assets/images//Crime boss.JPG"},
        {title:"AVATAR",year:"២០២៥",duration:140,rate:7.3,category:"scary",img:"/assets/images/avatar.jpg"},
        {title:"BATMAN",year:"២០២៥",duration:160,rate:7.1,category:"scary",img:"/assets/images/batman.jpg"},
        {title:"GLASS ONION",year:"២០២៥",duration:190,rate:6.5,category:"scary",img:"/assets/images/glass onion.jpg"},
        {title:"FALL GUY",year:"២០២៤",duration:123,rate:6.1,category:"scary",img:"/assets/images/fall guy.jpg"},
        {title:"MATRIX",year:"២០២៤",duration:160,rate:5.2,category:"scary",img:"/assets/images/matrix.avif"},
        {title:"TSOTSI",year:"២០២៥",duration:190,rate:7.3,category:"scary",img:"/assets/images/tsotsi.jpg"},
        {title:"LIFT",year:"២០២៤",duration:160,rate:7.5,category:"scary",img:"/assets/images/LIFT.jpg"},
 
    ]

    var movie2 = document.getElementById('movie2');
   movie2.innerHTML = "";
    movieAarr.forEach((e)=>{
        movie2.innerHTML += ` <div class="col-12 col-md-6 col-lg-3 px-3 my-3 mt-5" data-aos="zoom-in-up">
                                            <div style="height: 450px; " class="bg-danger overflow-hidden hover-image rounded-2">
                                                <img src=" ${e.img}" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-danger fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border border-2 px-2 text-light fw-bold m-0 light-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder fw-bold text-warning"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>`
    });

    