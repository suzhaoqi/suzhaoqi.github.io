
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
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-论文",
          title: "论文",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/the_godfather/";
            },},{id: "news-论文-caphy-capturing-physical-properties-for-animatable-human-avatars-第一作者-被iccv-2023录用",
          title: '论文 “CaPhy: Capturing Physical Properties for Animatable Human Avatars” (第一作者) 被ICCV 2023录用',
          description: "",
          section: "新闻",},{id: "news-获选2023年度国家资助博士后研究人员计划-c档",
          title: '获选2023年度国家资助博士后研究人员计划 （C档）',
          description: "",
          section: "新闻",},{id: "news-论文-layga-layered-gaussian-avatars-for-animatable-clothing-transfer-第三作者-被siggraph-2024录用",
          title: '论文 “LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer” (第三作者) 被SIGGRAPH 2024录用',
          description: "",
          section: "新闻",},{id: "news-专题报告-四维具身影像生成-第二作者-发表于-中国计算机学会通讯-2024年6月刊",
          title: '专题报告《四维具身影像生成》（第二作者）发表于《中国计算机学会通讯》2024年6月刊',
          description: "",
          section: "新闻",},{id: "news-论文-3d-gaussian-parametric-head-model-第四作者-被eccv-2024录用",
          title: '论文 “3D Gaussian Parametric Head Model” (第四作者) 被ECCV 2024录用',
          description: "",
          section: "新闻",},{id: "news-获选国自然青年科学基金项目-2025-1-2027-12",
          title: '获选国自然青年科学基金项目（2025.1-2027.12）',
          description: "",
          section: "新闻",},{id: "news-论文-gphm-gaussian-parametric-head-model-for-monocular-head-avatar-reconstruction-第二作者-被ieee-tpami录用",
          title: '论文 “GPHM: Gaussian Parametric Head Model for Monocular Head Avatar Reconstruction” (第二作者) 被IEEE...',
          description: "",
          section: "新闻",},{id: "news-论文-parametric-gaussian-human-model-generalizable-prior-for-efficient-and-realistic-human-avatar-modeling-被3dv-2026录用",
          title: '论文 “Parametric Gaussian Human Model: Generalizable Prior for Efficient and Realistic Human Avatar...',
          description: "",
          section: "新闻",},{id: "news-论文-ydcnet-ycbcr-and-depth-aware-collaborative-approach-for-remote-sensing-image-dehazing-被ieee-grsl录用",
          title: '论文 “YDCNet: YCbCr and Depth-Aware Collaborative Approach for Remote Sensing Image Dehazing” 被IEEE...',
          description: "",
          section: "新闻",},{id: "news-论文-high-fidelity-text-controllable-3d-digital-human-generation-via-3d-gaussian-splatting-第一作者-被ieee-mlmc-2026录用",
          title: '论文”High-Fidelity Text-Controllable 3D Digital Human Generation via 3D Gaussian Splatting” (第一作者) 被IEEE MLMC...',
          description: "",
          section: "新闻",},{id: "news-论文-semanticsplat-feed-forward-3d-scene-understanding-with-language-aware-gaussian-fields-被cvmj录用",
          title: '论文 “SemanticSplat: Feed-Forward 3D Scene Understanding with Language-Aware Gaussian Fields” 被CVMJ录用',
          description: "",
          section: "新闻",},{id: "news-论文-thermosplat-cross-modal-3d-gaussian-splatting-with-feature-modulation-and-geometry-decoupling-第一作者-被neurocomputing录用",
          title: '论文 “ThermoSplat: Cross-Modal 3D Gaussian Splatting with Feature Modulation and Geometry Decoupling” (第一作者)...',
          description: "",
          section: "新闻",},{id: "projects-caphy-capturing-physical-properties-for-animatable-human-avatars",
          title: 'CaPhy: Capturing Physical Properties for Animatable Human Avatars',
          description: "ICCV 2023",
          section: "Projects",handler: () => {
              window.location.href = "/zh-cn/projects/CaPhy/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%7A%68%61%6F%71%69@%66%7A%75.%65%64%75.%63%6E", "_blank");
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
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
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
