const quotes = [
  {
    id: 0,
    quote:
      "“Don’t say you’re gonna kill someone in front of airport security. Not cool.”",
  },
  {
    id: 1,
    quote:
      "“The girl from last night, I took her back to my place, then this morning spun her around a couple of times and sent her walking. She’ll never find her way back and there she is!”",
  },
  {
    id: 2,
    quote:
      "“Look, our forefathers died for the ‘pursuit of happiness,’ okay? Not for the ‘sit around and wait of happiness.’ Now if you want, we can go to the same bar, drink the same beer, talk to the same people every day or you can lick the Liberty Bell. You can grab life by the crack and lick the crap out of it.”",
  },
  {
    id: 3,
    quote:
      "“I’ve been dreaming of that since I was five. Well, that and my own operational Death Star.”",
  },
  {
    id: 4,
    quote:
      "“ARTICLE 41: A Bro never cries. Exceptions: Watching Field of Dreams, E.T., or a sports legend retire.”",
  },
  {
    id: 5,
    quote:
      "“One of the twenty-four similarities between girls and fish is that they’re both attracted to shiny objects. You really never read my blog, do you?”",
  },
  {
    id: 6,
    quote:
      "“Oh, Ted, no. Do not tell me you’re going to start searching for ‘The One’ again. The only time I want to hear you saying ‘The One’ is if it’s followed by the word ‘hundredth.'”",
  },
  {
    id: 7,
    quote:
      "“Attention, Canada! My name is Barney Stinson, and your country needs to A, get better money, it’s like you want us to make fun of you; and B, stop letting women like Robin Scherbatsky get away, because she is going back to America, where I plan to plant my flag on her, if you know what I mean, and you probably don’t.”",
  },
  {
    id: 8,
    quote:
      "“The killer in a horror movie does not stand in front of the camp cabins with a bullhorn and shout, ‘Attention, unguarded teens! At 3:00 I will jump out of that closet and hack you to death with a machete. By the way, my only weakness is fire.'”",
  },
  {
    id: 9,
    quote: "“I think tonight is going to be de — wait for it — lightful.”",
  },
  {
    id: 10,
    quote:
      "“A girl is allowed to be crazy as long as she is equally hot. Thus, if she’s *this* crazy, she has to be *this* hot. You want the girl to be above this line. Also known as the ‘Vickie Mendoza Diagonal.’ This girl I dated. She played jump rope with that line. She’d shave her head, then lose 10 pounds. She’d stab me with a fork, then get a boob job. [Pauses] I should give her a call.”",
  },
  {
    id: 11,
    quote:
      "“Ted, you know who’s a million times hotter than the hottest girl I’ve ever slept with? Her okay-looking friend I haven’t seen naked. Why? Because new is always better.”",
  },
  {
    id: 12,
    quote:
      "“Canadian porn! Trust me when I tell you that their universal health care system doesn’t cover breast implants. If I have to sit through one more flat-chested Nova Scotian riding a Mountie on the back of a Zamboni, I’ll go *oot* of my mind.”",
  },
  {
    id: 13,
    quote:
      "“There’s only one street where that is normal. Here’s a hint: a big, yellow bird lives on it. “",
  },
  {
    id: 14,
    quote:
      "“Because the belt is my birthright. You can’t ride the tricycle before me. It’s like Jimmy Olsen beating Lex Luthor while Superman watches impotently in his bed.”",
  },
  {
    id: 15,
    quote:
      "“Okay, I can do this… I was on my way to the launch pad, when I was mugged… and the mugger took my space shuttle keys! Nailed it, who’s up for a threeway?”",
  },
  {
    id: 16,
    quote:
      "“That is the Dominator 8000. The best in the market, according to my whip guy. Yeah, I have a whip guy.”",
  },
  {
    id: 17,
    quote:
      "“I can’t believe I’m taking sex advice from Ted Mosby. It’s like taking fashion advice from, well, Ted Mosby.”",
  },
  {
    id: 18,
    quote:
      "“ARTICLE 54: A Bro is required to go out with his Bros on St. Patty’s Day and other official Bro holidays, including Halloween, New Year’s Eve, and Desperation Day (February 13).”",
  },
  {
    id: 19,
    quote:
      "“Unfair? I would not let you take care of the imaginary kids I make up to score with single moms!”",
  },
  {
    id: 20,
    quote:
      "“I won! I now have a magic phone that never stops ringing. And who’s usually at the other end? A hot chick. The number of women who want me is now infinity!”",
  },
  {
    id: 21,
    quote:
      "“You poor thing. Having to grow up in Canada, with America right there.”",
  },
  {
    id: 22,
    quote:
      "“Curiosity. As in what would it be like to do it with a really tall girl. Not a big girl, a tall girl. Like if a normal girl were seven, seven-and-a-half feet tall, and had a very short denim skirt, I would have to know what that was like.”",
  },
  {
    id: 23,
    quote:
      "“Canada, you did it again! You even managed to ruin this! Why? Why do we even let you be a country?”",
  },
  {
    id: 24,
    quote:
      "“For the first time, ever, the three of us are single at the same time. I’ve dreamed about this day, boys, and it’s going to be *legendary*. Together, we will own this city. Anytime a girl wants to get back at her ex-boyfriends, we’ll be there. Anytime a girl wants to solve her father issues through promiscuity and binge drinking, *we will be* there. Anytime a bachelorette party drives through the city in a limo, sticking their heads out the sunroof, shouting, “What’s up, New York,” *we* will be what is up New York.”",
  },
  {
    id: 25,
    quote:
      "“ARTICLE 85: If a Bro buys a new car, he is required to pop the hood when showing it off to his Bros. Corollary: His Bros are required to whistle, even if they have no idea what they’re whistling at.”",
  },
  {
    id: 26,
    quote:
      "“There are only two reasons to date a girl you’ve already dated. Breast. Implants.”",
  },
  {
    id: 27,
    quote:
      "“I only smoke on certain occasions: post-coital, when I’m with Germans – sometimes the two overlap – coital, that time of year the Mets are mathematically eliminated, pre-coital, and – wait for it, ’cause I sure have – pregnancy scares.”",
  },
  {
    id: 28,
    quote:
      "“I was on my way to the Perfect Week. Seven nights, seven girls, no rejections.”",
  },
  {
    id: 29,
    quote:
      "“What does Ted see in that horrible woman? I mean, sure, she has boobs… Actually, I do see it. “",
  },
  {
    id: 30,
    quote:
      "“You know what I love about Halloween? It’s the one night of the year chicks use to unleash their inner ho-bag. If a girl dresses up as a witch, she’s a slutty witch. If she’s a cat, she’s a slutty cat. If she’s a nurse… “",
  },
  {
    id: 31,
    quote:
      "“Hey, so you know how I’ve always had a thing for half-Asian chicks? Well, now I’ve got a new thing. Lebanese chicks. Lebanese chicks are the new half-Asians.”",
  },
  {
    id: 32,
    quote: "“When I get sad, I stop being sad and be awesome instead.”",
  },
  {
    id: 33,
    quote:
      "“The only reason to wait a month for sex is if she is 17 years 11 months old.”",
  },
  {
    id: 34,
    quote: "“A lie is just a great story that someone ruined with the truth.”",
  },
  {
    id: 35,
    quote:
      "“Ted, if you have a crazy story, I was there. It’s just a law of the universe.”",
  },
  {
    id: 36,
    quote:
      "“Every Halloween, I bring a spare costume, in case I strike out with the hottest girl in the party. That way, I have a second chance to make a first impression.”",
  },
  {
    id: 37,
    quote:
      "“You know who is confused? Bimbos! They are easily confused. It’s one of the thousand little things I love about them. I love their vacant, trusting stares; their sluggish unencumbered minds; their unresolved daddy issues.”",
  },
  {
    id: 38,
    quote:
      "“Think of me like Yoda, but instead of being little and green, I wear suits and I am awesome. I’m your bro. I’m Broda.”",
  },
  {
    id: 39,
    quote:
      "“It’s going to be legen…wait for it…and I hope you’re not lactose-intolerant cause the second half of that word is…dairy!”",
  },
  {
    id: 40,
    quote: "“Believe it or not, I was not always as awesome as I am today.”",
  },
  {
    id: 41,
    quote:
      "“Ted, I believe you and I met for a reason. It’s like the universe was saying, “Hey Barney, there’s this dude, he’s pretty cool, but it is your job to make him awesome”",
  },
  {
    id: 42,
    quote:
      "“Destiny strips at the Melon Patch. They’re people Ted, try to keep ’em straight.”",
  },
  {
    id: 43,
    quote:
      "“A Bro is always entitled to do something stupid, as long as the rest of his Bros are all doing it.”",
  },
  {
    id: 44,
    quote:
      "“When wearing a baseball cap, a Bro may position the brim at either 12 or 6 o’clock. All other angles are reserved for rappers and the handicapped.”",
  },
  {
    id: 45,
    quote:
      "“There are only two reasons to date a girl you’ve already dated: breast implants.”",
  },
  {
    id: 46,
    quote:
      "“If there was any shame in a dude getting a pedicure I don’t think there would’ve been a feature about it in Details magazine.”",
  },
  {
    id: 47,
    quote:
      "“Open your brain tank, bro, ’cause here comes some premium 91-octane knowledge. There are three rules of cheating: 1. It’s not cheating if you’re not the one who’s married. 2. It’s not cheating if her name has two adjacent vowels. 3. And it’s not cheating if she’s from a different area code. You’re fine on all three counts.”",
  },
  {
    id: 48,
    quote: "“Swag is for boys. Class is for men.”",
  },
  {
    id: 49,
    quote:
      "“Do you have some puritanical hang up on prostitution? Dude, it’s the world’s oldest profession.”Related: 100+ Classic And Weird Dwight Schrute Quotes True Fans Of ‘The Office’ Love",
  },
  {
    id: 50,
    quote:
      "“That was the night I was born. I rose like a phoenix from her mentholated bosom and strode into the world, Armani-clad and fully awesome.”",
  },
  {
    id: 51,
    quote:
      "“The point is, marriage is stupid. Every day new 22-year olds go into bars and call me glass-half-full, but I think they’re getting dumber.”",
  },
  {
    id: 52,
    quote: "“Suit up!”",
  },
  {
    id: 53,
    quote:
      "“This is my lucky St. Paddys Day suit. I have dry-cleaned many a stain out of this baby.”",
  },
  {
    id: 54,
    quote: "“Step one, you start running. There is no step two.”",
  },
  {
    id: 55,
    quote:
      "“Now remember my three beginner’s tips for picking up chicks: Address her by name, isolate her from her friends, and subtly put her down.”",
  },
  {
    id: 56,
    quote: "“Your ego’s writing checks your body can’t cash.”",
  },
  {
    id: 57,
    quote:
      "“Suits are full of joy. They’re the sartorial equivalent of a baby’s smile.”",
  },
  {
    id: 58,
    quote:
      "“I realized that I’m searching, searching for what I really want in life. And you know what? I have absolutely no idea what that is.”",
  },
  {
    id: 59,
    quote:
      "“I thought love was just something idiots thought they felt, but this woman has a hold on my heart that I could not break if I wanted to — and there have been times that I wanted to.”",
  },
  {
    id: 60,
    quote:
      "“It has been… overwhelming and humbling and even painful at times, but I could not stop loving her any more than I could stop breathing.”",
  },
  {
    id: 61,
    quote:
      "“You and Marshall belong together. The two of you have something most people search their whole lives for and never find. I know you love him and if you knew what he was going through right now you wouldn’t be here for one more second.”",
  },
  {
    id: 62,
    quote:
      "“I love everything about her, and I’m not a guy who says that lightly. I’m a guy who has faked love his entire life.”",
  },
  {
    id: 63,
    quote:
      "“I am hopelessly, irretrievably in love with her. More than she knows.”",
  },
  {
    id: 64,
    quote: "“Sometimes we search for one thing but discover another.”",
  },
  {
    id: 65,
    quote: "“It’s time to let go of the fantasies. It’s time to grow up.”",
  },
  {
    id: 66,
    quote:
      "“Whatever you do in this life, it’s not legendary unless your friends are there to see it.”",
  },
  {
    id: 67,
    quote:
      "“In my body, where the shame gland should be, there is a second awesome gland. True story.”",
  },
  {
    id: 68,
    quote:
      "“I’ve never seen that woman before in my life! Sorry. Force of habit. Congratulations!”",
  },
  {
    id: 69,
    quote:
      "“So, remember, it’s not about scoring. It’s about believing you can do it, even though you probably can’t. Go get ‘em, tiger!”",
  },
  {
    id: 70,
    quote:
      "“You’re forcing me to be the voice of reason. And that’s not a good look for me!”",
  },
  {
    id: 71,
    quote:
      "“Here’s the mini-cherry on top of the regular cherry on top of the sundae of awesomeness that is my life.”",
  },
  {
    id: 72,
    quote:
      "“God, it’s me, Barney. What up? I know we don’t talk much, but I know a lot of girls call out your name because of me.”",
  },
  {
    id: 73,
    quote:
      "“Article 100: “When pulling up to a stoplight, a Bro lowers his window so that all might enjoy his music selection.”",
  },
  {
    id: 74,
    quote:
      "“If there happens to be a hot chick driving the car next to the Bro, the Bro shall put his sunglasses down to get a better look. If he’s not wearing his sunglasses, he will first put them on, then pull down to get a better look.”",
  },
  {
    id: 75,
    quote:
      "“When I let a day go by without talking you… That day is just no good.”",
  },
  {
    id: 76,
    quote:
      "“There are only three things I would fight: the stubborn clasp of a bra, a paternity suit – nine for ten… and the urge to vomit whenever I see someone wear brown shoes with a black suit.”",
  },
  {
    id: 77,
    quote:
      "“ARTICLE 130 If a Bro learns another Bro has been in a traffic accident, he must first ask what type of car he collided with and whether it got totaled before asking if his Bro is okay.”",
  },
  {
    id: 78,
    quote:
      "“Jesus waited three days to come back to life. It was perfect! If he had only waited one day, a lot of people wouldn’t have even heard he died. They’d be all, “Hey Jesus, what up?” and Jesus would probably be like, “What up? I died yesterday!” and they’d be all, “Uh, you look pretty alive to me, dude…”",
  },
  {
    id: 79,
    quote:
      "“Challenge accepted. I, Barney Stinson, of sound mind and amazing body will wear these overalls until have sex with a woman.”",
  },
  {
    id: 80,
    quote:
      "“Step six is called purg— wait for it. Keep waiting. Keep waiting for all of eternity only to discover that there’s no escape —atory.”",
  },
  {
    id: 81,
    quote:
      "“Marry? Ha-ha-ha. No. I have something much, much more special in mind. Petra, here, if all goes well, will be my — wait for it — 200th! Sorry, I couldn’t wait. It’s all too exciting.”",
  },
  {
    id: 82,
    quote:
      "“If I can talk a stripper into paying me for a lap dance, I think I can talk my way out of a ticket.”",
  },
  {
    id: 83,
    quote: "“I’m sorry, suits, let’s make amends,",
  },
  {
    id: 84,
    quote:
      "“Dude, working together is going to be legen— wait for it — I’ll send you an in-office memo with the rest because we freaking work together!”",
  },
  {
    id: 85,
    quote:
      "“You’re a master. You are legend— wait for it —daddy. Legend-daddy. The man is a god!”",
  },
  {
    id: 86,
    quote:
      "“Yeah, getting to stand next to me while I press the button. That is going to be legen— wait for it —dary-adjacent. Legendary-adjacent!”",
  },
  {
    id: 87,
    quote:
      "“You watch, Ted, tonight is going to be legen— it’s the night we stole a camel! Which means it will be full of drama —dary.”",
  },
  {
    id: 88,
    quote:
      "“I’m just gonna grab this star to put on top of the tree. It’s gonna be legend— wait for it —merry.”",
  },
  {
    id: 89,
    quote:
      "“Here’s my dilemma. My average night is like an average guy’s bachelor party, so no offense, but if you two plan it it’s going to be ordi— why wait for it —nary. Ordinary.”",
  },
  {
    id: 90,
    quote:
      "“When we leave the church, they’re going to release 100 doves. It’s going to be avi — wait for it — ary. Aviary.”",
  },
  {
    id: 91,
    quote:
      "“If I could nail any celebrity, it would definitely be Scarlett Johansson. Hot, talented, and nobody does that many Woody Allen movies without serious daddy issues.”",
  },
  {
    id: 92,
    quote:
      "“Ted, I’m gonna teach you how to live. … Lesson 1, lose the goatee. It doesn’t go with your suit.”",
  },
  {
    id: 93,
    quote:
      "“Hello, Ted. If you’re watching this tape – and I knew that you would – It means you have my porn collection, and that means either I am dead, or in a relationship. If I’m dead, I need you to take me to the Hamptons and recreate “Weekend at Bernie’s.” I want to dance. I want to have sex with a young woman. I want to go skiing. If, on the other hand, I’m in a relationship, then for the love of God… get me out of it!”",
  },
  {
    id: 94,
    quote:
      "“You don’t bring a date to a wedding, That’s like bringing a deer carcass on a hunting trip.”",
  },
  {
    id: 95,
    quote:
      "“ARTICLE 120 A Bro always calls another Bro by his last name. Exception: If a Bro’s last name is also a racial epithet.”",
  },
  {
    id: 96,
    quote:
      "“Of course! We should buy a bar. … And dude dude dude duuuude. The name of our bar: Puzzles. People will be like, ‘Why is it called Puzzles?’ That’s the puzzle.”",
  },
  {
    id: 97,
    quote: "“Possimpible: the place where the possible and impossible meet.”",
  },
  {
    id: 98,
    quote: "“Without me, it’s just aweso.”",
  },
  {
    id: 99,
    quote:
      "The point is, marriage is stupid. Every day new 22-year olds go into bars, and call me glass-half-full, but I think they’re getting dumber.",
  },
  {
    id: 100,
    quote:
      "“The camera loves me. More than loves me: the camera lusts me. The camera wants to put on some nice lingerie, pop in an Al Green CD, dim the lights and do me as I lie there with my eyes closed.”",
  },
];

module.exports = quotes;
