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
      <div>
        <h2>What is the Different between javascript and nodejs</h2>
        <p>
          Ans: Javascript is a simple object-oriented programming language for
          building interactive HTML pages. JavaScript is also commonly used in
          the development of games and mobile applications. The program can only
          be executed and run in an internet browser because it is interpreted
          as scripting. To run and execute the code outside the browser, we can
          utilize Node.js. For executing JavaScript on the server, Node.js is a
          bridge, open-source Js runtime environment. JavaScript code can now
          execute outside of the browser, thanks to Node.js. Node.js has many
          components and is primarily used for web development. It may run on
          various operating systems, including Windows, Linux, and Mac OS. It
          provides a cross-platform runtime environment for developing highly
          scalable server-side JavaScript applications with event-driven,
          non-blocking (asynchronous) I/O.
        </p>
      </div>
    </div>
  );
};

export default Blog;
