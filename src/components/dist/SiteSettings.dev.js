"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("gatsby");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query SITE_SETTINGS {\n      markdownRemark(frontmatter: {templateKey: {eq: \"sitesettings\"}}) {\n        id\n        frontmatter {\n          headercolor\n          headerbackgroundimage {\n            childImageSharp {\n              fluid(maxWidth: 2000, quality: 95) {\n                ...GatsbyImageSharpFluid_withWebp\n              }\n            }\n          }\n          menutype\n          fbpageid\n          location\n        }\n      }\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GetSiteSettings = function GetSiteSettings() {
  var _useStaticQuery = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject())),
      markdownRemark = _useStaticQuery.markdownRemark;

  return markdownRemark.frontmatter;
};

var _default = GetSiteSettings;
exports["default"] = _default;