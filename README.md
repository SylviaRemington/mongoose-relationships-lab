# Mongoose Relationships Lab

## Overview

This lab is designed to help you practice working with relationships in Mongoose, specifically focusing on referencing between collections. You'll work with a movie database that has two main collections: Movies and Genres.

## Current Schema Structure

- **Genre Schema**: Contains a name and references to movies
- **Movie Schema**: Contains title, release year, and references to a genre

## Lab Challenge

### Part 1: Understanding the Current Setup

1. Review the existing schemas in `models/movie.js` and `models/genre.js`
2. Understand how the current relationship is structured (Movies reference Genres)

### Part 2: Practice Tasks

Complete the following tasks by implementing the functions in `queries.js`:

1. **Create a New Genre**

   - Implement the `createGenre` function to create a new genre
   - Test with different genre names

2. **Create a Movie with Genre Reference**

   - Implement the `createMovie` function to create a new movie
   - Ensure the movie is properly linked to its genre
   - Update the genre's movies array with the new movie reference

3. **Query Movies by Genre**

   - Implement the `findMovies` function to find all movies in a specific genre
   - Use the genre's ObjectId to filter movies

4. **Populate Genre with Movies**
   - Implement the `findMoviesByGenre` function
   - Use `populate()` to get all movie details when querying a genre

### Part 3: Advanced Challenge

1. Add a new field to the Movie schema: `director` (String)
2. Create a new schema for `Director` with fields:
   - name (String)
   - birthYear (Number)
   - movies (Array of references to Movie)
3. Update the Movie schema to reference the Director
4. Create functions to:
   - Create a new director
   - Create a movie with director reference
   - Find all movies by a specific director
   - Find a director and populate their movies

## Getting Started

1. Install dependencies: `npm install`
2. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
3. Run the queries: `node queries.js`

## Tips

- Use `mongoose.Schema.Types.ObjectId` for references
- Remember to use `populate()` when you want to get the full referenced documents
- Use `$push` to add items to arrays in referenced documents
- Test your queries one at a time by uncommenting them in the `runQueries` function

## Actor Challenge

In this challenge, you'll implement a more complex relationship structure involving actors and movies.

### Part 1: Create the Actor Schema

Create a new file `models/actor.js` with a schema that includes:

- name (String, required)
- birthYear (Number)
- movies (Array of references to Movie)
- biography (String)
- awards (Array of Strings)

### Part 2: Update the Movie Schema

Modify the Movie schema to include:

- actors (Array of references to Actor)
- Add any additional fields you think would be relevant

### Part 3: Implement Actor Queries

Create new functions in `queries.js` to:

1. Create a new actor
2. Add an actor to a movie
3. Find all movies an actor has appeared in
4. Find all actors in a specific movie
5. Find actors who have worked together (appeared in the same movies)
6. Find the most prolific actor (actor with the most movies)

### Part 4: Advanced Actor Queries

Implement more complex queries:

1. Find actors who have worked in specific genres
2. Find actors who have worked with a specific director
3. Create a function to update an actor's biography
4. Create a function to add awards to an actor's record

### Tips for the Actor Challenge

- Remember to use `populate()` when you need the full actor or movie details
- Consider using MongoDB aggregation for complex queries
- Use `$addToSet` instead of `$push` when adding to arrays to prevent duplicates
- Consider adding indexes to frequently queried fields

### Example Actor-Movie Relationship

```javascript
// Example of creating an actor and linking them to a movie
const createActorAndLinkToMovie = async () => {
  const actor = await Actor.create({
    name: "Tom Hanks",
    birthYear: 1956,
    biography: "Academy Award-winning actor",
    awards: ["Oscar", "Golden Globe"],
  });

  await Movie.findByIdAndUpdate(movieId, {
    $addToSet: { actors: actor._id },
  });

  await Actor.findByIdAndUpdate(actor._id, {
    $addToSet: { movies: movieId },
  });
};
```

## Bonus Challenge

Try implementing a many-to-many relationship where:

- Movies can have multiple genres
- Genres can have multiple movies
- Update your queries to handle this new relationship structure
