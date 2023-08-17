<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
  import { customGradient } from '../../components/utils/ui';
</script>

<div class="text-center space-y-4 bg-base-200 p-4 mb-4">
  <h1 class={`text-5xl font-bold mx-auto ${customGradient()}`}>Who Am I?</h1>
</div>
<SectionWrapper>
	<div class="space-y-4 text-center w-3/5">
		<h2 class="card-title text-center w-fit mx-auto">The Energy Man</h2>
		<p>
			With over 4 years of experience as a software developer, I have a track record of
			delivering high-quality products and adding value to distributed teams around the world.
			My technical expertise includes TypeScript, Next.js, GraphQL, Redis, PostgreSQL,
			Node.js, and Rust, and I am passionate about web performance, developer tooling,
			technical writing, and open source.
		</p>
	</div>
</SectionWrapper>
