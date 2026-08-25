
const currentUrl = window.location.href;
const siteUrl = "https://suzhaoqi.github.io";
let updatedUrl = currentUrl.replace("https://suzhaoqi.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "a simple whitespace theme for academics",
          section: "",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-论文",
          title: "论文",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tables/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/code/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/the_godfather/";
            },},{id: "news-论文-caphy-capturing-physical-properties-for-animatable-human-avatars-第一作者-被iccv-2023录用",
          title: '论文 “CaPhy: Capturing Physical Properties for Animatable Human Avatars” (第一作者) 被ICCV 2023录用',
          description: "",
          section: "",},{id: "news-获选2023年度国家资助博士后研究人员计划-c档",
          title: '获选2023年度国家资助博士后研究人员计划 （C档）',
          description: "",
          section: "",},{id: "news-论文-layga-layered-gaussian-avatars-for-animatable-clothing-transfer-第三作者-被siggraph-2024录用",
          title: '论文 “LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer” (第三作者) 被SIGGRAPH 2024录用',
          description: "",
          section: "",},{id: "news-专题报告-四维具身影像生成-第二作者-发表于-中国计算机学会通讯-2024年6月刊",
          title: '专题报告《四维具身影像生成》（第二作者）发表于《中国计算机学会通讯》2024年6月刊',
          description: "",
          section: "",},{id: "news-论文-3d-gaussian-parametric-head-model-第四作者-被eccv-2024录用",
          title: '论文 “3D Gaussian Parametric Head Model” (第四作者) 被ECCV 2024录用',
          description: "",
          section: "",},{id: "news-获选国自然青年科学基金项目-2025-1-2027-12",
          title: '获选国自然青年科学基金项目（2025.1-2027.12）',
          description: "",
          section: "",},{id: "news-论文-gphm-gaussian-parametric-head-model-for-monocular-head-avatar-reconstruction-第二作者-被ieee-tpami录用",
          title: '论文 “GPHM: Gaussian Parametric Head Model for Monocular Head Avatar Reconstruction” (第二作者) 被IEEE...',
          description: "",
          section: "",},{id: "news-论文-parametric-gaussian-human-model-generalizable-prior-for-efficient-and-realistic-human-avatar-modeling-被3dv-2026录用",
          title: '论文 “Parametric Gaussian Human Model: Generalizable Prior for Efficient and Realistic Human Avatar...',
          description: "",
          section: "",},{id: "news-论文-ydcnet-ycbcr-and-depth-aware-collaborative-approach-for-remote-sensing-image-dehazing-被ieee-grsl录用",
          title: '论文 “YDCNet: YCbCr and Depth-Aware Collaborative Approach for Remote Sensing Image Dehazing” 被IEEE...',
          description: "",
          section: "",},{id: "news-论文-high-fidelity-text-controllable-3d-digital-human-generation-via-3d-gaussian-splatting-第一作者-被ieee-mlmc-2026录用",
          title: '论文”High-Fidelity Text-Controllable 3D Digital Human Generation via 3D Gaussian Splatting” (第一作者) 被IEEE MLMC...',
          description: "",
          section: "",},{id: "news-论文-semanticsplat-feed-forward-3d-scene-understanding-with-language-aware-gaussian-fields-被cvmj录用",
          title: '论文 “SemanticSplat: Feed-Forward 3D Scene Understanding with Language-Aware Gaussian Fields” 被CVMJ录用',
          description: "",
          section: "",},{id: "news-论文-thermosplat-cross-modal-3d-gaussian-splatting-with-feature-modulation-and-geometry-decoupling-第一作者-被neurocomputing录用",
          title: '论文 “ThermoSplat: Cross-Modal 3D Gaussian Splatting with Feature Modulation and Geometry Decoupling” (第一作者)...',
          description: "",
          section: "",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "",handler: () => {
              window.location.href = "/zh-cn/projects/1_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "",handler: () => {
              window.location.href = "/zh-cn/projects/3_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "",handler: () => {
              window.location.href = "/zh-cn/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "",handler: () => {
              window.location.href = "/zh-cn/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "",handler: () => {
              window.location.href = "/zh-cn/projects/9_project/";
            },},{id: "projects-caphy-capturing-physical-properties-for-animatable-human-avatars",
          title: 'CaPhy: Capturing Physical Properties for Animatable Human Avatars',
          description: "ICCV 2023",
          section: "",handler: () => {
              window.location.href = "/zh-cn/projects/CaPhy/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: '',
        handler: () => {
          window.open("/assets/pdf/zh-cn//assets/pdf/[LANG]/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: '',
        section: '',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: '',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: '',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("system");
      },
    },];
