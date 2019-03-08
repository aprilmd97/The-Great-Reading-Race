const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Who Takes The Train",
    author: "Mabel Mnensa",
    synopsis: "In Who Takes The Train a child looks at all the different people and offers that come and go on the train while enroute to her destination. This is a fun book for young children and good preparation for an upcoming journey.",
    image: "https://freekidsbooks.org/wp-content/uploads/2019/02/who-takes-the-train-cover-300x291.png",
    date: new Date(Date.now())
  },
  {
    title: "Professor Archie Makes A Bang",
    author: "Bel Richardson",
    synopsis:
      "In Archie Makes a Big Bang, a science theme early reader from bookbot, we follow the fun tale of an inventor and his creative inventions. This is an early reader book, aimed at introducing phonics, sound out words, and high-frequency sight words.",
    image: "https://freekidsbooks.org/wp-content/uploads/2018/09/Professor_Archie_Makes_a_Bang-Early-Reader-Cover.jpg",
    date: new Date(Date.now())

  },
  {
    title: "Laundry Day",
    author: "Mathangi Subramanian",
    synopsis:
      "A day in the village doing laundry is fun for everyone in this short early reader. Another great book brought to us by Pratham and Storyweaver.",
    image: "https://freekidsbooks.org/wp-content/uploads/2019/02/who-takes-the-train-cover.png",
    date: new Date(Date.now())

  },
  {
    title: "My Father's Dragon",
    author: "Ruth Stiles GAnnet",
    synopsis:
      "This is a very humorous story about how the narrator’s father and a friendly stray cat go in search of an imprisoned young dragon. On the way deceiving the wild animals who want to stop him or eat him, or both, with cute tricks and traps. Hilarious imagery results as the animals give chase. ",
    image: "https://freekidsbooks.org/wp-content/uploads/2018/10/My_Fathers_Dragon_Classic_Stories-Cover.jpg",
    date: new Date(Date.now())

  },
  {
    title: "Whoop, GOes the Pufferfish - Life ina tidal pool",
    author: "Sejal Mehta",
    synopsis:"A baby pufferfish gets caught in a tidal pool, his friends help him see there isn’t any reason to panic because the tide will come in again. Another great creative commons story from Pratham’s Storyweaver platform.",
    image: "https://freekidsbooks.org/wp-content/uploads/2019/03/Pufferfish_FKB_Cover.jpg",
    date: new Date(Date.now())

  },
  {
    title: "My Best Friend",
    author: "Lal Anupa",
    synopsis:
      "In My Best Friend, we see how imagination and dreams can make something feel real. A young girl plays with her mirror image, but the image doesn’t talk back, until she falls asleep.",
    image: "https://freekidsbooks.org/wp-content/uploads/2019/02/my-best-friend-FKB-cover.jpg",
    date: new Date(Date.now())

  },
  {
    title: "I Don't Want To Go To Sleep - Bedtime Fun",
    author: "Subi Bosa",
    synopsis:
      "In I Don’t Want To Sleep we find some fun bedtime solutions for the child that doesn’t want to sleep. A fun bedtime book for young children.",
    image: "https://freekidsbooks.org/wp-content/uploads/2019/02/I-dont-want-to-go-to-sleep-cover.png",
    date: new Date(Date.now())

  }
 
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
