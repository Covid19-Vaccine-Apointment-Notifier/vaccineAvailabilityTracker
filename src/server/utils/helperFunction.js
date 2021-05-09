import { secret } from "./constants";
const jwt = require("jsonwebtoken");

export const generateUserToken = (_id) =>
  jwt.sign({ _id }, secret, {
    expiresIn: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
  });

export const firstCharUpper = (string) =>
  string.slice(0, 1).toUpperCase() + string.slice(1, string.length);

export const validateEmail = (email) => {
  const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexPattern.test(email);
};

export const hasKey = (obj, key) => !!(key in obj && obj[key]);

export const sanitizedString = function (str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, (match, contents, offset, s) => `\\${match}`);
};

export const sanitizedEmail = function (str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, " ");
};

export const adminCheck = (user) => (user && user.adminAccess ? true : false);

export const randomString = () => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let string_length = 1;
  let randomstring = "";
  for (let i = 0; i < string_length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};
