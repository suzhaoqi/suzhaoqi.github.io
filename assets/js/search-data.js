
const currentUrl = window.location.href;
const siteUrl = "https://suzhaoqi.github.io";
let updatedUrl = currentUrl.replace("https://suzhaoqi.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "a simple whitespace theme for academics",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-caphy-capturing-physical-properties-for-animatable-human-avatars-1st-author-is-accepted-by-iccv-2023",
          title: 'Paper “CaPhy: Capturing Physical Properties for Animatable Human Avatars” (1st author) is accepted...',
          description: "",
          section: "News",},{id: "news-sponsered-by-the-postdoctoral-fellowship-program-of-cpsf-c-level",
          title: 'Sponsered by the Postdoctoral Fellowship Program of CPSF (C-level)',
          description: "",
          section: "News",},{id: "news-paper-layga-layered-gaussian-avatars-for-animatable-clothing-transfer-3rd-author-is-accepted-by-siggraph-2024",
          title: 'Paper “LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer” (3rd author) is accepted...',
          description: "",
          section: "News",},{id: "news-the-special-report-four-dimensional-embodied-image-generation-2nd-author-is-published-in-the-june-2024-issue-of-communications-of-the-china-computer-federation",
          title: 'The special report “Four-Dimensional Embodied Image Generation” (2nd author) is published in the...',
          description: "",
          section: "News",},{id: "news-paper-3d-gaussian-parametric-head-model-is-accepted-by-eccv-2024",
          title: 'Paper “3D Gaussian Parametric Head Model” is accepted by ECCV 2024',
          description: "",
          section: "News",},{id: "news-sponsered-by-the-young-scientists-fund-of-nsfc-2025-1-2027-12",
          title: 'Sponsered by the Young Scientists Fund of NSFC (2025.1-2027.12)',
          description: "",
          section: "News",},{id: "news-paper-gphm-gaussian-parametric-head-model-for-monocular-head-avatar-reconstruction-2nd-author-is-accepted-by-ieee-tpami",
          title: 'Paper “GPHM: Gaussian Parametric Head Model for Monocular Head Avatar Reconstruction” (2nd author)...',
          description: "",
          section: "News",},{id: "news-paper-parametric-gaussian-human-model-generalizable-prior-for-efficient-and-realistic-human-avatar-modeling-is-accepted-by-3dv-2026",
          title: 'Paper “Parametric Gaussian Human Model: Generalizable Prior for Efficient and Realistic Human Avatar...',
          description: "",
          section: "News",},{id: "news-paper-ydcnet-ycbcr-and-depth-aware-collaborative-approach-for-remote-sensing-image-dehazing-is-accepted-by-ieee-grsl",
          title: 'Paper “YDCNet: YCbCr and Depth-Aware Collaborative Approach for Remote Sensing Image Dehazing” is...',
          description: "",
          section: "News",},{id: "news-paper-high-fidelity-text-controllable-3d-digital-human-generation-via-3d-gaussian-splatting-1rd-author-is-accepted-by-ieee-mlmc-2026",
          title: 'Paper “High-Fidelity Text-Controllable 3D Digital Human Generation via 3D Gaussian Splatting” (1rd author)...',
          description: "",
          section: "News",},{id: "news-paper-semanticsplat-feed-forward-3d-scene-understanding-with-language-aware-gaussian-fields-is-accepted-by-cvmj",
          title: 'Paper “SemanticSplat: Feed-Forward 3D Scene Understanding with Language-Aware Gaussian Fields” is accepted by...',
          description: "",
          section: "News",},{id: "news-paper-thermosplat-cross-modal-3d-gaussian-splatting-with-feature-modulation-and-geometry-decoupling-1st-author-is-accepted-by-neurocomputing",
          title: 'Paper “ThermoSplat: Cross-Modal 3D Gaussian Splatting with Feature Modulation and Geometry Decoupling” (1st...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-caphy-capturing-physical-properties-for-animatable-human-avatars",
          title: 'CaPhy: Capturing Physical Properties for Animatable Human Avatars',
          description: "ICCV 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CaPhy/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%7A%68%61%6F%71%69@%66%7A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3651-8373", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2a2KUQ0AAAAJ", "_blank");
        },
      },{
          id: 'lang-zh-cn',
          title: 'zh-cn',
          section: 'Languages',
          handler: () => {
            window.location.href = "/zh-cn" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
