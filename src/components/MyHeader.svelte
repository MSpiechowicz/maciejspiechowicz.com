<header>
	<div class="logo-container">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="228"
			height="266"
			fill="none"
			viewBox="0 0 228 266"
		>
			<g class="Group 3">
				<path
					stroke="#000"
					stroke-linecap="round"
					stroke-width="8"
					d="M223.578 223.125S173-86.5 115 79.5 72.988-69.341 26.988 20.659 21.195 232.46 21.195 232.46"
					class="Vector 1"
				/>
				<path
					stroke="#000"
					stroke-linecap="round"
					stroke-width="8"
					d="M192 225.5s-8.734-47.998-16.5-81.5c-9.963-42.977-20.014-71.992-37.5-33-31.117 69.387-76.067 77.02-89.5 26C35.067 85.98 32 67 32 67"
					class="Vector 2"
				/>
			</g>
		</svg>
		<span>Maciej Spiechowicz</span>
	</div>
	<div class="nav-container">
		<nav>
			<a href="#about">About</a>
			<a href="#contact">Contact</a>
			<a href="#blog">Blog</a>
		</nav>
	</div>
	<div class="hamburger-container">
		<input
			type="checkbox"
			id="checkbox"
			class="checkbox checkbox--hidden"
		/>
		<label for="checkbox">
			<div class="hamburger">
				<span class="bar bar1"></span>
				<span class="bar bar2"></span>
				<span class="bar bar3"></span>
				<span class="bar bar4"></span>
			</div>
		</label>
	</div>
</header>

<style lang="scss">
	@import '../styles/header.scss';

    .nav-container {
        display: none;
    }

    .hamburger-container {
        display: block;
    }

    @media (min-width: 768px) {
        .nav-container {
            display: block;
        }

        .hamburger-container {
            display: none;
        }
    }

	.checkbox--hidden {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px;
		width: 1px;
		margin: -1px;
		padding: 0;
		border: 0;
	}

	.hamburger {
		margin: 0 auto;
		width: 30px;
		height: 30px;
		position: relative;
	}

	.hamburger .bar {
		padding: 0;
		width: 30px;
		height: 4px;
		background-color: rgb(8, 7, 7);
		display: block;
		border-radius: 4px;
		transition: all 0.4s ease-in-out;
		position: absolute;
	}

	.bar1 {
		top: 0;
	}

	.bar2,
	.bar3 {
		top: 13.5px;
	}

	.bar3 {
		right: 0;
	}

	.bar4 {
		bottom: 0;
	}

	.checkbox:checked + label > .hamburger > .bar1 {
		transform: translateX(40px);
		background-color: transparent;
	}

	.checkbox:checked + label > .hamburger > .bar2 {
		transform: rotate(45deg);
	}

	.checkbox:checked + label > .hamburger > .bar3 {
		transform: rotate(-45deg);
	}

	.checkbox:checked + label > .hamburger > .bar4 {
		transform: translateX(-40px);
		background-color: transparent;
	}
</style>
