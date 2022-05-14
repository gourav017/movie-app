
    function storeimgs(){
        let image = document.getElementById("url").value;

        let imag_arr=JSON.parse(localStorage.getItem("images")) || [];

        imag_arr.push(image);

        localStorage.setItem("images",JSON.stringify(imag_arr))

        document.getElementById("url").value=null;
    }

    let image_arr = JSON.parse(localStorage.getItem("images"))||[]
    let  i=0 ;

    let id;
    let image_box = document.getElementById("slideshow")
    let img = document.createElement("img")

    function start(){
    id=setInterval(function(){
        if(i===image_arr.length)
        {
            i=0;
        }
        image_box.innerHTML=null;

        img.src=image_arr[i];

        image_box.append(img);

        i++;

    },2000)
}

    function stop(){
        clearInterval(id);
    }


    // sorting..

    let moviedata=[
        {
            name:"Pushpa: The Rise - Part 1",
            release_date:"3-march-2022",
            poster:"https://pbs.twimg.com/profile_banners/1247726266414845952/1646636566/1080x360",
            IMDb_rating: 10

        },
        {
            name:"kgf-chapter 1",
            release_date:"13-may-2019",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg",
            IMDb_rating: 9

        },
        {
            name:"rrr",
            release_date:"20-jan-2022",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rrr-et00094579-29-03-2022-03-23-44.jpg",
            IMDb_rating: 3

        },
        {
            name:"The Kashmir Files",
            release_date:"15-feb-2022",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-kashmir-files-et00110845-24-02-2022-03-28-20.jpg",
            IMDb_rating: 8

        },
        {
            name:"Gangubai Kathiawadi",
            release_date:"30-june-2021",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gangubai-kathiawadi-et00114897-22-02-2022-01-07-14.jpg",
            IMDb_rating:4

        },
        {
            name:"Doctor Strange: In The Multiverse Of Madness",
            release_date:"25-sep-2022",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/doctor-strange-in-the-multiverse-of-madness-et00326383-08-04-2022-05-29-50.jpg",
            IMDb_rating: 5

        },
        {
            name:"RAW Beast",
            release_date:"4-agu-2022",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raw-beast-et00326037-05-04-2022-03-35-08.jpg",
            IMDb_rating: 2

        },
        {
            name:"King Richard",
            release_date:"3-march-2022",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/king-richard-et00122565-08-04-2022-12-52-04.jpg",
            IMDb_rating: 4

        },
        {
            name:"Jhund",
            release_date:"6-dec-2022",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jhund-et00077233-03-03-2022-04-20-34.jpg",
            IMDb_rating: 6

        }
    ];

    localStorage.setItem("moviesdata",JSON.stringify(moviedata))

    var storeddata =JSON.parse(localStorage.getItem("moviesdata")) || []

    displayData(storeddata)

    document.querySelector("#sort-hl").addEventListener("click",myhl)

    function myhl(){
        storeddata.sort(function(a,b){
            return b.IMDb_rating - a.IMDb_rating;
        });
        displayData(storeddata);
    }

    document.querySelector("#sort-lh").addEventListener("click",mylh)

    function mylh(){
        storeddata.sort(function(a,b){
            return a.IMDb_rating - b.IMDb_rating;
        });
        displayData(storeddata);
    }

function displayData(storeddata){
        document.querySelector("#movies").innerHTML="";
    storeddata.map(function(elem){

        var box = document.createElement("div");

        var img = document.createElement("img")
        img.src=elem.poster;
        img.setAttribute("id","boximg")

        var name = document.createElement("p")
        name.textContent=elem.name;

        var releasedte = document.createElement("p")
        releasedte.textContent=elem.release_date;

        var imdb = document.createElement("p")
        imdb.textContent=elem.IMDb_rating;

        var i= document.createElement("i")
        i.setAttribute("class","fa-solid fa-star-half-stroke")
        

        box.append(img,name,releasedte,imdb,i)

        document.querySelector("#movies").append(box);
    })
}
