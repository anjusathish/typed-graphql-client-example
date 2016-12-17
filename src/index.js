"use strict";
var apollo_client_1 = require("apollo-client");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_apollo_1 = require("react-apollo");
var graphqlDocuments = require('./documents.json');
var client = new apollo_client_1["default"]();
var Feed = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "GitHunt Feed"),
        react_1["default"].createElement("ul", null, data.feed.map(function (_a) {
            var repository = _a.repository, postedBy = _a.postedBy;
            return (react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "https://github.com/" + repository.owner.login + "/" + repository.name },
                    repository.owner.login,
                    "/",
                    repository.name),
                react_1["default"].createElement("span", null, " - posted by: "),
                react_1["default"].createElement("a", { href: "https://github.com/" + postedBy.login }, postedBy.login)));
        }))));
};
var FeedWithData = react_apollo_1.graphql(graphqlDocuments['Feed.graphql'])(Feed);
var App = function () { return (react_1["default"].createElement(react_apollo_1.ApolloProvider, { client: client },
    react_1["default"].createElement(FeedWithData, null))); };
react_dom_1["default"].render(react_1["default"].createElement(App, null), document.getElementById("app"));
