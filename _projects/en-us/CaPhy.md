---
page_id: CaPhy
layout: page
title: "CaPhy: Capturing Physical Properties for Animatable Human Avatars"
description: <h2>ICCV 2023</h2>
img: assets/img/publication_preview/CaPhy.gif
importance: 1
category: work
related_publications: caphy_su2023
---

[Zhaoqi Su](https://suzhaoqi.github.io/)<sup>1</sup>, [Liangxiao Hu](https://huliangxiao.github.io/)<sup>2</sup>, [Siyou Lin](https://jsnln.github.io/)<sup>1</sup>, [Hongwen Zhang](https://hongwenzhang.github.io/)<sup>1</sup>, [Shengping Zhang](http://homepage.hit.edu.cn/zhangshengping)<sup>2</sup>, [Justus Thies](https://justusthies.github.io/)<sup>3</sup>, [Yebin Liu](http://www.liuyebin.com/)<sup>1</sup><br>
<sup>1</sup>Tsinghua University, Beijing, China<br>
<sup>2</sup>Harbin Institute of Technology, Weihai, Shandong, China<br>
<sup>3</sup>Max Planck Institute for Intelligent Systems, Tübingen, Germany


<hr>


<h2 style="text-align:center">Abstract</h2>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/img/CaPhy/intro.mp4" class="img-fluid rounded z-depth-1" autoplay=true muted=true loop=true controls=true %}
    </div>
</div>
<div class="caption">
    CaPhy, a novel method for reconstructing physics-based 3D human avatars from 3D scans.
</div>

We present CaPhy, a novel method for reconstructing animatable human avatars with realistic dynamic properties for clothing. Specifically, we aim for capturing the geometric and physical properties of the clothing from real observations. This allows us to apply novel poses to the human avatar with physically correct deformations and wrinkles of the clothing. To this end, we combine unsupervised training with physics-based losses and 3D-supervised training using scanned data to reconstruct a dynamic model of clothing that is physically realistic and conforms to the human scans. We also optimize the physical parameters of the underlying physical model from the scans by introducing gradient constraints of the physics-based losses. In contrast to previous work on 3D avatar reconstruction, our method is able to generalize to novel poses with realistic dynamic cloth deformations. Experiments on several subjects demonstrate that our method can estimate the physical properties of the garments, resulting in superior quantitative and qualitative results compared with previous methods.


<hr>


<h2 style="text-align:center">Method</h2>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/CaPhy/pipeline.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of CaPhy.
</div>


<hr>


<h2 style="text-align:center">Results</h2>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/CaPhy/results_cmp.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Animation results of the reconstructed digital humans using different methods.
</div>


<hr>


<h2 style="text-align:center">Technical Paper</h2>

<div class="row">
    <a href="https://suzhaoqi.github.io/assets/pdf/CaPhy.pdf">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/CaPhy/paper.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    </a>
</div>



<hr>


<h2 style="text-align:center">Demo Video</h2>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/img/CaPhy/CaPhy - demo.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
