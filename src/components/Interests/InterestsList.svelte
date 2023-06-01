<script>
    import 'iconify-icon';
    import SectionWrapper from "../SectionWrapper.svelte";
    import cover from "$lib/images/cover.png";
</script>

<SectionWrapper>
    <div class="bg-base-200  space-y-4 p-4">
        <div class="text-center space-y-4">
            <h3 class="text-3xl font-bold">Interests</h3>
            <p>
                Join me on this journey as we explore the endless possibilities of software development, push
                boundaries, and create impactful solutions together. Let's build something extraordinary!
            </p>
        </div>
        <div class="space-y-4">
            <div class="card w-3/4 mx-auto card-side bg-base-100 shadow-xl p-4">
                <figure class="w-2/5 grow"><img src={cover} alt="Movie"/></figure>
                <div class="card-body">
                  <h2 class="card-title">Open Source</h2>
                  <p> I actively contribute to various projects on GitHub. By collaborating with talented developers from around the globe, we drive innovation, create cutting-edge solutions, and make technology accessible to all. Through my contributions, I have the opportunity to hone my skills, learn from industry experts, and give back to the developer community.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
              <div class="card w-3/4 mx-auto card-side bg-base-100 shadow-xl p-4">
                <figure class="w-2/5 grow"><img src={cover} alt="Movie"/></figure>
                <div class="card-body">
                  <h2 class="card-title">Technical Writing</h2>
                  <p>I strive to demystify intricate topics, provide insights, and empower fellow developers on their learning journey. By distilling my experiences and expertise into engaging content, I aim to foster a culture of continuous learning and contribute to the growth of the developer community.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
              <div class="card w-3/4 mx-auto card-side bg-base-100 shadow-xl p-4">
                <figure class="w-2/5 grow"><img src={cover} alt="Movie"/></figure>
                <div class="card-body">
                  <h2 class="card-title">Mentoring</h2>
                  <p>With a passion for empowering others in the tech community, I actively serve as a coding coach at Codebar's Berlin and London chapters. Through mentoring, I have the privilege of sharing my knowledge and experience with aspiring developers, guiding them in their learning journey, and helping them overcome challenges. </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
        </div>
    </div>
</SectionWrapper>