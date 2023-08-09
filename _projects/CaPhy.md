---
layout: page
title: "CaPhy: Capturing Physical Properties for Animatable Human Avatars"
description: <h2>ICCV 2023</h2>
img: assets/img/12.jpg
importance: 1
category: work
related_publications: 
---

[Zhaoqi Su](https://suzhaoqi.github.io/)<sup>1</sup>, [Liangxiao Hu](https://huliangxiao.github.io/)<sup>2</sup>, [Siyou Lin](https://jsnln.github.io/)<sup>1</sup>, [Hongwen Zhang](https://hongwenzhang.github.io/)<sup>1</sup>, [Shengping Zhang](http://homepage.hit.edu.cn/zhangshengping)<sup>2</sup>, [Justus Thies](https://justusthies.github.io/)<sup>3</sup>, [Yebin Liu](http://www.liuyebin.com/)<sup>1</sup><br>
<sup>1</sup>Tsinghua University, Beijing, China<br>
<sup>2</sup>Harbin Institute of Technology, Weihai, Shandong, China<br>
<sup>3</sup>Max Planck Institute for Intelligent Systems, Tübingen, Germany

<hr>

<h2 style="text-align:center">Abstract</h2>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/img/CaPhy/intro.mp4" class="img-fluid rounded z-depth-1" autoplay muted loop %}
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
        {% include figure.html path="assets/img/CaPhy/pipeline.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Given a small set of 3D scans of a subject in different poses, the naked body is reconstructed in terms of shape and pose. Static garment templates for the shirt and pants are reconstructed from the scans which are used in the optimization of the neural garment deformation model. Specifically, we optimize for parameters of our physics-based fabric model based on the 3D scans and train a garment simulation network that predicts the deformations conditioned on the pose. Note that the model is also trained on poses different from the scans using the physical constraints of the fabric model.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}

