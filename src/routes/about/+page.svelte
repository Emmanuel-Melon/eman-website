<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
  import { customGradient } from '../../components/utils/ui';
</script>

<div class="text-center space-y-4 bg-base-200 p-4 mb-4">
  <h1 class={`text-5xl font-bold mx-auto ${customGradient()}`}>Who Am I?</h1>
	<p>
		I thrive on solving complex challenges and finding elegant solutions that push the boundaries
		of what's possible.
	</p>
</div>
<SectionWrapper>
	<div class="space-y-4 text-center">

		<div
			class="card flex-col md:flex-row mx-auto  card-side bg-base-100 rounded-none shadow w-11/12 md:w-3/4 max-w-4xl"
		>
			<div class="card-body  flex justify-center items-center">
				<div class="space-y-4 ">
					<h2 class="card-title text-center w-fit mx-auto">The Energy Man</h2>
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
	</div>
</SectionWrapper>
