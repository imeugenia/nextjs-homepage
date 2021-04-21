const contentful = require("contentful");
const fs = require("fs");

const API_SPACE_ID = "cczllbmg75ay";
const API_KEY =
  "c1782ea2b12077bbc6f35d39d322af845aff60a0486717208c9803b520c28d9b";

const client = contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_KEY,
});

export const fetchPosts = () =>
  client
    .getEntries({
      content_type: "card",
    })
    .then((entries) => {
      return entries;
    });

export const fetchProjects = () =>
  client
    .getEntries({
      content_type: "projects",
    })
    .then((entries) => {
      return entries;
    });

export const fetchCode = () =>
  client
    .getEntries({
      content_type: "code",
    })
    .then((entries) => {
      return entries;
    });

export const fetchPics = () =>
  client
    .getEntries({
      content_type: "pics",
    })
    .then((entries) => {
      return entries;
    });

export const fetchContacts = async () =>
  client
    .getEntries({
      content_type: "contacts",
    })
    .then((entries) => {
      return entries;
    });
