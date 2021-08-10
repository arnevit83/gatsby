import CMS from "netlify-cms-app";

//import uploadcare from "netlify-cms-media-library-uploadcare";
//import cloudinary from "netlify-cms-media-library-c";
//

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

//import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
//import YoutubePreview from "./preview-templates/YoutubePreview";

//import youtube from "./custom-widget/YoutubeCustomWidget";

//import CustomWidget from "../components/custom-widgets/CustomWidget";

//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);
//CMS.registerEditorComponent("youtube", youtube);
//CMS.registerPreviewTemplate("youtube", youtube);

//CMS.registerPreviewTemplate(Yo utubePreview);

//CMS.registerEditorComponent("ImageOnly", CustomWidget);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", IndexPagePreview);
CMS.registerPreviewTemplate("thrive", IndexPagePreview);
CMS.registerPreviewTemplate("inclusivity", IndexPagePreview);
CMS.registerPreviewTemplate("events", IndexPagePreview);
CMS.registerPreviewTemplate("privacy", IndexPagePreview);
