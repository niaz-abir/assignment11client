import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Our Blog Question</h1>
      <div>
        <h1>What is Different between Sql and NoSql?</h1>
        <p>
          Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as
          “See-Quel” is the standard language for dealing with Relational
          Databases. A relational database defines relationships in the form of
          tables. SQL programming can be effectively used to insert, search,
          update, delete database records. That doesn’t mean SQL cannot do
          things beyond that. NoSQL is a non-relational DMS, that does not
          require a fixed schema, avoids joins, and is easy to scale. NoSQL
          database is used for distributed data stores with humongous data
          storage needs. NoSQL is used for Big data and real-time web apps. For
          example companies like Twitter, Facebook, Google that collect
          terabytes of user data every single day.Traditional RDBMS uses SQL
          syntax to store and retrieve data for further insights. Instead, a
          NoSQL database system encompasses a wide range of database
          technologies that can store structured, semi-structured, unstructured
          and polymorphic data.
        </p>
      </div>
    </div>
  );
};

export default Blog;
