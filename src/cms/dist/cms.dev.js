"use strict";

var _netlifyCmsApp = _interopRequireDefault(require("netlify-cms-app"));

var _netlifyCmsMediaLibraryUploadcare = _interopRequireDefault(require("netlify-cms-media-library-uploadcare"));

var _netlifyCmsMediaLibraryCloudinary = _interopRequireDefault(require("netlify-cms-media-library-cloudinary"));

var _AboutPagePreview = _interopRequireDefault(require("./preview-templates/AboutPagePreview"));

var _BlogPostPreview = _interopRequireDefault(require("./preview-templates/BlogPostPreview"));

var _ProductPagePreview = _interopRequireDefault(require("./preview-templates/ProductPagePreview"));

var _IndexPagePreview = _interopRequireDefault(require("./preview-templates/IndexPagePreview"));

var _ServicesPagePreview = _interopRequireDefault(require("./preview-templates/ServicesPagePreview"));

var _YoutubeCustomWidget = _interopRequireDefault(require("./custom-widget/YoutubeCustomWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_netlifyCmsApp["default"].registerMediaLibrary(_netlifyCmsMediaLibraryUploadcare["default"]);

_netlifyCmsApp["default"].registerMediaLibrary(_netlifyCmsMediaLibraryCloudinary["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('index', _IndexPagePreview["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('about', _AboutPagePreview["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('products', _ProductPagePreview["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('blog', _BlogPostPreview["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('services', _ServicesPagePreview["default"]); //Custom Widjets instead of segments


_netlifyCmsApp["default"].registerEditorComponent(_YoutubeCustomWidget["default"]);