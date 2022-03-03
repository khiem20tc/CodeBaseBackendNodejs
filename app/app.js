import createError from "http-errors";
import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

import mountRoutes from "./routes";

const app = express();

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  logger("combined", {
    stream: {
      write: function (message) {
        console.log(message);
      },
    },
  })
);

// var whitelist =  ['http://128.199.192.37:7970']
// var corsOptions = {
//   origin: function (origin, callback) {
//     console.log("origin",origin);
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//       //return res.status(404).json("Your IP is not allowed by CORS")
//     }
//   }
// }

app.use(helmet());
//app.use(cors(corsOptions));
app.use(cors());
app.use(compression());
app.use(json({ limit: "20mb" }));
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/favicon.ico", (req, res) => res.status(204));

mountRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.message === "Not Found") {
    return res.status(404).json("Path not found");
  }

  // log error
  const errToLog = err.realError ? err.realError : err;
  const errToReturn = err.realError ? err.userError : err;

  console.log("ERROR:", errToLog);
  console.log(
    `${errToLog.message}
    STACK: ${errToLog.stack}
    Header: ${JSON.stringify(req.headers)}
    Params: ${JSON.stringify(req.params)}
    Query: ${JSON.stringify(req.query)}
    Body: ${JSON.stringify(req.body)}
    Return to user: ${JSON.stringify(errToReturn)}`
  );

  let status = 500;
  if (errToReturn.code) {
    status = errToReturn.code / 100;
  }
  return res.status(status).json({
    error: errToReturn,
  });
});

export default app;
