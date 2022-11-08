import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Our Blog Question</h1>
      <div>
        <h2>What is Different between Sql and NoSql?</h2>
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
      <div>
        <h2>What is Jwt? and how does it work?</h2>
        <p>
          jWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.jwt offers er from other
          web tokens in that they contain a set of claims. Claims are used to
          transmit information between two parties. What these claims are
          depends on the use case at hand. For example, a claim may assert who
          issued the token, how long it is valid for, or what permissions the
          client has been granted.
        </p>
      </div>
    </div>
  );
};

export default Blog;
