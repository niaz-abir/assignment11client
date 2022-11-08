import React from "react";

const Blog = () => {
  return (
    <div className="ml-8 mt-5">
      <h1 className="text-4xl text-center mb-6 font-bold">Our Blog Question</h1>
      <div className="mb-6 w-3/4 ">
        <h2 className="mb-6 text-2xl font-semibold">
          Q1: What is Different between Sql and NoSql?
        </h2>
        <p>
          Ans: Structured Query language (SQL) pronounced as “S-Q-L” or
          sometimes as “See-Quel” is the standard language for dealing with
          Relational Databases. A relational database defines relationships in
          the form of tables. SQL programming can be effectively used to insert,
          search, update, delete database records. That doesn’t mean SQL cannot
          do things beyond that. NoSQL is a non-relational DMS, that does not
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
      <div className="mb-6 w-3/4">
        <h2 className="mb-6 text-2xl font-semibold">
          Q2: What is Jwt? and how does it work?
        </h2>
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
      <div className="mb-6 w-3/4">
        <h2 className="mb-6 text-2xl font-semibold">
          Q3 :What is the Different between javascript and nodejs?
        </h2>
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
      <div className="mb-6 w-3/4">
        <h2 className="Mb-6 text-2xl font-semibold">
          Q4: How does Nodejs handle multiple request at the same time?
        </h2>
        <p>
          Ans: Given a NodeJS application, since Node is single threaded, say if
          processing involves a Promise.all that takes 8 seconds, does this mean
          that the client request that comes after this request would need to
          wait for eight seconds? No. NodeJS event loop is single threaded. The
          entire server architecture for NodeJS is not single threaded. Before
          getting into the Node server architecture, to take a look at typical
          multithreaded request response model, the web server would have
          multiple threads and when concurrent requests get to the webserver,
          the webserver picks threadOne from the threadPool and threadOne
          processes requestOne and responds to clientOne and when the second
          request comes in, the web server picks up the second thread from the
          threadPool and picks up requestTwo and processes it and responds to
          clientTwo. threadOne is responsible for all kinds of operations that
          requestOne demanded including doing any blocking IO operations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
