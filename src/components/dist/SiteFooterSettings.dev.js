"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("gatsby");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query SITEFOOTER_SETTINGS {\n      markdownRemark(frontmatter: {templateKey: {eq: \"footersettings\"}}) {\n        id\n        frontmatter {\n          footertitle\n          footerdesc\n          twitter\n          facebook\n          ig\n        }\n      }\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GetFooterSettings = function GetFooterSettings() {
  var _useStaticQuery = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject())),
      markdownRemark = _useStaticQuery.markdownRemark;

  return markdownRemark.frontmatter;
};

var _default = GetFooterSettings;
exports["default"] = _default;