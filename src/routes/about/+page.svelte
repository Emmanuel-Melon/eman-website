<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import cover from '$lib/images/cover.png';
</script>

<SectionWrapper>
	<div class="space-y-8 mt-8">
		<div
			class="card flex-col md:flex-row mx-auto h-2/5 card-side bg-zinc-900 rounded-none shadow w-11/12 md:w-3/4 max-w-4xl"
		>
			<figure class="border-4 border-primary border-double">
				<img src={cover} alt="Album" class="h-full" />
			</figure>
			<div class="card-body flex justify-center items-center">
				<div class="space-y-4">
					<h2 class="card-title">Emmanuel Gatwech</h2>
					<div class="divider text-primary-focus">Who Am I?</div>
					<p>
						With over 4 years of experience as a software developer, I have a track record of
						delivering high-quality products and adding value to distributed teams around the world.
						My technical expertise includes TypeScript, Next.js, GraphQL, Redis, PostgreSQL,
						Node.js, and Rust, and I am passionate about web performance, developer tooling,
						technical writing, and open source.
					</p>
				</div>
			</div>
		</div>
        <div class="flex gap-2">
            <div class="card w-3/4 mx-auto card-side bg-base-200 shadow-xl p-4">
                <div class="card-body">
                  <h2 class="card-title">Open Source</h2>
                  <p> I actively contribute to various projects on GitHub. By collaborating with talented developers from around the globe, we drive innovation, create cutting-edge solutions, and make technology accessible to all. Through my contributions, I have the opportunity to hone my skills, learn from industry experts, and give back to the developer community.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
              <div class="card w-3/4 mx-auto card-side bg-base-200 shadow-xl p-4">
                <div class="card-body">
                  <h2 class="card-title">Technical Writing</h2>
                  <p>I strive to demystify intricate topics, provide insights, and empower fellow developers on their learning journey. By distilling my experiences and expertise into engaging content, I aim to foster a culture of continuous learning and contribute to the growth of the developer community.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
              <div class="card w-3/4 mx-auto card-side bg-base-200 shadow-xl p-4">
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
