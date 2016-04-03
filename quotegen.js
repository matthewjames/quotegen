quotes = [
  {
    "id" : 1,
    "author" : "Albert Einstein",
    "quote" : "Two thing are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "img" : "http://www.apredatorymind.com/Albert_Einstein_.jpg",
    "link" : "http://ctt.ec/752gm"
  },
  {
    "id" : 2,
    "author" : "Sir Winston Churchill",
    "quote" : "There are a terrible lot of lies going around the world, and the worst of it is half of them are true.",
    "img" : "http://www.littlecigarfactory.com/wp-content/uploads/2014/11/winston_churchill2.jpg",
    "link" : "http://ctt.ec/3g7Jl"
  },
  {
    "id" : 3,
    "author" : "John Scalzi",
    "quote" : "I didn't mind getting old when I was young. It's the being old now that's getting to me.",
    "img" : "http://images.148apps.com/2013/1/33486/155047/john-scalzi-300x300.jpg",
    "link" : "http://ctt.ec/5keBc"
  },
  {
    "id" : 4,
    "author" : "Antoine de Saint-Exupery",
    "quote" : "What saves a man is to take a step. Then another step. It is always the same step, but you have to take it.",
    "img" : "http://cdn.quotationof.com/images/antoine-de-saint-exupery-3.jpg",
    "link" : "http://ctt.ec/O58t9"
  },
  {
    "id" : 5,
    "author" : "Charles F. Kettering",
    "quote" : "An inventor is simply a fellow who doesn’t take his education too seriously.",
    "img" : "http://www.daytoninnovationlegacy.org/wpimages/wpef3f19de_05.jpg",
    "link" : "http://ctt.ec/q6ju6"
  },
  {
    "id" : 6,
    "author" : "Wayne Gretzky",
    "quote" : "You miss 100 percent of the shots you never take.",
    "img" : "http://images.realclear.com/338038_5_.jpg",
    "link" : "http://ctt.ec/IuK47"
  },
  {
    "id" : 7,
    "author" : "Bill Vaughan",
    "quote" : "We learn something every day, and lots of times it’s that what we learned the day before was wrong.",
    "img" : "http://www.kansascity.com/latest-news/oagsm8/picture4806402/ALTERNATES/FREE_320/Bill_Vaughan.jpg",
    "link" : "http://ctt.ec/5RN1n"
  },
  {
    "id" : 8,
    "author" : "Edith Sitwell",
    "quote" : "I am patient with stupidity but not with those who are proud of it.",
    "img" : "http://www.anthonyburgess.org/wp-content/uploads/2015/03/Sitwell.jpg",
    "link" : "http://ctt.ec/2MpYa"
  },
  {
    "id" : 9,
    "author" : "Lily Tomlin",
    "quote" : "The trouble with the rat race is that even if you win, you’re still a rat.",
    "img" : "http://www.yakimamagazine.com/wp-content/uploads/2013/04/LilyTomlin-Headshot.jpg",
    "link" : "http://ctt.ec/fcxct"
  },
  {
    "id" : 10,
    "author" : "David Allen",
    "quote" : "You can do anything, but not everything.",
    "img" : "http://s.4pda.to/vePhQTW04PYaa0wjqNoeiNyz15dz2U1lQ5Ufz2T.jpg",
    "link" : "http://ctt.ec/94axd"
  }
];


$(document).ready(function(){
  var $quote = $('#quote');
  var $person = $('#person');
  var $img = $('.img');
  var $background = $('body');
  var $twitter = $('#twitter');
  var currNum;
  
  var newQuote = function(){
    var randNum = Math.floor(Math.random() * (quotes.length - 0) + 0);
    
    // if statement prevents same quote id from generating consecutively and provides more diversity in randomizing
    if(randNum !== currNum && (randNum - 1) !== currNum && (randNum + 1) !== currNum){
      currNum = randNum;
      var currQuote = quotes[currNum];
      
      $quote.html(currQuote.quote);
      $person.html(currQuote.author);
      $img.attr("src", currQuote.img);
      $background.css({"background": "url(" + currQuote.img + ") center center no-repeat", "background-size" : "cover"})
      $twitter.attr("href", currQuote.link);
    } else {
      newQuote();
    }
  };
  
  newQuote();
                      
  $('#genQuote').on("click",function(){
    newQuote();
  });
})